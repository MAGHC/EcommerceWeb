import { useState } from 'react';

import style from './ImageViewer.module.css';

const ImageViewer = ({ imgs }: { imgs: string[] }) => {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);

  return (
    <section className={style.section}>
      <div className={style.mainImg}>
        <img src={selectedImg} alt="selectedImg" />
      </div>
      <div className={style.subImgs}>
        {imgs.map((img, i) => {
          return <img onClick={() => setSelectedImg(img)} key={i} src={img} alt={`img ${i}`}></img>;
        })}
      </div>
    </section>
  );
};

export default ImageViewer;
