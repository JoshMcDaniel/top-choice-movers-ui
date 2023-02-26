import DynamicHead from '@/Components/Headers/DynamicHead';
import HomeHero from '@/Components/Home/HomeHero';
import org from '../config/organization.json';

export default function Home() {
  return (
    <>
      <DynamicHead org={org} description={`${org.name} home page.`} />
      <HomeHero org={org} />
    </>
  );
}
