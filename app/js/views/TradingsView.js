class TradingsView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.toArray().map(trading => {
            return `
                        <tr>
                            <td>${trading.date.getDate()}/${trading.date.getMonth() + 1}/${trading.date.getFullYear()}</td>
                            <td>${trading.amount}</td>
                            <td>${trading.value}</td>
                            <td>${trading.total}</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }
}
