import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Digital Identity',
    Svg: require('@site/static/img/webicon/svg/092-user_profile.svg').default,
    description: (
      <>
        Many things can be done with a simple "click" in the digital world, yet what could be our identity in the digital world? Is an electronic copy of our goverment-issued card enough? 
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('@site/static/img/webicon/svg/018-data_protection.svg').default,
    description: (
      <>
        Do we actually control or even own our person data and information? What cost we have to pay in exchange for the convenience in the modern world?
      </>
    ),
  },
  {
    title: 'Decentralization',
    Svg: require('@site/static/img/webicon/svg/011-community.svg').default,
    description: (
      <>
        As a potential way of realizing the vision of permissionless world, decentralization has been promoted for quite a while. What is its definition? Do we understand it well enough?
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
