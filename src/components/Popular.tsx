import {FC, useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// @ts-ignore
import redLine from "../img/redLine.svg"
import ContactUs from "./ContactUs";

type CarType = {
  manufacturer: string
  model: string
  year: string
  engineType: string
  engineFuelType: string
  engineVolume: string
  gearBoxType: string
  driveType: string
  bodyType: string
  region: string
  mileage: string
  priceInBelarus: string
  priceFromAbord: string
  imgs: string[]
}

export const Popular = () => {

  const [data, setData] = useState<CarType[]>()

  useEffect(() => {
    (async () => {
      const cars = await fetch(`https://mostauto.by/mostauto-api/public/api/cars`).then((res) => res.json());
      setData(cars)
    })()
  }, []);

  const swiperRef = useRef(null)

  return (
      <div id="Popular" className="popular-container">
        <Swiper
            ref={swiperRef}
            navigation
            speed={1000}
            pagination={{clickable: true}}
            autoplay={false}
            modules={[Navigation, Pagination]}
            className="swiper outer-swiper"
        >
          {data && data.map((car, index) => (
              <SwiperSlide key={index} className={"swiper-slide"}>
                <div className="outer-slide"
                     style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Swiper
                      direction={'vertical'}
                      slidesPerView={1}
                      speed={1000}
                      autoplay={{
                        delay: 4000,

                      }}
                      pagination={{clickable: true}}
                      modules={[Pagination, Autoplay]}
                      className="inner-swiper"
                      lazyPreloadPrevNext={1}
                  >
                    {car && car.imgs.map((url, innerIndex) => (
                        <SwiperSlide
                            key={innerIndex}
                            className={"inner-swiper-slide"}
                        >
                            <img
                                src={`${url}`}
                                className={"inner-swiper-slide-img"}
                            />
                        </SwiperSlide>
                    ))}
                  </Swiper>
                  <div
                      className="item-info"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start'
                      }}
                  >
                    <h2
                        style={{
                          fontSize: "48px",
                          fontWeight: 500,
                          lineHeight: "100%",
                          fontFamily: "Montserrat",
                        }}
                    >
                      {car?.manufacturer} {car?.model}
                    </h2>
                    <TextItem title={"Год выпуска:"} text={car?.year || ""}/>
                    <TextItem title={"Двигатель:"}
                              text={`${car?.engineType || ""},${car?.engineFuelType || ""}${car?.engineVolume ? ', ' + car.engineVolume + ' л' : ""}`}/>
                    <TextItem title={"Коробка:"} text={car?.gearBoxType || ""}/>
                    <TextItem title={"Привод:"} text={car?.driveType || ""}/>
                    <TextItem title={"Тип кузова:"} text={car?.bodyType || ""}/>
                    <TextItem title={"Пробег:"} text={`${car?.mileage} км`}/>
                    <TextItem title={"Регион покупки:"} text={car?.region || ""}/>

                    {/*<div>*/}
                    {/*    Все хар-ки*/}
                    {/*</div>*/}

                    <TextItem
                        title={"Цена \n в Беларуси"}
                        text={`${car?.priceInBelarus} $` || ""}
                        price={1}
                    />
                    <TextItem
                        title={"Цена привоза\n из-за рубежа "}
                        text={`${car?.priceFromAbord} $` || ""}
                        price={2}
                    />
                      <div className="price-info">указанная стоимость под ключ, без учёта восстановительных работ</div>
                  </div>
                </div>
              </SwiperSlide>
          ))}
        </Swiper>
        <ContactUs tittle={"ПОПУЛЯРНЫЕ АВТО"} />
      </div>

  );
};

interface TextItemI {
  title: string;
  text: string;
  price?: number  | null;
}

const TextItem: FC<TextItemI> = ({title, text, price = null}) => {


  return (
      <div className={`slider-text-line ${!price ? "slider-text-line-title" : "slider-text-line-price"}`} >
        <div>{title}</div>
        <div className={`qqw slider-text-line-price-value ${price === 1 ? "slider-text-line-price-value-price1" : price === 2 ? "slider-text-line-price-value-price2" : ""}`} >
          {text}
          {
              price && price === 1 &&
              <img
                  src={redLine}
                  alt={""}
                  style={{
                    position: "absolute",
                    zIndex: 1,
                    width: "120%",
                    height: "35px",
                    top: 0,
                    left: 0,

                  }}
              />
          }
        </div>
      </div>

  )
}