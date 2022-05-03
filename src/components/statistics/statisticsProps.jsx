import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import StatisticsItem from './statisticsItem';

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.list}>

                {stats.map(({ id, label, percentage }) => (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
};

export default Statistics;
