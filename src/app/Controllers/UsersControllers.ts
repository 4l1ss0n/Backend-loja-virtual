import { Request as Req, Response as Res } from "express";


class UsersControllers {
    async Login(req: Req, res: Res): Promise<Res> {
        const credentials = req.headers.authorization;
        try {
            if (!credentials) return res.status(401).json({err: "no credentials found"});

            const [,dataHashed] = credentials.split(" ");
            
            const [email, password] = Buffer.from(dataHashed, 'base64').toString().split(":");
            
            return res.send("OK");
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
            
            return res.send("OK");
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