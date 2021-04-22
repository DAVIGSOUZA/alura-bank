class TradingController {
    private _inputDate: HTMLInputElement
    private _inputAmount: HTMLInputElement
    private _inputValue: HTMLInputElement
    private _tradings = new Tradings()
    private _tradingsView = new TradingsView('#tradingsView')
    private _msgView = new MsgView('#mensagemView')

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data')
        this._inputAmount = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputValue = <HTMLInputElement>document.querySelector('#valor')
        this._tradingsView.update(this._tradings)
    }

    add(event: Event) {
        event.preventDefault()
        const trading = new Trading(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value)
        )

        this._tradings.add(trading)

        this._tradingsView.update(this._tradings)
        this._msgView.update('Negociação realizada com sucesso!')
    }
}