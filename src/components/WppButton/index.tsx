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

      <a className={styles.wpp} href={`${process.env.NEXT_PUBLIC_API_WPP}`} target="_blank" rel="noreferrer">
        <FaWhatsapp size={"100%"} />
      </a>

    </div >
  )
}

export { WppButton }