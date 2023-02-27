type Props = {
  email: string;
  children?: React.ReactNode;
};

const Email = (props: Props) => {
  return <a href={`mailto:${props.email}`}>{props.children || props.email}</a>;
};

export default Email;
