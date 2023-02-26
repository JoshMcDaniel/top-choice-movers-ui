type Props = {
  children: React.ReactNode;
  href: string;
  color?: string;
  border?: boolean;
};

const LinkButton = (props: Props) => {
  const color = props.color || 'base-100';
  const border = props.border !== false ? color : 'transparent';
  return (
    <a
      className={`inline-block px-7 py-3 mr-1.5 border-2 font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
      bg-transparent
      border-${border}
      text-${color}
      `}
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
