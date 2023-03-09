import DynamicHead from '@/Components/Headers/DynamicHead';
import AboutIntro from '@/custom/about/AboutIntro';
import org from '../../config/organization.json';

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <DynamicHead
        org={org}
        description={`${org.name} About page.`}
        title="About"
      />
      <AboutIntro />
    </>
  );
};

export default index;
