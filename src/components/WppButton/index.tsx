import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../Button'
import styles from './styles.module.scss'

function WppButton({ ...rest }) {
  return (
    <div className={styles.container} {...rest}>

      <a href={`${process.env.API_WPP}`} target="_blank" rel="noreferrer">
        <Button>
          <FaWhatsapp size={"100%"} />
        </Button>
      </a>
    </div>
  )
}

export { WppButton }