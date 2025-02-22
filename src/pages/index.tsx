import type {React, ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomePartners from '@site/src/components/HomePartners';
import HomeIntro from '@site/src/components/HomeIntro';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";


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
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/who">
            Discover more !
          </Link>
        </div>
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
