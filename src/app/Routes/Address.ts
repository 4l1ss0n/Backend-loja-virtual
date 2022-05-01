import { Router } from "express";
import AddressControllers from "../Controllers/AddressControllers";
import authorization from "../Middlewares/authorization";

const addr = Router();

const Addr = new AddressControllers();

addr.get("/addr", authorization, Addr.Index);
addr.get("/addr/:id", authorization, Addr.Show);
addr.post("/addr/create", authorization, Addr.Create);
addr.put("/addr/update", authorization, Addr.Update);
addr.delete("/addr/delete", authorization, Addr.Delete);

export default addr;
