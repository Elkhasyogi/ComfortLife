import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';

const Service = () => {
  return (
    <section className="pb-8 pt-10 dark:bg-dark lg:pb-[70px]">
      <div className="container">
        <SectionTitle
          subtitle="Service"
          title="Main Service"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
    </section>
  );
};

export default Service;
