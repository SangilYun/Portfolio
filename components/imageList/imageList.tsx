import { useState } from "react";
import styles from "./styles.module.css";
interface image {
  title: string;
  url: string;
}
const ImageList = ({ images }: { images: Array<image> }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(images[0].url);

  console.log("currentImageUrl", currentImageUrl);

  return (
    <div>
      <div className={styles.images}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={styles.image}
              style={{
                background: `url(${image.url}) no-repeat center `,
                backgroundSize: "cover",
              }}
              title={image.title}
              onClick={() => setCurrentImageUrl(image.url)}
            />
          );
        })}
      </div>
      <div className={styles.imageContainer}>
        <div
          style={{
            backgroundImage: `url(${currentImageUrl})`,
          }}
          className={styles.image_lg}
        />
      </div>
    </div>
  );
};

export default ImageList;
