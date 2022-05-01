import { Router } from "express";
import CreditCardControllers from "../Controllers/CreditCardControllers";
import authorization from "../Middlewares/authorization";

const creditCard = Router();

const Card = new CreditCardControllers();

creditCard.get("/card", authorization, Card.Index);
creditCard.get("/card/:id", authorization, Card.Show);
creditCard.post("/card/create", authorization, Card.Create);
creditCard.delete("/card/delete", authorization, Card.Delete);

export default creditCard;
