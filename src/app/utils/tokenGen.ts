import { sign } from "jsonwebtoken";

const {SECRET} = process.env;

interface Type {
    id: string;
}

export default (payload: Type) => (
    sign(payload, SECRET || '1234', {
        expiresIn: '10m',
    })
);