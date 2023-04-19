import FreeQuoteBanner from '@/Components/Banners/FreeQuote';
import HeroSection from '@/Components/Layout/HeroSection';

const ServicesIntro = () => {
  return (
    <>
      <HeroSection bgImageUrl="/images/training_programs.jpg">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-base-100">
            Training Programs
          </h1>
        </div>
      </HeroSection>
      <FreeQuoteBanner />
      <div className="prose py-8 lg:py-12 px-4 lg:px-12 m-auto max-w-5xl">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase mb-4">
          Training Programs
        </h1>
        <p className="mb-6">
          At "A Better Companion," we understand that every dog and owner have
          unique needs and goals. That's why we offer personalized dog training
          programs tailored to meet those needs. We believe that every dog is
          capable of learning and growing, and we are dedicated to helping them
          do so.
        </p>
        <p>
          With our expertise and guidance, you will learn effective techniques
          to teach your dog new skills and behaviors that will improve their
          obedience and enhance their quality of life. Whether you're looking to
          address specific problem behaviors or simply want to strengthen your
          bond with your dog, our personalized training programs are designed to
          meet your specific needs and goals.
        </p>
        <p>
          We believe that every dog deserves to have a happy and fulfilling
          life, and our personalized training programs are designed to make that
          a reality for you and your furry companion. So, whether you're dealing
          with basic obedience issues or more complex behavioral problems, we're
          here to help you achieve your goals and create a better life for you
          and your dog.
        </p>
      </div>
    </>
  );
};

export default ServicesIntro;
