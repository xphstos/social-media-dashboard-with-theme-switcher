import clsx from "clsx"
import styles from "./ThemeToggle.module.scss"

const ThemeToggle = ({ theme, onClick }) => {
	return (
		<button className={styles.themeToggle} onClick={onClick}>
			Dark Mode
			<span
				className={clsx(styles.toggler, theme ? styles.dark : styles.light)}
			/>
		</button>
	)
}

export default ThemeToggle
