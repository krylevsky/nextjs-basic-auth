import { User } from "../types";
declare type findAndCheckUserReturn = User | false;
declare const findAndCheckUser: (user: string, password: string, users: User[]) => findAndCheckUserReturn;
export default findAndCheckUser;
