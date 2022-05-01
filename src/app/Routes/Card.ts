import { Router } from "express";
import CreditCardControllers from "../Controllers/CreditCardControllers";

const creditCard = Router();

const Card = new CreditCardControllers();

creditCard.get("/card", Card.Index);
creditCard.get("/card/:id", Card.Show);
creditCard.post("/card/create", Card.Create);
creditCard.delete("/card/delete", Card.Delete);

export default creditCard;
