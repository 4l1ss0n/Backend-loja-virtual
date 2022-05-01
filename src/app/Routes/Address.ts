import { Router } from "express";
import AddressControllers from "../Controllers/AddressControllers";
import authorization from "../middlewares/authorization";

const addr = Router();

const Addr = new AddressControllers();

addr.get("/addr", authorization, Addr.Index);
addr.get("/addr/:id", Addr.Show);
addr.post("/addr/create", Addr.Create);
addr.put("/addr/update", Addr.Update);
addr.delete("/addr/delete", Addr.Delete);

export default addr;
