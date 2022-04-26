const StatisticsItem = ({ stats, title }) => {
    return (
        <section class="statistics">
            {title && <h2 class="title">Upload stats</h2>}

            <ul class="stat-list">
                <li class="item" key={stats[0].id}>
                    <span class="label">{stats[0].label}</span>
                    <span class="percentage">{stats[0].percentage}%</span>
                </li>
                <li class="item" key={stats[1].id}>
                    <span class="label">.mp3</span>
                    <span class="percentage">14%</span>
                </li>
                <li class="item" key={stats[2].id}>
                    <span class="label">.pdf</span>
                    <span class="percentage">41%</span>
                </li>
                <li class="item" key={stats[3].id}>
                    <span class="label">.mp4</span>
                    <span class="percentage">12%</span>
                </li>
            </ul>
        </section>
    )
};

export default StatisticsItem;

