import { useState, useRef } from "react";
import Dionara_1 from "../assets/Dionara.png.jpg";
import Antes1 from "../assets/antes1.png";
import Depois1 from "../assets/depois1.png";
import Antes2 from "../assets/antes2.png";
import Depois2 from "../assets/depois2.png";
import Antes3 from "../assets/antes3.png";
import Depois3 from "../assets/depois3.png";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

import styles from "./Linktree.module.css";
import { useScrollAnimation } from "./useScrollAnimation";
import "./Animacao.css";

export function Biolink() {
  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const tituloRef = useRef(null);
  useScrollAnimation();

  const galeria = [
    { antes: Antes1, depois: Depois1 },
    { antes: Antes2, depois: Depois2 },
    { antes: Antes3, depois: Depois3 },
  ];

  const handleMostrarGaleria = (e) => {
    e.preventDefault();
    const novoEstado = !mostrarGaleria;
    setMostrarGaleria(novoEstado);

    if (!mostrarGaleria && tituloRef.current) {
      setTimeout(() => {
        tituloRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150); // tempo pequeno pra esperar o render
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={Dionara_1}
        alt="Dionara Soares"
        className={styles.imagemPerfil}
      />

      <div className={styles.linksPage}>
        <span>
          <h1>Dionara Soares</h1>
          <h2>Biomédica Esteta</h2>
        </span>

        <a
          href="https://wa.me/5588999429661?text=Olá,%20vim%20através%20do%20Instagram%20e%20gostaria%20de%20mais%20informações%20sobre%20procedimentos/horários."
          target="_blank"
        >
          Agendamentos
        </a>
        <a href="#" onClick={handleMostrarGaleria}>
          Procedimentos
        </a>
        <a href="https://maps.app.goo.gl/U7fBLTZoJRzvjQQv7" target="_blank">
          Endereço
        </a>
      </div>

      <div className={styles.profileLinks}>
        <a
          href="https://wa.me/5588999429661?text=Olá,%20vim%20através%20do%20Instagram%20e%20gostaria%20de%20mais%20informações%20sobre%20procedimentos/horários."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/dionara_soares/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://maps.app.goo.gl/GUK7g1AtyrFJG8Xn7" target="_blank">
          <MdOutlineLocationOn />
        </a>
      </div>

      {/* Galeria */}
      <div
        className={`${styles.galeria} ${mostrarGaleria ? styles.visible : ""}`}
      >
        <h2 ref={tituloRef}>Limpeza de Pele</h2>

        {galeria.map((img, index) => (
          <div
            className="comparacao scale-animation-2"
            data-anime="scroll"
            key={index}
          >
            <div className="imagem">
              <span>Antes</span>
              <img src={img.antes} alt={`Antes ${index + 1}`} />
            </div>
            <div className="imagem">
              <span>Depois</span>
              <img src={img.depois} alt={`Depois ${index + 1}`} />
            </div>
          </div>
        ))}

        <div className={styles.botao}>
          <a
            data-anime="scroll"
            className="scale-animation"
            href="https://wa.me/5588999429661?text=Olá,%20vim%20através%20do%20Instagram%20e%20gostaria%20de%20mais%20informações%20sobre%20procedimentos/horários."
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
