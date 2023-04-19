import Image from 'next/image';

type Props = {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
  disableShadow?: boolean;
};

const TextImageContent = (props: Props) => {
  const bgColor = `bg-${props.bgColor || ''}`;
  const textColor = `text-${props.textColor || ''}`;
  const shadow = `${props.disableShadow ? '' : 'shadow-lg'}`;

  const imgSection = (
    <div className="grow-0 basis-auto w-full h-full mb-6 lg:mb-0">
      <div
        className={`relative h-full overflow-hidden bg-no-repeat bg-cover ripple rounded-lg bg-center ${shadow}`}
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <figure className="relative w-full h-full overflow-hidden aspect-square">
          <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            priority={true}
            fill
            sizes="(max-width: 768px) 100%,
                    (max-width: 1200px) 100%,
                    100%"
            style={{ objectFit: 'cover' }}
          />
        </figure>
      </div>
    </div>
  );

  const textSection = (
    <div className="grow-0 shrink-0 basis-auto w-full">{props.children}</div>
  );

  return (
    <div
      className={`grid grid-cols-1 grid-rows-[1fr_1fr] lg:grid-cols-[1fr_1fr] lg:grid-rows-1 gap-4 lg:gap-8 px-4 py-12 lg:px-12 w-full ${bgColor} ${textColor}`}
    >
      {props.reverse ? (
        <>
          {textSection} {imgSection}
        </>
      ) : (
        <>
          {imgSection} {textSection}
        </>
      )}
    </div>
  );
};

export default TextImageContent;
