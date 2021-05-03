import _regeneratorRuntime from 'regenerator-runtime';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var headerToBase64 = function headerToBase64(header) {
  var b64auth = header.split(" ")[1];

  var _Buffer$from$toString = Buffer.from(b64auth, "base64").toString().split(":"),
      user = _Buffer$from$toString[0],
      password = _Buffer$from$toString[1];

  return [user, password];
};

var findAndCheckUser = function findAndCheckUser(user, password, users) {
  var foundUser = users.find(function (acct) {
    return acct.user === user && acct.password === password;
  });
  if (!foundUser) return false;
  return foundUser;
};

function checkBasicAuth(_x, _x2, _x3) {
  return _checkBasicAuth.apply(this, arguments);
}

function _checkBasicAuth() {
  _checkBasicAuth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res, users) {
    var _authHeaderToBase, user, password;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!req.headers.authorization) {
              res.setHeader("WWW-Authenticate", 'Basic realm="Protected"');
              res.statusCode = 401;
              res.end("<html>Unauthorized</html>");
            } else {
              _authHeaderToBase = headerToBase64(req.headers.authorization), user = _authHeaderToBase[0], password = _authHeaderToBase[1];

              if (!findAndCheckUser(user, password, users)) {
                res.setHeader("WWW-Authenticate", 'Basic realm="Protected"');
                res.statusCode = 401;
              }
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkBasicAuth.apply(this, arguments);
}

function init(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      users = _options.users;

  if (!users) {
    throw new Error("You must supply an array of user/password combinations in the config.");
  }

  return function (req, res) {
    checkBasicAuth(req, res, users);
  };
}

export default init;
//# sourceMappingURL=nextjs-basic-auth.esm.js.map
