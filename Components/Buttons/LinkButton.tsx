type Props = {
  children: React.ReactNode;
  href: string;
  color: string;
  border?: boolean;
};

const LinkButton = (props: Props) => {
  const color = props.color ? `text-${props.color}` : 'text-inherit';
  const borderColor =
    props.border === false ? 'border-transparent' : 'border-current';
  return (
    <a
      className={`border-2 ${borderColor} ${color} inline-block px-7 py-3 mr-1.5 font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out bg-transparent`}
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      href={props.href}
      role="button"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
