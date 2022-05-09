import Address from "../Models/AddressModels";

interface AddrViewInput extends Address {}

interface AddrViewOutput {
    id: string;
    addr: string;
    number: number;
    postalCode: number;
    complements: string;
};


export function AddrView(addr: AddrViewInput): AddrViewOutput {
    return {
        id: addr.id,
        addr: addr.addr,
        number: addr.number,
        postalCode: addr.postalCode,
        complements: addr.complements
    };
};

export function AddrViews(addrs: AddrViewInput[]): AddrViewOutput[] {
    return addrs.map(addr => AddrView(addr));
};