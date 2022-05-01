import { Request as Req, Response as Res } from "express";
import { v4 as uuid } from "uuid";
import {AppDataSource as Db} from "../../database/connection";
import CreditCard from "../Models/CreditCardModels";


class CreditCardControllers {
    async Index(req: Req, res: Res): Promise<Res> {
        const userID = req.query.id as string;
        try {
            if (!userID) return res.json({addrResponse: []});
            const Card = Db.getRepository(CreditCard);
            const creditCardResponse = await Card.find({
                relations: {
                    userId: true
                },
                where: {
                    userId: {
                        id: userID
                    }
                }
            });

            return res.json({creditCardResponse});
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "CreditCard - Show",
                'err-msg': err 
            })
        }
    }

    async Show(req: Req, res: Res): Promise<Res> {
        const id = req.params.id as string;
        const userId = req.query.id as string;
        try {
            if (!id) return res.status(401).json({err: "missing datas"});
            const Card = Db.getRepository(CreditCard);
            const creditCardResponse = await Card.findOne({
                relations: {
                    userId: true
                },
                where: {
                    id,
                    userId: {
                        id: userId
                    }
                }
            });
            return res.json({creditCardResponse});
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "CreditCard - Show Unique",
                'err-msg': err 
            })
        }
    }

    async Create(req: Req, res: Res): Promise<Res> {
        const {
            userId,
            fullName,
            cardNumber,
            ccv,
            cpf
        } = req.body;

        try {
            
            const Card = Db.getRepository(CreditCard);

            const createCard = Card.create({
                id: uuid(),
                userId,
                cardNumber: cardNumber.toString(),
                ccv,
                cpf: cpf.toString(),
                fullName
            });

            await Card.save(createCard);

            return res.json({
                created: true,
                id: createCard.id
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "CreditCard - Create",
                'err-msg': err 
            })
        }
    }

    async Update(req: Req, res: Res): Promise<Res> {
        try {
            return res.send("OK");
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "CreditCard - Update",
                'err-msg': err 
            })
        }
    }

    async Delete(req: Req, res: Res): Promise<Res> {
        try {
            return res.send("OK");
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "CreditCard - Delete",
                'err-msg': err 
            })
        }
    }

}

export default CreditCardControllers;