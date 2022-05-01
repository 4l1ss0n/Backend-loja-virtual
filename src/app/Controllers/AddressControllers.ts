import { Request as Req, Response as Res } from "express";
import { v4 as uuid } from "uuid";
import {AppDataSource as Db} from "../../database/connection";
import Address from "../Models/AddressModels";


class AddressControllers {
    async Index(req: Req, res: Res): Promise<Res> {
        const userID =  req.query.id as string;
        try {
            if (!userID) return res.json({addrResponse: []});
            const Addr = Db.getRepository(Address);
            const addrResponse = await Addr.find({
                relations: {
                    userId: true
                },
                where: {
                    userId: {
                        id: userID
                    }
                }
            })

            return res.json({addrResponse});
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "Address - Show Unique",
                'err-msg': err 
            })
        }
    }

    async Show(req: Req, res: Res): Promise<Res> {
        const id = req.params.id as string;
        const userId = req.query.id as string;
        try {
            if (!id) return res.status(401).json({err: "missing datas"});
            const Addr = Db.getRepository(Address);
            const addrResponse = await Addr.findOne({
                where: {
                    id
                }
            });
            return res.json({addrResponse});
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "Address - Show",
                'err-msg': err 
            })
        }
    }

    async Create(req: Req, res: Res): Promise<Res> {
        const {
            userId,
            addr,
            number,
            complements,
            postalCode
        } = req.body;

        try {

            const Addr = Db.getRepository(Address);

            const createAddr = Addr.create({
                id: uuid(),
                userId,
                addr,
                number,
                complements,
                postalCode
            });

            await Addr.save(createAddr);

            return res.status(201).json({
                created: true,
                id: createAddr.id
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "Address - Create",
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
                'err-path' : "Address - Update",
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
                'err-path' : "Address - Delete",
                'err-msg': err 
            })
        }
    }

}

export default AddressControllers;