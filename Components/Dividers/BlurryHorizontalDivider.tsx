type Props = {
  color?: string;
  height?: string;
};

const BlurryHorizontalDivider = (props: Props) => {
  const height = props.height ? `h-${props.height}` : 'h-0.5';
  // Hard coding "secondary" color for now.
  // Doesn't work with dynamic values in prod mode.
  return (
    <hr
      className={`${height} border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent`}
    />
  );
};

export default BlurryHorizontalDivider;
