import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
  route: string;
  linkText: string;
  openInNewTab?: boolean;
  color?: string;
  underline?: boolean;
};

const ArrowLink = (props: Props) => {
  const color = props.color ? `text-${props.color}` : 'text-inherit';
  const decoration = props.color
    ? `decoration-${props.color}`
    : 'decoration-inherit';
  const underline = props.underline
    ? `underline underline-offset-4 ${decoration}`
    : '';

  return (
    <Link
      href={props.route}
      target={props.openInNewTab ? '_blank' : ''}
      className={`grid gap-1 grid-flow-col text-bold w-fit items-center ${color} ${underline}`}
      color="primary"
    >
      <>{props.linkText}</>
      <BsArrowRight />
    </Link>
  );
};

export default ArrowLink;
