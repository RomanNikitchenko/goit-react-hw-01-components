import PropTypes from 'prop-types';
import TransactionHistotyItem from './transactionHistotyItem';
import s from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transaction}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <TransactionHistotyItem
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};

export default TransactionHistory;
