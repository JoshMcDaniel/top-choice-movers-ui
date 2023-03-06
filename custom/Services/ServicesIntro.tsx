import FreeQuoteBanner from '@/Components/Banners/FreeQuote';
import HeroSection from '@/Components/Layout/HeroSection';

const ServicesIntro = () => {
  return (
    <>
      <HeroSection bgImageUrl="/images/moving_action2.png">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-base-100">
            Moving Services
          </h1>
        </div>
      </HeroSection>
      <FreeQuoteBanner />
      <div className="py-8 lg:py-12 px-4 lg:px-12 m-auto max-w-5xl">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase mb-4">
          Moving Services
        </h1>
        <p className="mb-6">
          At Top Choice Movers, we are committed to providing high-quality
          moving services that are tailored to meet the unique needs of our
          clients. Whether you are moving locally or long distance,
          residentially or commercially, we have the expertise and resources to
          ensure a smooth and stress-free move. Our team of professionals is
          dedicated to customer satisfaction and will work with you every step
          of the way to ensure your move is a success.
        </p>
        <p>
          From packing and loading to transportation and unloading, we handle
          every aspect of the moving process with care and attention to detail.
          We understand that every move is different, which is why we offer a
          range of services that can be customized to fit your specific needs.
          Whether you need help with packing and organization, loading and
          unloading, or transportation and logistics, our team has the
          experience and expertise to get the job done right. Take a look at
          some of our service offerings below.
        </p>
      </div>
    </>
  );
};

export default ServicesIntro;
