import { Router } from "express";

import users from "./Users";

const routes = Router();

routes.get("/", (req, res) => res.json({
    ok: true
}))

routes.use(users);

export default routes;