import type {React, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeIntro from '@site/src/components/HomeIntro';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import GlideCards from "../components/GlideCards/GlideCards";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div class="container">
      <div class="row">
        <div className={clsx('col col--4')}>
        <div className="text--right">
          <HomeIntro />
        </div>
        </div>
        <div className={clsx('col col--8')}>
        <div className="text--center">
          <GlideCards />
        </div>
        </div>
      </div>
      </div>
      </main>
    </Layout>
  );
}
