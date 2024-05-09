import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TimeBlock.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const TimeBlock = ({ data }: { data: any }) => {
  const [currentCount, setCurrentCount] = useState(1);

  let changeDeg = Math.round(360 / data.length);

  console.log(data.length);
  const changeSlide2 = () => {
    let tl = gsap.timeline();
    let textStart = document.querySelector(".time-circle__date1")?.innerHTML;
    let textStart2 = document.querySelector(".time-circle__date2")?.innerHTML;
    if (currentCount === 1) {
      tl.to(".time-circle__nav", {
        "--common_d": "30deg",
        // "--common_d": `${0 - changeDeg}deg`,
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1977",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1986",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 2) {
      tl.to(".time-circle__nav", {
        "--common_d": "-30deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1987",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1991",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 3) {
      tl.to(".time-circle__nav", {
        "--common_d": "-90deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1992",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1997",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 4) {
      tl.to(".time-circle__nav", {
        "--common_d": "-150deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1999",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2004",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 5) {
      tl.to(".time-circle__nav", {
        "--common_d": "-210deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "2008",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2012",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 6) {
      tl.to(".time-circle__nav", {
        "--common_d": "-270deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "2015",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2022",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    }
  };
  const nextHandler = (e: any) => {
    if (currentCount < 6) {
      setCurrentCount(currentCount + 1);
    }
  };
  const prevHandler = (e: any) => {
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
    changeSlide2();
  }, [currentCount]);

  useEffect(() => {
    // document
    //   ?.querySelector(".time-circle__nav")
    //   ?.style.setProperty("--common_count", ${data.length});
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
              <div className="time-circle__date1">1977</div>
              <div className="time-circle__date2">1986</div>
              <div className="time-circle__nav">
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
                      <div className="time-circle__item-wrapper-text">Кино</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="top-nav">
            <div className="top-nav__count">0{currentCount}/06</div>
            <div className="top-nav__buttons">
              <button
                onClick={(e) => prevHandler(e)}
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
                onClick={(e) => nextHandler(e)}
                className={
                  currentCount === 6
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
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1.5}
                navigation
                className={currentCount === 1 ? "active" : "no"}
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
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 2 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 3 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 4 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 5 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 6 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const TimeBlockOld = ({ data }: { data: any }) => {
  const [currentCount, setCurrentCount] = useState(1);

  let changeDeg = Math.round(360 / data.length);

  console.log(data.length);
  const changeSlide2 = () => {
    let tl = gsap.timeline();
    let textStart = document.querySelector(".time-circle__date1")?.innerHTML;
    let textStart2 = document.querySelector(".time-circle__date2")?.innerHTML;
    if (currentCount === 1) {
      tl.to(".time-circle__nav", {
        "--common_d": "30deg",
        // "--common_d": `${0 - changeDeg}deg`,
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1977",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1986",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 2) {
      tl.to(".time-circle__nav", {
        "--common_d": "-30deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1987",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1991",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 3) {
      tl.to(".time-circle__nav", {
        "--common_d": "-90deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1992",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "1997",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 4) {
      tl.to(".time-circle__nav", {
        "--common_d": "-150deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "1999",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2004",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 5) {
      tl.to(".time-circle__nav", {
        "--common_d": "-210deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "2008",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2012",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    } else if (currentCount === 6) {
      tl.to(".time-circle__nav", {
        "--common_d": "-270deg",
        duration: 1,
      });
      gsap.fromTo(
        ".time-circle__date1",
        { textContent: `${textStart}` },
        {
          textContent: "2015",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
      gsap.fromTo(
        ".time-circle__date2",
        { textContent: `${textStart2}` },
        {
          textContent: "2022",
          duration: 2,
          modifiers: {
            textContent: (value) => Math.round(value),
          },
        }
      );
    }
  };
  const nextHandler = (e: any) => {
    if (currentCount < 6) {
      setCurrentCount(currentCount + 1);
    }
  };
  const prevHandler = (e: any) => {
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
    changeSlide2();
  }, [currentCount]);

  return (
    <>
      <div className="time-block">
        <div className="time-block__wrapper">
          <div className="time-block__top-vertline"></div>
          <div className="time-block__title">Исторические даты</div>
          <div className="time-block__top">
            <div className="time-block__top-horline"></div>
            <div className="time-circle">
              <div className="time-circle__date1">1977</div>
              <div className="time-circle__date2">1986</div>
              <div className="time-circle__nav">
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="1"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 1
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">1</div>
                    <div className="time-circle__item-wrapper-text">Кино</div>
                  </div>
                </div>
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="2"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 2
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">2</div>
                    <div className="time-circle__item-wrapper-text">
                      Литература
                    </div>
                  </div>
                </div>
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="3"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 3
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">3</div>
                    <div className="time-circle__item-wrapper-text">Кино</div>
                  </div>
                </div>
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="4"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 4
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">4</div>
                    <div className="time-circle__item-wrapper-text">Кино</div>
                  </div>
                </div>
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="5"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 5
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">5</div>
                    <div className="time-circle__item-wrapper-text">Кино</div>
                  </div>
                </div>
                <div
                  onClick={(e) => changeSlide(e)}
                  data-id="6"
                  className="time-circle__nav-item nav-item-interactive"
                >
                  <div
                    className={
                      currentCount === 6
                        ? "time-circle__item-wrapper active"
                        : "time-circle__item-wrapper"
                    }
                  >
                    <div className="time-circle__item-wrapper-number">6</div>
                    <div className="time-circle__item-wrapper-text">Наука</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-nav">
            <div className="top-nav__count">0{currentCount}/06</div>
            <div className="top-nav__buttons">
              <button
                onClick={(e) => prevHandler(e)}
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
                onClick={(e) => nextHandler(e)}
                className={
                  currentCount === 6
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
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1.5}
                navigation
                className={currentCount === 1 ? "active" : "no"}
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
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 2 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 3 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 4 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2047</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2417</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 5 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="time-block__bottom-elem">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                className={currentCount === 6 ? "active" : "no"}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide__title">2017</div>
                  <div className="slide__text">
                    13 сентября — частное солнечное затмение, видимое в Южной
                    Африке и части Антарктиды
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeBlock;
