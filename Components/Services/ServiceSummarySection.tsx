import { Service } from '../Dashboard/Dashboard';
import ServicesGroupSummary from './ServicesGroupSummary';

type Props = {
  services: Service[];
};

const ServiceSummarySection = (props: Props) => {
  return (
    <section className="w-full py-12 px-4 mb-12 items-center justify-items-center">
      <ServicesGroupSummary services={props.services} />
    </section>
  );
};

export default ServiceSummarySection;
