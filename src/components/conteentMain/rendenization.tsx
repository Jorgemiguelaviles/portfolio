import React from 'react';


interface HomePagePropsProps {
  SectionStartComponent: React.ReactNode;
}

const HomePageProps: React.FC<HomePagePropsProps> = ({ SectionStartComponent }) => {
  return (
    <>
      {SectionStartComponent}
    </>
  );
};

export default HomePageProps;
