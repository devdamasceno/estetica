import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Slider from 'react-slick'; 

const Nav: React.FC = () => {

  const settings = {
    dots: false, // Mostrar indicadores (pontos)
    infinite: true, // Loop infinito
    speed: 100, // Velocidade da transição
    slidesToShow: 1, // Número de slides a serem mostrados
    slidesToScroll: 1, // Quantos slides devem ser rolados por vez
    autoplay: true, // Habilitar autoplay
    autoplaySpeed: 3000 // Velocidade do autoplay
  };


  return (
    <>
      <div className={styles.headerSlide}>
        <div className={styles.headerSlideIcon}>
          <Image src='/icon.svg' alt="Logo" width={100} height={60} />
          <h1>Bioestética</h1>
        </div>
        <p>Clínica com excelência em estética</p>
      </div>

      <div className={styles.sliderContainer}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <Image className={styles.imagemSlide} src='/slide1.webp' alt="Icon 1" width={1000} height={1000} />
          </div>
          <div className={styles.slide}>
            <Image className={styles.imagemSlide} src='/slide2.webp' alt="Icon 2" width={10000} height={1000} />
          </div>
          <div className={styles.slide}>
            <Image className={styles.imagemSlide} src='/slide3.webp' alt="Icon 3" width={10000} height={1000} />
          </div>
        </Slider>
        </div>
    </>
  );
};

export default Nav;