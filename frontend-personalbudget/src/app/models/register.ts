export class Register {
    
    constructor(_id = '', concept = '', amount = null, date = null, kind = '', category = ''){
        this._id = _id;
        this.concept = concept;
        this.amount = amount;
        this.date = date;
        this.kind = kind;
        this.category = category
    }

    _id: string;
    concept: string;
    amount: number;
    date: Date;
    kind: string;
    category: string
}
