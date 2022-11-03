import { GetStaticProps } from "next"
import { Carousel } from "../../components/Carousel"
import { Header } from "../../components/Header"
import { WppButton } from "../../components/WppButton"
import { api } from "../../service/api"
import styles from './styles.module.scss'


export type Passeios = {
  uuid: string;
  title: string;
  desc: string;
  info: string;
  image_name?: string;
  image_url?: string;
  price: number;
}

export type IPasseiosProps = {
  passeios: Passeios[]
}

const Passeios = ({ passeios }: IPasseiosProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <Carousel data={passeios} />
      <WppButton />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/passeios');
  const passeios = data.data.items.map((passeio: Passeios) => ({
    uuid: passeio.uuid,
    price: passeio.price,
    title: passeio.title,
    desc: passeio.desc,
    info: passeio.info,
    image_name: passeio?.image_name ? passeio.image_name : null,
    image_url: passeio?.image_url ? passeio.image_url : null,
  }));
  return {
    props: { passeios },
    revalidate: 60 * 60 * 24,
  };
};

export default Passeios