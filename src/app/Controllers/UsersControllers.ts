import { Request as Req, Response as Res } from "express";
import {AppDataSource as Db} from "../../database/connection";
import Users from "../Models/UsersModels";


class UsersControllers {
    async Login(req: Req, res: Res): Promise<Res> {
        const credentials = req.headers.authorization;
        try {
            const User = Db.getRepository(Users);
            if (!credentials) return res.status(401).json({err: "no credentials found"});

            const [,dataHashed] = credentials.split(" ");            
            const [email, password] = Buffer.from(dataHashed, 'base64').toString().split(":");

            if (!email) return res.status(404).json({err: "missing datas"}); 

            const dbResponse = await User.findOne({where: {email}});

            if (!dbResponse) return res.status(404).json({err: "nothing account registered with this email"});

            if (dbResponse.passwordHash !== password) return res.status(401).json({err: "incorrect password"});

            return res.json({
                success: true,
                data: dbResponse
                
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "Users - Login",
                'err-msg': err 
            })
        }
    }

    async Register(req: Req, res: Res): Promise<Res> {
        const {
            firstName,
            lastName,
            gender,
            email,
            password,
            birthday
        } = req.body;
        try {
            const User = Db.getRepository(Users);
            const user = User.create({
                firstName,
                lastName,
                gender,
                email,
                passwordHash: password,
                birthday,
            });

            await User.save(user);

            return res.status(202).json({
                success: true,
                created: true
            });
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                'err-path' : "Users - Login",
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
                'err-path' : "Users - Login",
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
                'err-path' : "Users - Login",
                'err-msg': err 
            })
        }
    }
}

export default UsersControllers;