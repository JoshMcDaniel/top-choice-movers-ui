import { Service } from '../Dashboard/Dashboard';
import ServicesGroupSummary from './ServicesGroupSummary';

type Props = {
  services: Service[];
};

const ServiceSummarySection = (props: Props) => {
  return (
    <section className="grid grid-flow-row gap-8 w-full bg-white px-4 p-12 lg:px-12 mb-12 items-start lg:justify-center">
      <h3 className="text-2xl lg:text-4xl font-extrabold">Moving Services</h3>
      <div className="m-auto max-w-5xl">
        <ServicesGroupSummary services={props.services} />
      </div>
    </section>
  );
};

export default ServiceSummarySection;
