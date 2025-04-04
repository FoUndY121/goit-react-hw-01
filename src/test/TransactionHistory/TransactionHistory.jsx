import s from "../TransactionHistory/TransactionHistory.module.css"
function TransactionHistory({items}) {

    return (
        <div className={s.divTable}>

            <table className={s.table}>
                <thead className={s.thead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>

                <tbody >
                {items.map(item => (
                    <tr key={item}>
                        <td className={s.type}>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
                <tr>
                    <td>Withdrawal</td>
                    <td>85</td>
                    <td>USD</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default TransactionHistory
