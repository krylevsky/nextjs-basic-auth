/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { User } from "./types";
declare function checkBasicAuth(req: IncomingMessage, res: ServerResponse, users: User[]): Promise<void>;
export default checkBasicAuth;
