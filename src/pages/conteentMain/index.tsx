// src/pages/index.tsx
import React from 'react';
import HomePageProps from '../../components/Rendenization';
import Header from '../../components/Header';
import SectionBioSection from '../../components/SectionSkiils';
import Contacts from '../../components/Contacts';

const ContenteMain: React.FC = () => {
  return (
    <HomePageProps 
      HeaderComponent={<Header />} 
      SectionStartComponent={<SectionBioSection />} 
    />
  );
};

export default ContenteMain;
