import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import StatisticsItem from './statisticsItem';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.list}>

            {stats.map(item =>  (
                    <StatisticsItem
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                )
            )}
        </ul>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.oneOf(['Upload stats']),
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
};

export default Statistics;
