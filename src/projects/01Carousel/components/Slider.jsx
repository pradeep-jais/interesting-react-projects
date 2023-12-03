import { useEffect, useState } from 'react';

const Slider = ({ images }) => {
  // console.log(images);
  const [index, setIndex] = useState(0);

  // prev and next button handle
  const nextImage = () => {
    // console.log('next image render', index);
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevImage = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  // Carousel more feature : change image after every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex > images.length - 1) {
          return 0;
        }
        return nextIndex;
      });
      // console.log('render');
    }, 3000);

    return () => {
      clearInterval(id);
    };
  }, [images]);
  return (
    <>
      <article className="image-slider">
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          ◀
        </button>
        <img src={images[index]} alt="image" className="carousel-img" />
        <button className="carousel-btn next-btn" onClick={nextImage}>
          ▶
        </button>
      </article>
      <div className="icon-container">
        {images.map((image, i) => {
          return (
            <div
              style={{ opacity: index === i ? '1' : '0.5' }}
              key={i}
              className="icon"
              onClick={() => setIndex(i)}
            >
              <img src={image} className="icon-img" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Slider;
