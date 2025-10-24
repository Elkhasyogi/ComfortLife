import About from '@/components/About';
import HomeBlogSection from '@/components/Blog/HomeBlogSection';
import CallToAction from '@/components/CallToAction';
import Clients from '@/components/Clients';
import ScrollUp from '@/components/Common/ScrollUp';
import Contact from '@/components/SeniorProfile';
import Faq from '@/components/Faq';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import { getAllPosts } from '@/utils/markdown';
import { Metadata } from 'next';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'ComfortLife Platform',
  description:
    '',
};

export default function Home() {
  const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug']);

  return (
    <main>
      <Header />
      <ScrollUp />
      <Hero />
    </main>
  );
}
