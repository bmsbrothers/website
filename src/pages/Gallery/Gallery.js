import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Gallery.css";

// Array media dengan teks yang akan ditampilkan saat diklik
const media = [
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/mei_2022.jpg",
    text: "UEFA CHAMPION LEAGUE 2022",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/juli_2019.jpg",
    text: "PSM MAKASSAR VS PERSIJA",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/juni_2019.jpg",
    text: "FINAL CHAMPION LEAGUE 2019",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/april_2019_1.jpg",
    text: "AREMA FC VS PERSEBAYA",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/april_2019.jpg",
    text: "BALI UNITED VS PERSIJA",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/feb_2019.jpg",
    text: "MAN. UNITED VS LIVERPOOL",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/des_2018.jpg",
    text: "ELCLASICO DESEMBER 2017",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/maret_2018.jpg",
    text: "BARCELONA VS CHELSEA",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/des_2017_1.jpg",
    text: "ELCLASICO DESEMBER 2017",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/des_2017.jpg",
    text: "ELCLASICO DESEMBER 2017",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/juni_2017.jpg",
    text: "JUVENTUS VS REAL MADRID",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/jan_2017.jpg",
    text: "DANAMON REDMATCH",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/maret_2019.jpg",
    text: "ELCLASICO MARET 2019",
  },
  {
    type: "image",
    src: "${process.env.PUBLIC_URL}/images/maret_2018_1.jpg",
    text: "BARCELONA VS ATLETICO MADRID",
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/bigreds.mp4",
    text: "Nobar Liverpool",
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/aremania.mp4",
    text: "Aremania Jakarta",
  },
  {
    /*{
    type: "video",
    src: "/video/elclasico_gbk.mp4",
    text: "Nobar Elclasico GBK",
  },
  {
    type: "video",
    src: "/video/elclasico_jogja.mp4",
    text: "Nobar Elclasico Jogja",
  },*/
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/elclasico_prepare.mp4",
    text: "Nobar Elclasico Jakarta",
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/hajatan_madrid.mp4",
    text: "Madridista Indonesia Euporia",
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/konseramal_jakmania.mp4",
    text: "Konser Amal Jakmania",
  },
  {
    type: "video",
    src: "${process.env.PUBLIC_URL}/video/nobar_1.mp4",
    text: "Elclasico",
  },

  // Tambahkan lebih banyak gambar dan video sesuai kebutuhan
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleMediaClick = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseClick = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  // Filter images and videos
  const images = media.filter((item) => item.type === "image");
  const videos = media.filter((item) => item.type === "video");

  return (
    <div className="gallery-container">
      <h3 className="gallery-heading">BMS NOBAR EVENT GALLERY</h3>
      <div className="media-section photos">
        <h2 className="media-title">Photo - Photo</h2>
        <div className="media-grid">
          {images.map((item, index) => (
            <div
              key={index}
              className="media-card"
              onClick={() => handleMediaClick(index)}
            >
              <img src={item.src} className="gallery-image" alt={item.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="media-section videos">
        <h2 className="media-title">Video</h2>
        <div className="media-grid">
          {videos.map((item, index) => (
            <div
              key={index}
              className="media-card"
              onClick={() => handleMediaClick(index + images.length)}
            >
              <video src={item.src} className="gallery-video" />
            </div>
          ))}
        </div>
      </div>
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={handleCloseClick}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            {...swipeHandlers}
          >
            {media[selectedIndex].type === "image" ? (
              <img
                src={media[selectedIndex].src}
                alt="Selected"
                className="modal-image"
              />
            ) : (
              <video
                src={media[selectedIndex].src}
                controls
                className="modal-video"
              />
            )}
            <p className="modal-text">{media[selectedIndex].text}</p>
            <button className="modal-close" onClick={handleCloseClick}>
              X
            </button>
            <button className="modal-prev" onClick={handlePrev}>
              &lt;
            </button>
            <button className="modal-next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
