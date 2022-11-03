import Link from 'next/link'
import Router from 'next/router'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../Button'
import styles from './styles.module.scss'

function WppButton({ ...rest }) {
  async function handleRedirect() {
    Router.push(`${process.env.API_WPP}`)
  }
  return (
    <div className={styles.container} {...rest}>

      <Link href={`${process.env.API_WPP}`}>
        <a target="_blank" rel="noreferrer">
          <Button >
            <FaWhatsapp size={"100%"} />
          </Button>
        </a>
      </Link>
    </div>
  )
}

export { WppButton }