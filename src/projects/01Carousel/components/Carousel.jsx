import { useEffect, useState } from 'react';
import Slider from './Slider';
import Section from '../../../components/ui/Section';

import imageURLs from '../assets/images';

const Carousel = () => {
  const [images, setImages] = useState(null);

  // Creating blob object url to store data locally, this will avoid fetching carousel image every time from server while storing it locally
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagePromises = imageURLs.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          // console.log(blob);
          return URL.createObjectURL(blob);
        });

        const fetchedImages = await Promise.all(imagePromises);
        // console.log(fetchedImages);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images ? <Slider images={images} /> : <div className='loading'></div>}
    </div>
  );
};
export default Carousel;
