import { Router } from "express";
import UsersControllers from "../Controllers/UsersControllers";

const users = Router();

const User = new UsersControllers();

users.get("/users/login", User.Login);
users.post("/users/register", User.Register);
users.put("/users/update", User.Update);
users.delete("/users/delete", User.Delete);

export default users;
