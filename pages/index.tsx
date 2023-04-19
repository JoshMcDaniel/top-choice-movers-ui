import LinkButton from '@/Components/Buttons/LinkButton';
import DynamicHead from '@/Components/Headers/DynamicHead';
import HeroSection from '@/Components/Layout/HeroSection';
import ServiceSummarySection from '@/Components/Services/ServiceSummarySection';
import AlwaysAvailableBanner from '@/custom/general/AlwaysAvailableBanner';
import MottoShort from '@/custom/general/MottoShort';
import AboutUsSummary from '@/custom/Home/AboutUsSummary';
import org from '../config/organization.json';

export default function Home() {
  return (
    <>
      <DynamicHead org={org} description={`${org.name} home page.`} />
      <HeroSection bgImageUrl="/images/home_hero.jpg">
        <div className="text-center px-6 md:px-12">
          <MottoShort />
          <LinkButton href="/contact" color="secondary">
            Get started
          </LinkButton>
          <LinkButton href="/about" color="base-100" border={false}>
            Learn more
          </LinkButton>
        </div>
      </HeroSection>
      <AlwaysAvailableBanner />
      <AboutUsSummary />
      <ServiceSummarySection services={org.services} />
    </>
  );
}
