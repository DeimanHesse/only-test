import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TimeBlock.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const TimeBlock = ({ data }: { data: Array<any> }) => {
  const [currentCount, setCurrentCount] = useState(1);
  const changeDeg = Math.round(360 / data.length);

  const textStartRef = useRef<HTMLDivElement>(null);
  const textStartRef2 = useRef<HTMLDivElement>(null);
  const navBlockRef = useRef<HTMLDivElement>(null);

  const changeSlide3 = () => {
    let tl = gsap.timeline();

    data.forEach((el, index) => {
      if (currentCount === index + 1) {
        tl.to(navBlockRef.current, {
          "--common_d": `${changeDeg * index}deg`,
          duration: 1,
        });
        gsap.fromTo(
          textStartRef.current,
          { textContent: `${textStartRef.current?.innerHTML}` },
          {
            textContent: `${el.sectionDateStart}`,
            duration: 2,
            modifiers: {
              textContent: (value) => Math.round(value),
            },
          }
        );
        gsap.fromTo(
          textStartRef2.current,
          { textContent: `${textStartRef2.current?.innerHTML}` },
          {
            textContent: `${el.sectionDateEnd}`,
            duration: 2,
            modifiers: {
              textContent: (value) => Math.round(value),
            },
          }
        );
      }
    });
  };
  const nextHandler = () => {
    if (currentCount < data.length) {
      setCurrentCount(currentCount + 1);
    }
  };
  const prevHandler = () => {
    if (currentCount > 1) {
      setCurrentCount(currentCount - 1);
    }
  };
  const changeSlide = (e: any) => {
    setCurrentCount(
      Number(e.target.closest(".nav-item-interactive").getAttribute("data-id"))
    );
  };

  useEffect(() => {
    changeSlide3();
  }, [currentCount]);

  useEffect(() => {
    const nav = navBlockRef.current;
    if (nav) {
      nav.style.setProperty("--common_count", `${data.length}`);
    }
  }, []);

  return (
    <>
      <div className="time-block">
        <div className="time-block__wrapper">
          <div className="time-block__top-vertline"></div>
          <div className="time-block__title">Исторические даты</div>
          <div className="time-block__top">
            <div className="time-block__top-horline"></div>
            <div className="time-circle">
              <div ref={textStartRef} className="time-circle__date1">
                {data[0].sectionDateStart}
              </div>
              <div ref={textStartRef2} className="time-circle__date2">
                {data[0].sectionDateEnd}
              </div>
              <div ref={navBlockRef} className="time-circle__nav">
                {data.map((item: any, index: number) => (
                  <div
                    key={index}
                    onClick={(e) => changeSlide(e)}
                    data-id={index + 1}
                    className="time-circle__nav-item nav-item-interactive"
                  >
                    <div
                      className={
                        currentCount === index + 1
                          ? "time-circle__item-wrapper active"
                          : "time-circle__item-wrapper"
                      }
                    >
                      <div className="time-circle__item-wrapper-number">
                        {index + 1}
                      </div>
                      <div className="time-circle__item-wrapper-text">
                        {item.sectionTitle}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="top-nav">
            <div className="top-nav__count">
              0{currentCount}/0{data.length}
            </div>
            <div className="top-nav__buttons">
              <button
                onClick={prevHandler}
                className={
                  currentCount === 1
                    ? "top-nav__prev disabled"
                    : "top-nav__prev"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    transform="matrix(-1 0 0 1 50 0)"
                    stroke="#42567A"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M27.4999 18.75L21.2499 25L27.4999 31.25"
                    stroke="#42567A"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button
                onClick={nextHandler}
                className={
                  currentCount === data.length
                    ? "top-nav__next disabled"
                    : "top-nav__next"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    transform="matrix(-1 0 0 1 50 0)"
                    stroke="#42567A"
                    strokeOpacity="0.5"
                  />
                  <path
                    d="M27.4999 18.75L21.2499 25L27.4999 31.25"
                    stroke="#42567A"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="top-nav__dots">
              <div
                data-id="1"
                className={
                  currentCount === 1
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
              <div
                data-id="2"
                className={
                  currentCount === 2
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
              <div
                data-id="3"
                className={
                  currentCount === 3
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
              <div
                data-id="4"
                className={
                  currentCount === 4
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
              <div
                data-id="5"
                className={
                  currentCount === 5
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
              <div
                data-id="6"
                className={
                  currentCount === 6
                    ? "top-nav__dot active nav-item-interactive"
                    : "top-nav__dot nav-item-interactive"
                }
                onClick={(e) => changeSlide(e)}
              ></div>
            </div>
          </div>
          <div className="time-block__bottom">
            {data.map((item: any, index: number) => (
              <div key={index} className="time-block__bottom-elem">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1.5}
                  navigation
                  className={currentCount === index + 1 ? "active" : "no"}
                  onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slide__title">2015</div>
                    <div className="slide__text">
                      13 сентября — частное солнечное затмение, видимое в Южной
                      Африке и части Антарктиды
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeBlock;
