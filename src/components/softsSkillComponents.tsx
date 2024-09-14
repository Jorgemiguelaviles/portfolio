import React from 'react';
import '../style/skillitem.css';

interface SectionBioProps {
    titulo: string;
    description: string;
}

const SectionBio: React.FC<SectionBioProps> = ({ titulo, description }) => {
    return (
        <div className="skill-item">
            <h2>{titulo}</h2>
            <p>{description}</p>
        </div>
    );
}

export default SectionBio;
