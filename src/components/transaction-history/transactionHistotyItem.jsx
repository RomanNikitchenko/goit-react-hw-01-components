import PropTypes from 'prop-types';
import s from './transactionHistory.module.css';

const TransactionHistotyItem = ({ type, amount, currency }) => {
    return (
        <tr className={s[type]}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
};

TransactionHistotyItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};

export default TransactionHistotyItem;
