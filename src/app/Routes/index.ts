import { Router } from "express";

import users from "./Users";
import addr from "./Address";

const routes = Router();

routes.get("/", (req, res) => res.json({
    ok: true
}))

routes.use(users);
routes.use(addr);

export default routes;