import { Service } from '@/Components/Dashboard/Dashboard';
import DynamicHead from '@/Components/Headers/DynamicHead';
import HeroSection from '@/Components/Layout/HeroSection';
import { GetStaticPaths, GetStaticProps } from 'next';
import org from '../../../config/organization.json';

const SelectedServicePage = (props: { service: Service }) => {
  const { service } = props;

  return (
    <>
      <DynamicHead
        org={org}
        description={`${org.name} ${service?.name} page.`}
        title={service?.name || ''}
      />
      <HeroSection bgImageUrl={service?.image?.imgSrc}>
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl lg:text-4xl font-extrabold text-base-100">
            {service?.name}
          </h1>
        </div>
      </HeroSection>
      <FreeQuoteBanner>
        <span>Interested in the {service?.name} program?</span>
      </FreeQuoteBanner>
      <div className="prose grid grid-flow-row px-4 py-12 lg:px-12 max-w-5xl m-0 lg:m-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4">
          {service?.name}
        </h3>
        <p
          className="mb-6"
          dangerouslySetInnerHTML={{
            __html: service?.description.replace(/\\n/g, '<br>'),
          }}
        />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const services: Service[] = org.services;
  return {
    fallback: true,
    paths: services.map((service) => ({
      params: {
        selectedService: service.route.startsWith('/')
          ? service.route.slice(1)
          : service.route,
      },
    })),
  };
};

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
import FreeQuoteBanner from '@/Components/Banners/FreeQuote';
export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'config/organization.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const serviceRoute = context?.params?.selectedService;

  const service = objectData.services.find(
    (service: Service) =>
      service?.route ===
      (service.route.startsWith('/') ? `/${serviceRoute}` : serviceRoute)
  );

  return {
    props: { service },
  };
};

export default SelectedServicePage;
