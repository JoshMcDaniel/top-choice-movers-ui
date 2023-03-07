import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const SquareAvatar = (props: Props) => {
  return (
    <div className={props.className}>
      <Image
        src={props.src}
        className={`rounded-lg bg-base-100 p-1 `}
        priority={true}
        alt={props.alt}
        width={props.width}
        height={props.width}
      />
    </div>
  );
};

export default SquareAvatar;
