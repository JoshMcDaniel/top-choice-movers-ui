import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
};

const FreeQuoteBanner = (props: Props) => {
  return (
    <section className="bg-primary text-center">
      <div className="grid grid-flow-row gap-1 px-4 py-2 text-xs lg:text-base text-center text-base-100 justify-center">
        {props.children}
        <span>
          <Link
            href={'/contact'}
            className="underline underline-offset-4 decoration-secondary"
          >
            Get a{' '}
            <strong className="text-secondary uppercase">Free Quote</strong>{' '}
            today!
          </Link>
        </span>
      </div>
    </section>
  );
};

export default FreeQuoteBanner;
