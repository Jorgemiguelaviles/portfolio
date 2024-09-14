import React from 'react';

interface HomePagePropsProps {
  HeaderComponent: React.ReactNode;
  SectionStartComponent: React.ReactNode;
}

const HomePageProps: React.FC<HomePagePropsProps> = ({ HeaderComponent, SectionStartComponent }) => {
  return (
    <>
      {HeaderComponent}
      {SectionStartComponent}
    </>
  );
};

export default HomePageProps;
