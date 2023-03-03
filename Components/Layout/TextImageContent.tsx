type Props = {
  imgSrc: string;
  imgAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
  textColor?: string;
};

const TextImageContent = (props: Props) => {
  const bgColor = `bg-${props.bgColor || ''}`;
  const textColor = `text-${props.textColor || ''}`;

  const imgSection = (
    <div className="grow-0 shrink-0 basis-auto w-full mb-6 lg:mb-0">
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg bg-center"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img src={props.imgSrc} className="w-full" alt={props.imgAlt} />
      </div>
    </div>
  );

  const textSection = (
    <div className="grow-0 shrink-0 basis-auto w-full">{props.children}</div>
  );

  return (
    <div
      className={`grid grid-cols-1 lg:grid-row-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 py-12 lg:px-12 w-full ${bgColor} ${textColor}`}
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
