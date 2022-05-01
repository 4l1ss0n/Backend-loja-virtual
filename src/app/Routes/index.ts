import { Router } from "express";

import users from "./Users";
import addr from "./Address";
import creditCard from "./Card";

const routes = Router();

routes.get("/", (req, res) => res.json({
    ok: true
}))

routes.use(users);
routes.use(addr);
routes.use(creditCard);

export default routes;