import { memo } from 'react'
import styles from './Archive.module.css'

const Archive = memo(({ location, day }) => {
	// FIXME: пофиксить дату

	return <div className={styles.archive}></div>
})

export default Archive
