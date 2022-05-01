import { Router } from "express";
import UsersControllers from "../Controllers/UsersControllers";
import authorization from "../Middlewares/authorization";

const users = Router();

const User = new UsersControllers();

users.get("/users/login", User.Login);
users.post("/users/register", User.Register);
users.put("/users/update", authorization, User.Update);
users.delete("/users/delete", authorization, User.Delete);

export default users;
