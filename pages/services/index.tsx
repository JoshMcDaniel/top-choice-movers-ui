import LinkButton from '@/Components/Buttons/LinkButton';
import DynamicHead from '@/Components/Headers/DynamicHead';
import TextImageContent from '@/Components/Layout/TextImageContent';
import ServicesIntro from '@/custom/Services/ServicesIntro';
import isScreenSize from '@/lib/isScreenSize';
import org from '../../config/organization.json';

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <>
      <DynamicHead
        org={org}
        description={`${org.name} Services page.`}
        title="Services"
      />
      <ServicesIntro />
      {org.services.map((service, index) => {
        const isEven = index % 2 === 0;
        const colorScheme = isEven ? 'bg-primary text-base-100' : '';
        return (
          <section key={service.name}>
            <TextImageContent
              imgSrc="/images/moving_action.png"
              imgAlt="Moving action"
              reverse={isEven && isScreenSize('lg')}
              bgColor={isEven ? 'primary' : 'white'}
            >
              <div className={colorScheme}>
                <h3 className="text-2xl lg:text-4xl font-extrabold uppercase mb-4">
                  {service.name}
                </h3>
                <p className="mb-6">{service.summary}</p>
                <LinkButton
                  href={`services/${service.route}`}
                  color={isEven ? 'secondary' : 'primary'}
                >
                  See details
                </LinkButton>
              </div>
            </TextImageContent>
          </section>
        );
      })}
    </>
  );
};

export default ServicesPage;
