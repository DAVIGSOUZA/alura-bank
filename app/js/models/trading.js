class Trading {
    constructor(_date, _amount, _value) {
        this._date = _date;
        this._amount = _amount;
        this._value = _value;
    }
    get date() {
        return this._date;
    }
    get amount() {
        return this._amount;
    }
    get value() {
        return this._value;
    }
    get total() {
        return this._amount * this._value;
    }
}
