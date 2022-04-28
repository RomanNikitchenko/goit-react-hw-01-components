import styles from './statistics.module.css';
import StatisticsItem from './statisticsItem';

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}

        <ul className={styles.statList}>

            {stats.map(item => (
                <StatisticsItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />
            ))}
        </ul>
    </section>
);

export default Statistics;