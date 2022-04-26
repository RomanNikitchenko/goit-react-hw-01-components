import StatisticsItem from './statisticsItem';

const Statistics = ({ title, stats }) => {
    return (
        <StatisticsItem
            stats={stats}
            title={title}
        />
    )
}

export default Statistics;