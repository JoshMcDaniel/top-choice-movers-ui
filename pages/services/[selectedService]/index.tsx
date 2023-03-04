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
      <HeroSection bgImageUrl={service.image.imgSrc}>
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl lg:text-4xl font-extrabold text-base-100">
            {service.name}
          </h1>
        </div>
      </HeroSection>
      <div className="prose lg:prose-xl grid grid-flow-row gap-4 lg:gap-8 px-4 py-12 lg:px-12 w-full m-0 lg:m-auto">
        <h3 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4">
          {service.name}
        </h3>
        <p>{service.summary}</p>
        <p className="mb-6">{service.description}</p>
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
        selectedService: service.route,
      },
    })),
  };
};

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path';
export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'config/organization.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  const serviceRoute = context?.params?.selectedService;

  const service = objectData.services.find(
    (service: Service) => service.route === serviceRoute
  );

  return {
    props: { service },
  };
};

export default SelectedServicePage;
