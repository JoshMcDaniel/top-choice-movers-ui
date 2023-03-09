import TextImageContent from '@/Components/Layout/TextImageContent';

const AboutUsSummary = () => {
  return (
    <TextImageContent
      imgSrc="/images/about_us_summary.png"
      imgAlt="About Us"
      reverse={true}
    >
      <div>
        <h3 className="prose lg:prose-xl text-2xl lg:text-4xl font-extrabold uppercase mb-4">
          A family owned moving company serving Florida
        </h3>
        <p className="mb-6">
          At Top Choice Movers, we understand how important it is to find a
          reliable and trustworthy moving company to handle your relocation
          needs. As a family-owned business, we pride ourselves on our
          commitment to providing exceptional customer service and ensuring your
          move is as stress-free as possible.
        </p>
        <p>
          We take great care in ensuring your belongings are safely transported
          to your new home or office, and our team of experienced movers are
          dedicated to handling your items with the utmost care and attention.
          With Top Choice Movers, you can rest assured that your move is in good
          hands, and we'll go above and beyond to ensure your complete
          satisfaction. Choose us for your next move and experience what makes
          us the Top Choice for moving services.
        </p>
      </div>
    </TextImageContent>
  );
};

export default AboutUsSummary;
