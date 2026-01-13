import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import Reviews1 from '../img/Reviews1.png';
// @ts-ignore
import Reviews2 from '../img/Reviews2.png';
// @ts-ignore
import Reviews3 from '../img/Reviews3.png';
// @ts-ignore
import Reviews4 from '../img/Reviews4.png';
// @ts-ignore
import Reviews5 from '../img/Reviews5.png';


const reviews = [
  {
    image: Reviews1,
  },
  {
    image: Reviews2,
  },
  {
    image: Reviews3,
  },
  {
    image: Reviews4,
  },
  {
    image: Reviews5,
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const startX = useRef(0);

  const changeSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setActive(index);
      setFade(true);
    }, 200);
  };

  const prev = () =>
    changeSlide(active === 0 ? reviews.length - 1 : active - 1);

  const next = () =>
    changeSlide(active === reviews.length - 1 ? 0 : active + 1);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 15000);
    return () => clearInterval(id);
  });

  // swipe
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <section className="review-section">
      <h2 className="review-title">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h2>

      <div
        className={`review-main ${fullscreen ? 'review-fullscreen' : ''}`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button className="review-nav review-left" onClick={prev}></button>

        <img
          src={reviews[active].image}
          className={`review-image ${fade ? 'review-fade-in' : 'review-fade-out'}`}
          onClick={() => setFullscreen(true)}
        />

        <button className="review-nav review-right" onClick={next}></button>

        {fullscreen && (
          <button
            className="review-close"
            onClick={() => setFullscreen(false)}
          >
            ✕
          </button>
        )}
      </div>

      <div className="review-thumbs">
        {reviews.map((review, index) => (
          <img
            key={index}
            src={review.image}
            className={`review-thumb ${index === active ? 'review-active' : ''}`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}