import About from '@/components/About';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Header from '@/components/Header';
import Team from '@/components/Team';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'This is About page description',
};

const AboutPage = () => {
  return (
    <main>
      <Header />
      <Breadcrumb pageName="About Us" />
      <About />
    </main>
  );
};

export default AboutPage;
