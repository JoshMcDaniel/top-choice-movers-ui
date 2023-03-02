import { useState } from 'react';
import { FcExpand } from 'react-icons/fc';
import { Service } from '../Dashboard/Dashboard';

type Props = {
  services: Service[];
};

const ServicesGroupSummary = (props: Props) => {
  const [openItems, setIsOpen] = useState<number[]>([]);

  const setIsOpenState = (index: number): void => {
    const newArr = [...openItems];

    const i = newArr.indexOf(index);

    i > -1 ? newArr.splice(i, 1) : newArr.push(index);

    setIsOpen(newArr);
  };

  return (
    <div id="serviceAccordion">
      <div className="rounded-t-lg border border-neutral-200 bg-base-100 max-w-3xl mx-auto my-8 shadow-xl">
        {props.services.map((service, index) => (
          <section key={service.name}>
            <h2 className="mb-0" id={`heading${index}`}>
              <button
                className={`relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none ${
                  openItems.includes(index) ? 'text-primary' : 'text-secondary'
                }`}
                type="button"
                data-te-collapse-init
                data-te-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
                onClick={() => setIsOpenState(index)}
              >
                {service.name}
                <span
                  className={`ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none ${
                    openItems.includes(index) ? 'mr-0' : 'mr-1'
                  } ${
                    openItems.includes(index) ? 'rotate-0' : 'rotate-[-180deg]'
                  } ${
                    openItems.includes(index) ? 'fill-primary' : 'fill-black'
                  }`}
                >
                  <FcExpand />
                </span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="!visible bg-base-100"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby={`heading${index}`}
            >
              <div className="py-4 px-5">{service.summary}</div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesGroupSummary;
