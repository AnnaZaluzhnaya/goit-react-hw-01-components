import styles from './styled-components/Statistics-styles.css'

export function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {stats.map(({ id, label, percentage }) =>
                    <li className="item" key={id}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                )}
            </ul>
        </section>
    );
}