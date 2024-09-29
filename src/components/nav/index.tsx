import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
            <Image className={styles.imagemSlide} src='/slide1.webp' alt="slide" width={1000} height={1000} />
          </div>
          <div className={styles.slide}>
            <Image className={styles.imagemSlide} src='/slide2.webp' alt="slide" width={10000} height={1000} />
          </div>
          <div className={styles.slide}>
            <Image className={styles.imagemSlide} src='/slide3.webp' alt="slide" width={10000} height={1000} />
          </div>
        </Slider>
      </div>

      <div className={styles.menuClinica}>

        <div className={styles.menuClinicaCards}>

          <div className={styles.menuClinicaImageContent}>
            <div>
              <Image className={styles.menuClinicaImage} src='/img1.webp' alt='image' width={350} height={260} />
            </div>
            <div>
              <Image className={styles.menuClinicaImage} src='/img2.webp' alt='image' width={350} height={260} />
            </div>
            <div>
              <Image className={styles.menuClinicaImage} src='/img3.webp' alt='image' width={350} height={260} />
            </div>
          </div>

          <div className={styles.whatsappContent} >
            <button 
              className={styles.whatsappButton} 
              onClick={() => window.open('https://wa.me/5532991287531', '_blank')} // Redireciona para o WhatsApp
            >
              <FontAwesomeIcon icon={faWhatsapp} width={20} height={20} size='2x'/>⠀Agende um horário
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Nav;