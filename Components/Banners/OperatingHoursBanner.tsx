import { Organization } from '../Dashboard/Dashboard';

type Props = {
  org: Organization;
};

const OperatingHoursBanner = (props: Props) => {
  const { operatingSchedule } = props.org;
  return (
    <section className="bg-primary text-center">
      <div className="grid grid-flow-row lg:grid-flow-col gap-1 lg:gap-2 px-4 py-2 text-xs lg:text-base text-center text-base-100 justify-center">
        <span>Operating hours:</span>
        <span>
          {operatingSchedule.daysOfWeek}, {operatingSchedule.hours}
        </span>
      </div>
    </section>
  );
};

export default OperatingHoursBanner;
