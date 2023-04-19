import LinkButton from '@/Components/Buttons/LinkButton';
import TextImageContent from '@/Components/Layout/TextImageContent';

const AboutUsSummary = () => {
  return (
    <TextImageContent
      imgSrc="/images/trainer_main.jpg"
      imgAlt="About Us"
      reverse={true}
    >
      <div className="grid grid-flow-row">
        <h3 className="prose lg:prose-xl text-2xl lg:text-4xl font-extrabold uppercase mb-4">
          Transform Your Dog into the Perfect Companion
        </h3>
        <p className="mb-6">
          At A Better Companion Dog Training, we believe that a well-trained dog
          is a happy dog. Our customized training programs are designed to
          transform your relationship with your furry companion by creating a
          strong foundation of trust, respect, and clear communication.
        </p>
        <p>
          We work with you to understand your specific needs and goals, and then
          tailor our approach to help you achieve them. Whether you're looking
          to teach basic obedience commands, address problem behaviors, or
          simply strengthen your bond with your dog, we're here to help you
          every step of the way. With our proven methods and expert guidance,
          you'll see a noticeable improvement in your dog's behavior and overall
          happiness, making for a happier, healthier, and more fulfilling
          relationship with your canine friend.
        </p>
        <div className="my-8">
          <LinkButton href="about" color="primary">
            Learn More
          </LinkButton>
        </div>
      </div>
    </TextImageContent>
  );
};

export default AboutUsSummary;
