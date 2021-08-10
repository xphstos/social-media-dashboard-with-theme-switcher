import clsx from "clsx"
import styles from "./Grid.module.scss"

const Grid = ({ classname = undefined, children }) => {
	return <div className={clsx(styles.grid, styles[classname])}>{children}</div>
}

export default Grid
