import { Request as Req, Response as Res } from "express";
import {AppDataSource as Db} from "../../database/connection";
import Address from "../Models/AddressModels";


class AddressControllers {
    async Index(req: Req, res: Res): Promise<Res> {
        const id = req.query.id as string;
        try {
            if (!id) return res.status(401).json({err: "missing datas"});
            const Addr = Db.getRepository(Address);
            const addrResponse = await Addr.findOne({
                where: {
                    id
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
        try {
            const Addr = Db.getRepository(Address);
            const addrResponse = await Addr.find()

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
        try {
            return res.send("OK");
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