import HeroSection from '@/Components/Layout/HeroSection';
import TextImageContent from '@/Components/Layout/TextImageContent';
import useMediaQuery from '@/lib/useMediaQuery';
import AlwaysAvailableBanner from '../general/AlwaysAvailableBanner';

const AboutIntro = () => {
  const isMdView = useMediaQuery('lg');
  return (
    <main className="prone lg:prose-lg">
      {/* <HeroSection bgImageUrl="/images/about_us_main.jpg">
        <div className="text-center px-6 md:px-12">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-base-100">
            A Better
            <br />
            <span className="text-4xl lg:text-6xl font-black underline underline-offset-4 decoration-secondary">
              Companion
            </span>
          </h2>
        </div>
      </HeroSection>
      <AlwaysAvailableBanner /> */}

      <div className="grid content-center justify-center pt-12 px-4 bg-base-100">
        <h1 className="prose lg:prose-lg !m-0 text-2xl lg:text-4xl font-extrabold uppercase mb-4">
          Who We Are
        </h1>
      </div>
      <TextImageContent
        imgSrc="/images/about_us_main.jpg"
        imgAlt="Family Owned"
        bgColor="base-100"
        // reverse={true}
      >
        <div>
          <p className="mb-6">
            At our dog training center, we are passionate about helping dogs and
            their owners build strong, loving relationships. Our team consists
            of experienced and certified trainers who are committed to providing
            personalized training programs that meet the unique needs of each
            dog and owner. We believe that every dog is capable of learning and
            that positive reinforcement is the most effective training method
            for creating lasting behavior changes.
          </p>
          <p>
            Our approach to training is centered around building trust and
            mutual respect between dogs and their owners. We understand that
            every dog is unique and that each one requires a customized approach
            to training. That's why we take the time to get to know each dog and
            owner, assessing their individual strengths and weaknesses, to
            create a training plan that is tailored to their specific needs. Our
            goal is to help dogs and their owners develop the skills and
            behaviors needed to create a happy and harmonious home environment.
          </p>
        </div>
      </TextImageContent>
      {/* <TextImageContent
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
      </TextImageContent> */}
    </main>
  );
};

export default AboutIntro;
