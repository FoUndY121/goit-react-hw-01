
function TransactionHistory( item ) {

    return (
        <table>
            <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>
            <tr>
                <td>Withdrawal</td>
                <td>85</td>
                <td>USD</td>
            </tr>
            </tbody>
        </table>

    )
}

export default TransactionHistory
