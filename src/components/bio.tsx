import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/iniciation.css';
import foto from '../assets/imgs/foto.jpg';

const Bio: React.FC = () => {
  

  return (
    <div className="bio">
      <div>
        <h1 className="typing-effect">Biografia</h1>
      </div>
      <div className="direction">
        <div className={`text-container`}>
          <p>
            Sou Jorge Miguel Aviles de Moura, desenvolvedor full-stack apaixonado por transformar ideias em soluções reais. Com uma abordagem focada em inovação e eficiência, busco sempre entregar o melhor em cada projeto.
          </p>
        </div>
        <img src={foto} alt="Foto de Jorge" className={`foto img-container`} />
      </div>
    </div>
  );
}

export default Bio;
