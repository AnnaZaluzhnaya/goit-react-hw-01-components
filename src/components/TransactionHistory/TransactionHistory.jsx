import styles from './TransactionHistory.module.css'
import PropTypes from 'prop-types'

export function TransactionHistory({ items }) {
    return (
        <table className={styles.transactionHistory}>
    <thead>
        <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
        </tr>
    </thead>

            <tbody>
                {items.map(({ type, amount, currency, id }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
                ))}
            </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    ),
};