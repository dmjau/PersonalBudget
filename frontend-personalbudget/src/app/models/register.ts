export class Register {
    
    constructor(_id = '', concept = '', amount = null, dateYear = null, dateMonth = null, dateDay = null, kind = '', category = ''){
        this._id = _id;
        this.concept = concept;
        this.amount = amount;
        this.dateYear = dateYear;
        this.dateMonth = dateMonth;
        this.dateDay = dateDay;
        this.kind = kind;
        this.category = category
    }

    _id: string;
    concept: string;
    amount: number;
    dateYear: number;
    dateMonth: number;
    dateDay: number;
    kind: string;
    category: string
}
