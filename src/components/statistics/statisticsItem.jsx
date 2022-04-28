import styles from './statistics.module.css';

const StatisticsItem = ({ label, percentage }) => (
    <li className={styles.item}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
    </li>
);

export default StatisticsItem;

