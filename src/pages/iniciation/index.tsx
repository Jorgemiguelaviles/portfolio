// src/pages/index.tsx
import React from 'react';
import HomePageProps from '../../components/Rendenization';
import Header from '../../components/Header';
import SectionStart from '../../components/SectionStart';

const Intro: React.FC = () => {
  return (
    <HomePageProps 
      HeaderComponent={<Header />} 
      SectionStartComponent={<SectionStart />} 
    />
  );
};

export default Intro;
