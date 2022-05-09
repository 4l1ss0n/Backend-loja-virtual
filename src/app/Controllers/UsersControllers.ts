import { Request as Req, Response as Res } from "express";
import { v4 as uuid } from "uuid";
import {AppDataSource as Db} from "../../database/connection";
import * as yup from "yup";

import Users from "../Models/UsersModels";
import tokenGen from "../utils/tokenGen";
import {UserView} from "../Views/UsersViews";


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
                created: true,
                user: UserView({
                    user: dbResponse,
                    token: tokenGen({id: dbResponse.id})
                })
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
            if (!(
                await yup.string().email().required().isValid(email) &&
                await yup.string().required().isValid(firstName) &&
                await yup.string().required().isValid(lastName) &&
                await yup.string().required().isValid(gender) &&
                await yup.string().required().isValid(password) &&
                await yup.string().required().isValid(birthday) 
            )) {
                console.log("dados faltando");
                return res.status(406).json({
                    err: "missing or invalid datas"
                });
            };

            const User = Db.getRepository(Users);
            const user = User.create({
                id: uuid(),
                firstName,
                lastName,
                gender,
                email,
                passwordHash: password,
                birthday,
            });

            await User.save(user);

            return res.status(202).json({
                created: true,
                user: UserView({
                    user,
                    token: tokenGen({id: user.id})
                })
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