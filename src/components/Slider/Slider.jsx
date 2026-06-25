import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slides from "../../data/slides";
import "./Slider.css";

function Slider() {
  return (
    <section className="hero-slider">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}

        speed={1000}

        loop={true}

        navigation={true}

        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>

              <div className="slide-content">

                <span className="badge">
                  Fresh & Healthy
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.subtitle}</p>

                <button className="premium-btn"
                  onClick={() =>
                    document
                      .getElementById(slide.category)
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  >
                  Shop Now →
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Slider;