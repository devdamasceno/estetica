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
              <FontAwesomeIcon icon={faWhatsapp} size='1x' />⠀Agende um horário
            </button>
          </div>
        </div>

      </div>

      <div className={styles.menuTratamento}>
        <div className={styles.menuTratamentoContent}>
          <h1>TRATAMENTOS E PROTOCOLOS EXCLUSIVOS!</h1>
          <div className={styles.tratamentoDescricaoFluxo}>
            <div className={styles.tratamentoDescricaoFluxoUm}>
              <h1>Avaliação completa</h1>
              <p>Tanto facial quanto corporal, onde a profissional detecta suas necessidades e traça o melhor plano de tratamento para alcançar resultados efetivos e de qualidade.</p>
            </div>

            <div className={styles.tratamentoDescricaoFluxoDois}>
              <h1>Equipamentos avançados</h1>
              <p>Contamos com um arsenal de equipamentos de tecnologia avançada desde a avaliação até os atendimentos em cabine proporcionando resultados superiores e em menor tempo.</p>
            </div>

            <div className={styles.tratamentoDescricaoFluxoTres}>
              <h1>Melhor experiência</h1>
              <p>O foco é sempre em atender bem, em um ambiente confortável e aconchegante com horários marcados e tempo de qualidade para proporcionar a melhor experiência desde o primeiro contato!</p>
            </div>
          </div>
        </div>
        <div className={styles.whatsappContent} >
          <button
            className={styles.whatsappButton}
            onClick={() => window.open('https://wa.me/5532991287531', '_blank')} // Redireciona para o WhatsApp
          >
            <FontAwesomeIcon icon={faWhatsapp} size='1x' />⠀Agende um horário
          </button>
        </div>
      </div>

      <div className={styles.tarjaContainer}>
        <div className={styles.cardAnimados}>
          <Image src='/imgAvancados.png' alt='Equipamentos avançados' width={300} height={150} className={styles.image} />
          <Image src='/imgCompleta.png' alt='Avaliação completa' width={300} height={150} className={styles.image} />
          <Image src='/imgExperiencia.png' alt='A melhor experiência' width={300} height={150} className={styles.image} />
          <Image src='/imgAvancados.png' alt='Equipamentos avançados' width={300} height={150} className={styles.image} />
          <Image src='/imgCompleta.png' alt='Avaliação completa' width={300} height={150} className={styles.image} />
          <Image src='/imgExperiencia.png' alt='A melhor experiência' width={300} height={150} className={styles.image} />
        </div>
      </div>
    </>
  );
};

export default Nav;