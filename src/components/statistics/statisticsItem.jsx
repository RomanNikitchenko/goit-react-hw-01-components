import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const StatisticsItem = ({ label, percentage, color = "royalblue" }) => {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return (
        <li className={styles.item} style={{ backgroundColor: color }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
};

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
