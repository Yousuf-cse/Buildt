import { Schema } from "mongoose";
import { Iuser } from "../../@types/interface/user.interface";
import SCHEMA_DEFINITION_PROPERTY from "../../constants/model/model.constant";

const userSchema = new Schema<Iuser>({
  full_name: SCHEMA_DEFINITION_PROPERTY.requiredString,
  email: SCHEMA_DEFINITION_PROPERTY.requiredString,
  github_access_token: SCHEMA_DEFINITION_PROPERTY.requiredString,
});

export default userSchema;
