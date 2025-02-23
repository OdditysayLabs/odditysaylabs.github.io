import type {React, ReactNode} from 'react';
import React, { useEffect, useRef } from "react"
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

type Page = {
  title: string;
  path: string;
};

const Pages: Page[] = [
  {
    title: '001',
    path: 'img/trust/page1.jpg'
  },
  {
    title: '002',
    path: 'img/trust/page2.jpg'
  },
  {
    title: '003',
    path: 'img/trust/page3.jpg'
  },
  {
    title: '004',
    path: 'img/trust/page4.jpg'
  },
  {
    title: '005',
    path: 'img/trust/page5.jpg'
  },
  {
    title: '006',
    path: 'img/trust/page6.jpg'
  },
];

function RenderPage({title, path}: Page) {
  return (
      <li className="glide__slide">
      <section className={styles.content}>
      <div className={clsx(styles.card)}>
          <div className="text--center">
          <img className={styles.featureSvg} src={path} width="100%" />
          </div>
      </div>
      </section>
      </li>
  );
}


const RenderBook = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        perView: 1,
        autoplay: 5000,
        hoverpause: true,
      });

      glide.mount();
      return () => glide.destroy();
    }
  }, []);
  return (
    <div ref={glideRef} className="glide" style={{ width: "100%", maxWidth: "900px", margin: "auto" }}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
           {Pages.map((props, idx) => (
             <RenderPage key={idx} {...props} />
           ))}
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
        <button className="glide__bullet" data-glide-dir="=4"></button>
        <button className="glide__bullet" data-glide-dir="=5"></button>
      </div>
    </div>
  );
};

function ZineHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Decentralizing Trust
        </Heading>
      </div>
    </header>
  );
}

export default function TrustPage(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      <ZineHeader />
      <div class="container">
         <div className="text--center">
             <br/>
             <RenderBook />
         </div>
      </div>
      </main>
    </Layout>
  );
}
