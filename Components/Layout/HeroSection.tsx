type Props = {
  bgImageUrl: string;
  children?: React.ReactNode;
  angled?: boolean;
};

const HeroSection = (props: Props) => {
  return (
    <section className="overflow-hidden shadow-xl">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover bg-center h-[300px] md:h-[500px]"
        style={{ backgroundImage: `url(${props.bgImageUrl})` }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black/[55%]">
          <div className="flex justify-center items-center h-full">
            {props.children}
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

export default HeroSection;
