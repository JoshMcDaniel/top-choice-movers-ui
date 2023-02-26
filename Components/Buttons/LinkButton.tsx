type Props = {
  children: React.ReactNode;
  href: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
};

const LinkButton = (props: Props) => {
  return (
    <a
      className={`inline-block px-7 py-3 mr-1.5 border-2
      border-${props.borderColor || 'base-100'}
      text-${props.textColor || 'base-100'} hover:bg-${
        props.bgColor || 'black'
      } font-medium text-sm leading-snug uppercase rounded-full shadow-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out`}
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
