import LinkButton from '../Buttons/LinkButton';
import { Organization } from '../Dashboard/Dashboard';

type Props = {
  org: Organization;
  angled?: boolean;
};

const HomeHero = (props: Props) => {
  return (
    <section className="mb-40 overflow-hidden">
      <div className="relative overflow-hidden bg-no-repeat bg-cover bg-[url('/images/truck_bg.jpg')] bg-center h-[300px] md:h-[500px]">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.55)' }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-base-100 px-6 md:px-12">
              <h1 className="text-4xl md:text-7xl xl:text-3xl font-bold tracking-tight mb-10">
                {props.org.mottoShort}
              </h1>
              <LinkButton href="/contact" color="secondary">
                Get started
              </LinkButton>
              <LinkButton href="/about" color="base-100" border={false}>
                Learn more
              </LinkButton>
            </div>
          </div>
        </div>
      </div>

      {props?.angled && (
        <div
          className="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10"
          style={{
            height: '50px',
            transform: 'scale(2)',
            transformOrigin: 'top center',
            color: '#fff',
          }}
        >
          <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default HomeHero;
