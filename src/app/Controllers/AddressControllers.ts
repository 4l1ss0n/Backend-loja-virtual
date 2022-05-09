import { Request as Req, Response as Res } from "express";
import { v4 as uuid } from "uuid";
import {AppDataSource as Db} from "../../database/connection";
import Address from "../Models/AddressModels";
import * as yup from "yup";
import { AddrViews } from "../Views/AddressViews";



class AddressControllers {
    async Index(req: Req, res: Res): Promise<Res> {
        const userID =  req.body.auth.id;
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

            return res.json(AddrViews(addrResponse));
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
        const userId = req.body.auth.id;
        try {
            if (!id) return res.status(401).json({err: "missing datas"});
            const Addr = Db.getRepository(Address);
            const addrResponse = await Addr.findOne({
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
            
            return res.json(
                addrResponse? AddrViews([addrResponse]): []
            );
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
            addr,
            number,
            complements,
            postalCode
        } = req.body;

        try {
            if (!(
                await yup.string().required().isValid(addr) &&
                await yup.number().required().isValid(number) &&
                await yup.string().required().isValid(complements) &&
                await yup.number().required().isValid(postalCode)
            )) {
                console.log("dados faltando");
                return res.status(406).json({
                    err: "missing or invalid datas"
                });
            };

            const Addr = Db.getRepository(Address);

            const createAddr = Addr.create({
                id: uuid(),
                userId: req.body.auth.id,
                addr,
                number,
                complements,
                postalCode
            });

            await Addr.save(createAddr);

            return res.status(201).json({
                created: true,
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