import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import ArrowLink from '../Buttons/ArrowLink';
import { Service } from '../Dashboard/Dashboard';

type Props = {
  services: Service[];
};

const ServicesGroupSummary = (props: Props) => {
  const [openItems, setIsOpen] = useState(0);

  const setIsOpenState = (index: number): void => {
    const indexToDisplay = openItems === index ? -1 : index;
    setIsOpen(indexToDisplay);
  };

  return (
    <div id="serviceAccordion">
      <div className="rounded-t-lg border bg-base-100 drop-shadow-xl">
        {props.services.map((service, index) => (
          <section key={service.name} className="border border-neutral-200">
            <h2 className="mb-0">
              <button
                className={`prose lg:prose-xl relative border-0 flex w-full items-center py-4 px-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] drop-shadow-none hover:drop-shadow-md focus:z-[3] focus:outline-none ${
                  openItems === index
                    ? 'bg-primary text-secondary'
                    : 'bg-base-100 text-primary'
                }`}
                type="button"
                onClick={() => setIsOpenState(index)}
              >
                {service.name}
                <span
                  className={`ml-auto border-0 h-5 w-5 shrink-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none ${
                    openItems === index
                      ? 'mr-1 rotate-[-180deg] fill-secondary'
                      : 'mr-0 rotate-0 fill-primary'
                  }`}
                >
                  <AiOutlineDown />
                </span>
              </button>
            </h2>
            <div
              className={`!visible border-0 bg-base-100 overflow-hidden transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                openItems === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="prose lg:prose-xl py-4 px-5 grid grid-flow-row gap-4">
                <span>{service.summary}</span>
                <ArrowLink
                  route={`services/${service.route}`}
                  linkText="See details"
                  color="primary"
                  underline={true}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesGroupSummary;
