import React from 'react';
import jorgetech from '../assets/imgs/foto.png';


const SectionBioSection: React.FC = () => {


  return (
    <>
    {/* Conteúdo central */}
          <div className="panel-center">
            <img src={jorgetech} alt="Logo" className="panel-logo" />
            <h2 className="panel-title">Perfil do Piloto</h2>
            <p className="panel-text">
              Piloto responsável por sistemas de bordo em constante evolução, integrando engenharia de software, ciência e arquiteturas complexas. Experiência prática em frotas corporativas, garantindo operação estável, comunicação eficiente e crescimento sustentável das naves sob seu comando.
            </p>
            <p className="panel-text">
              Rota traçada por lógica, experimentação e aprendizado contínuo. Fascínio por computação, neurociência, arquitetura de sistemas e pela convergência entre tecnologia avançada e ciência aplicada.
            </p>
          </div>
    </>
  );
};

export default SectionBioSection;
