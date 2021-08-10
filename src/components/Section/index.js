import clsx from "clsx"
import styles from "./Section.module.scss"

const Section = ({ withBackground = false, children }) => {
	return (
		<section
			className={clsx(styles.section, withBackground && styles.withBackground)}
		>
			{children}
		</section>
	)
}

export default Section
