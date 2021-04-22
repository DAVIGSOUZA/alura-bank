class TradingController {
    constructor() {
        this._tradings = new Tradings();
        this._tradingsView = new TradingsView('#tradingsView');
        this._msgView = new MsgView('#mensagemView');
        this._inputDate = document.querySelector('#data');
        this._inputAmount = document.querySelector('#quantidade');
        this._inputValue = document.querySelector('#valor');
        this._tradingsView.update(this._tradings);
    }
    add(event) {
        event.preventDefault();
        const trading = new Trading(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        this._tradings.add(trading);
        this._tradingsView.update(this._tradings);
        this._msgView.update('Negociação realizada com sucesso!');
    }
}
