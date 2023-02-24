import { useEffect } from 'react';

const AboutUs = ():JSX.Element => {
  useEffect(() => {
    console.log('effect');
  }, []);

  return <div>This is About Us Page</div>;
};

export default AboutUs;
