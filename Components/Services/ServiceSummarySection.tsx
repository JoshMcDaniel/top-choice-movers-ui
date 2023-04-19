import { Service } from '../Dashboard/Dashboard';
import ServicesGroupSummary from './ServicesGroupSummary';

type Props = {
  services: Service[];
};

const ServiceSummarySection = (props: Props) => {
  return (
    <section className="grid grid-flow-row gap-8 w-full bg-white px-4 py-12 lg:px-12 mb-12 items-start lg:justify-center">
      <h3 className="prose lg:prose-lg text-2xl lg:text-4xl font-extrabold uppercase">
        Customizable Programs
      </h3>
      <div className="m-auto max-w-5xl">
        <ServicesGroupSummary services={props.services} />
      </div>
    </section>
  );
};

export default ServiceSummarySection;
