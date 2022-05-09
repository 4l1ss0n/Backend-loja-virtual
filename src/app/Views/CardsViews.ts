import CreditCard from "../Models/CreditCardModels";

interface CreditCardInput extends CreditCard {};

interface CreditCardOutput {
    id: string;
    fullName: string;
    cardNumber: string;
}

export function CreditCardView(card: CreditCardInput): CreditCardOutput {
    return {
        id: card.id,
        fullName: card.fullName,
        cardNumber: card.cardNumber
    }
}

export function CreditCardViews(cards: CreditCardInput[]): CreditCardOutput[] {
    return cards.map(card => CreditCardView(card));
}