import Link from 'next/link';

const AlwaysAvailableBanner = () => {
  return (
    <section className="bg-primary text-center">
      <div className="grid grid-flow-col gap-2 px-4 py-2 text-xs lg:text-base text-center text-base-100 justify-center">
        <span>Available 24/7 365!</span>
        <span>
          <Link
            href={'/contact'}
            className="underline underline-offset-4 decoration-secondary"
          >
            Contact Us <strong className="text-secondary">TODAY</strong>!
          </Link>
        </span>
      </div>
    </section>
  );
};

export default AlwaysAvailableBanner;
