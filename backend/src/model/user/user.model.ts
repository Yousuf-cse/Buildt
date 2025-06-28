import { model } from "mongoose";
import userSchema from "./user.schema";
import { Iuser } from "../../@types/interface/user.interface";

const UserModel = model<Iuser>("users", userSchema);

export default UserModel;
