import type {React, ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type PartnerItem = {
  title: string;
  logo: string;
};

const PartnerList: PartnerItem[] = [
  {
    title: 'Digital Identity',
    logo: 'img/docusaurus.png',
  },
  {
    title: 'Digital Identity',
    logo: 'img/docusaurus.png',
  },
  {
    title: 'Digital Identity',
    logo: 'img/docusaurus.png',
  },
];

function Partner({title, logo}: PartnerItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureLogo} src={logo}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomePartners(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {PartnerList.map((props, idx) => (
            <Partner key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
