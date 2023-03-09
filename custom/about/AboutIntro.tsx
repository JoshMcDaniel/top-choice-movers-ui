import HeroSection from '@/Components/Layout/HeroSection';
import TextImageContent from '@/Components/Layout/TextImageContent';
import useMediaQuery from '@/lib/useMediaQuery';
import AlwaysAvailableBanner from '../general/AlwaysAvailableBanner';

const AboutIntro = () => {
  const isMdView = useMediaQuery('lg');
  return (
    <>
      <HeroSection bgImageUrl="/images/about_us_summary.png">
        <div className="text-center px-6 md:px-12">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-base-100">
            Why we are the
            <br />
            <span className="text-4xl lg:text-6xl font-black underline underline-offset-4 decoration-secondary">
              Top Choice
            </span>
          </h2>
        </div>
      </HeroSection>
      <AlwaysAvailableBanner />
      <TextImageContent
        imgSrc="/images/about_family.jpg"
        imgAlt="Family Owned"
        bgColor="base-100"
        reverse={true}
      >
        <div>
          <h1 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4">
            Family-Owned Moving Company
          </h1>
          <p className="mb-6">
            Welcome to Top Choice Movers, your trusted and reliable moving
            company in Florida. Our family-owned business was founded in 2016
            with the goal of providing exceptional moving services to families
            and businesses in the Sunshine State. With years of experience in
            the industry, we take pride in our ability to deliver stress-free
            and efficient moving experiences to all our clients.
          </p>
        </div>
      </TextImageContent>
      <TextImageContent
        imgSrc="/images/moving_action_2.jpg"
        imgAlt="Personalized Moving Services"
        bgColor="primary"
        reverse={!isMdView}
      >
        <div className="bg-primary text-base-100">
          <h3 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4 text-base-100">
            Personalized Moving Services
          </h3>
          <p className="mb-6">
            At Top Choice Movers, we understand that moving can be a daunting
            task. That's why we work hard to ensure that our clients' needs are
            met at every step of the way. From packing and loading to
            transportation and unpacking, our team of skilled movers will handle
            all aspects of your move with utmost care and professionalism. We
            prioritize customer satisfaction and strive to go above and beyond
            to exceed our clients' expectations. With our personalized approach
            and attention to detail, you can trust us to make your move a
            success.
          </p>
        </div>
      </TextImageContent>
      <TextImageContent
        imgSrc="/images/moving_action.png"
        imgAlt="Moving action"
        bgColor="base-100"
        reverse={true}
      >
        <div>
          <h3 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4">
            A Better Moving Experience
          </h3>
          <p className="mb-6">
            We believe that communication is key to a successful move, which is
            why we maintain open lines of communication with our clients
            throughout the entire process. Our team is always available to
            answer any questions or concerns that may arise, and we are
            committed to ensuring that our clients have a seamless and
            stress-free moving experience. At Top Choice Movers, we are more
            than just a moving company - we are a family that cares about our
            clients and their belongings. Whether you're moving down the street
            or across the state, trust us to be your top choice for all your
            moving needs.
          </p>
        </div>
      </TextImageContent>
    </>
  );
};

export default AboutIntro;
