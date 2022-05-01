import { Request as Req, Response as Res, NextFunction as Nx } from "express";
import { verify } from "jsonwebtoken";

const {SECRET} = process.env;

export default (req: Req, res: Res, next: Nx) => {
    const credentials = req.headers.authorization;

    if (!credentials) return res.status(401).json({
        err: "credentials not found"
    })

    const [baerer, token] = credentials.split(" ");

    if (!token) return res.status(401).json({
        err: "token not found"
    });

    verify(token, SECRET || '1234', (err, decode) => {
        if (err) return res.status(401).json({
            err: "token not acept"
        })
        req.body.auth = decode;
        next();
    })
};