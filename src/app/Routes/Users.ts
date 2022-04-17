import { Router } from "express";
import UsersControllers from "../Controllers/UsersControllers";

const users = Router();

const User = new UsersControllers();

users.get("/users/login", () => {});
users.post("/users/register", () => {});
users.put("/users/update", () => {});
users.delete("/users/delete", () => {});

export default users;
