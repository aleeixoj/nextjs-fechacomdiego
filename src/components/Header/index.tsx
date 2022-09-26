import styles from './styles.module.scss';
import { FiMenu } from 'react-icons/fi'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h4>Diego Olsen</h4>
      </div>

      {/* <div className={styles.menu}>
        <FiMenu size={'100%'} />
      </div> */}
    </div>
  )
}

export { Header }