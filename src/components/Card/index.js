import styles from "./Card.module.scss"
import clsx from "clsx"
import PropTypes from "prop-types"

const Card = ({
	for: { icon, type },
	userName,
	value,
	valueLabel,
	meta: { metaStatus, metaLabel }
}) => {
	return (
		<article className={clsx(styles.card, styles[type])}>
			<header className={styles.cardHeader}>
				{icon}
				<span className={styles.cardUser}>{userName}</span>
			</header>
			<div className={styles.cardBody}>
				<div className={styles.cardValue}>{value}</div>
				<h2 className={styles.cardValueLabel}>{valueLabel}</h2>
			</div>
			<footer className={styles.cardFooter}>
				<span className={clsx(styles.meta, styles[metaStatus])}>
					{metaLabel}
				</span>
			</footer>
		</article>
	)
}

Card.propTypes = {
	for: PropTypes.shape({
		icon: PropTypes.node,
		type: PropTypes.oneOf(["facebook", "twitter", "instagram", "youtube"])
	}),
	userName: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	valueLabel: PropTypes.string,
	meta: PropTypes.shape({
		metaStatus: PropTypes.oneOf(["up", "down", "neutral"]),
		metaLabel: PropTypes.string
	})
}

const CardSmall = ({
	icon,
	value,
	valueLabel,
	meta: { metaStatus = "neutral", metaLabel }
}) => {
	return (
		<article className={styles.cardSmall}>
			<h3 className={styles.cardSmallValueLabel}>{valueLabel}</h3>
			{icon}
			<div className={styles.cardSmallValue}>{value}</div>
			<div className={clsx(styles.meta, styles[metaStatus])}>{metaLabel}</div>
		</article>
	)
}

CardSmall.propTypes = {
	icon: PropTypes.node,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	valueLabel: PropTypes.string,
	meta: PropTypes.shape({
		metaStatus: PropTypes.oneOf(["up", "down", "neutral"]),
		metaLabel: PropTypes.string
	})
}

export { Card, CardSmall }
