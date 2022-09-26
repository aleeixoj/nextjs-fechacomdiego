import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/home.module.scss'
import fundoPng from '../../public/fundo.png'
import { Button } from '../components/Button'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.opacityBox}>
        <div className={styles.textBox}>
          <p>QUIERES CONOCER SAN ANDRÉS</p>
          <p>Y NO SABE</p>
          <p>CÓMO ORGANIZAR LOS TOURS</p>
        </div>
        <div className={styles.text_box}>
          <h3><strong>ENTONCES</strong></h3>
          <h1>FECHA COM DIEGO</h1>
        </div>
        <Link href="/passeios">

          <Button>Ver passeios</Button>
        </Link>
      </div>



    </div>
  )
}

export default Home
