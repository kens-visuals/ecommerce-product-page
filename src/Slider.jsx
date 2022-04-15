import { useState } from 'react';

// assets
import image1 from './images/image-product-1.jpg';
import image2 from './images/image-product-2.jpg';
import image3 from './images/image-product-3.jpg';
import image4 from './images/image-product-4.jpg';
import prevIcon from './images/icon-previous.svg';
import nextIcon from './images/icon-next.svg';

export default function Slider() {
  const [currImg, setCurrImg] = useState(0);

  const images = [image1, image2, image3, image4];

  const prevImg = () =>
    setCurrImg(currImg === 0 ? images.length - 1 : currImg - 1);

  const nextImg = () =>
    setCurrImg(currImg >= images.length - 1 ? 0 : currImg + 1);

  return (
    <div className="relative">
      <button
        type="button"
        className="absolute left-4 top-1/2 flex aspect-square w-10 items-center justify-center rounded-full bg-white"
        onClick={prevImg}
      >
        <img
          src={prevIcon}
          alt="previous"
          className="absolute top-1/2 left-1/2 h-fit max-w-full -translate-x-2 -translate-y-1/2"
        />
      </button>

      <img
        src={images[currImg]}
        alt="shoes"
        className="block w-full max-w-full"
      />

      <button
        type="button"
        className="absolute right-4 top-1/2 flex aspect-square w-10 items-center justify-center rounded-full bg-white"
        onClick={nextImg}
      >
        <img
          src={nextIcon}
          alt="next"
          className="fit-w-full absolute top-1/2 left-1/2 h-fit -translate-x-1.5 -translate-y-1/2"
        />
      </button>
    </div>
  );
}