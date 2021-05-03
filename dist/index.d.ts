import { IncomingMessage, ServerResponse } from "http";
import { User } from "./types";
interface Options {
    users?: User[];
}
declare function init(options?: Options): (req: IncomingMessage, res: ServerResponse) => void;
export default init;
