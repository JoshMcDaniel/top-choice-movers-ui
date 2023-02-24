type Props = {
  email: string;
};

const Email = (props: Props) => {
  return <a href={`mailto:${props.email}`}>{props.email}</a>;
};

export default Email;
