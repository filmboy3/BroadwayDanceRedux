import { combineReducers } from "redux";
import messages from "./messages"
import users from "./users"
import auth from "./auth"

const chat = combineReducers({
  messages,
  users,
  auth
});

export default chat;