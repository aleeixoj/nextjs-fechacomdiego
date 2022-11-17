import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import _ from 'lodash'



import styles from './styles.module.scss';

interface IPasseios {
  uuid: string;
  image_name?: string;
  image_url?: string;
  title: string;
  desc: string;
  info: string;
  price: number;
}
interface IPasseiosProps {
  data: IPasseios[]
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? ' arrow--disabled' : '';
  return (
    <div
      onClick={props.onClick}
      className={`${styles['arrow']} ${styles[`${props.left ? 'arrow--left' : 'arrow--right'
        }`]} ${disabled}`}
    >
      {!props.left && <MdOutlineArrowForwardIos />}
      {props.left && <MdOutlineArrowBackIos />}
    </div >
  );
}

function Carousel({ data }: IPasseiosProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000 * 10);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ],
  );

  useEffect(() => {
    console.log(data)
  })

  return (
    <div className={styles.container}>

      <div className={styles.navigation_wrapper}>
        <div ref={sliderRef} className="keen-slider">
          {data?.map((item: any) => (
            <div key={item.uuid} className={`keen-slider__slide ${styles.imageBox}`}>
              <div className={styles.img}>
                <Image width={1200} height={1200}
                  objectFit="cover"
                  quality={100}
                  src={item?.image_url}
                  alt={item?.image_name} />
              </div>

              <div className={styles.texts}>
                <h3>{item.title}</h3>
                <span>{item.desc}</span>

                {
                  item.info !== "null" && <h4>{item.info}</h4>

                }

                {
                  item.price &&
                  <h4> $ {item.price} COP</h4>
                }


              </div>
            </div>
          ))
          }


        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide
                // eslint-disable-next-line no-unsafe-optional-chaining
                === instanceRef?.current?.track?.details?.slides?.length - 1
              }
            />
          </>
        )}
      </div>
      {
        loaded && instanceRef.current && <div className={styles.dots}>
          {[
            ...Array(instanceRef?.current?.track?.details?.slides?.length).keys(),
          ].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={`${styles['dot']} ${styles[`${currentSlide === idx ? 'dot-active' : ''}`]}`}
            ></button>
          ))}
        </div>
      }
    </div >
  );
}

export { Carousel };
