type Props = {
  color: string;
  height?: string;
};

const BlurryHorizontalDivider = (props: Props) => {
  const color = `via-${props.color}`;
  const height = props.height ? `h-${props.height}` : 'h-0.5';
  return (
    <hr
      className={`${height} border-t-0 bg-transparent bg-gradient-to-r from-transparent ${color} to-transparent`}
    />
  );
};

export default BlurryHorizontalDivider;
