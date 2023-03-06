type Props = {
  color: string;
  height?: string;
};

const BlurryHorizontalDivider = (props: Props) => {
  const color = `bg-transparent bg-gradient-to-r from-transparent via-${props.color} to-transparent`;
  const height = props.height ? `h-${props.height}` : 'h-0.5';
  return <hr className={`${height} border-t-0 ${color}`} />;
};

export default BlurryHorizontalDivider;
