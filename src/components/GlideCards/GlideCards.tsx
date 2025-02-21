import React, { useEffect, useRef } from "react";
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

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
      <li className="glide__slide">
      <section className={styles.content}>
      <div className={clsx(styles.card)}>
          <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
          <Heading as="h3" style={{color: "#000000"}}>{title}</Heading>
          <p style={{color: "#000000"}}>{description}</p>
          </div>
      </div>
      </section>
      </li>
  );
}


const GlideCards = () => {
  const glideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (glideRef.current) {
      const glide = new Glide(glideRef.current, {
        type: "carousel",
        perView: 1,
        autoplay: 3000,
        hoverpause: true,
      });

      glide.mount();
      return () => glide.destroy();
    }
  }, []);

  return (
    <div ref={glideRef} className="glide" style={{ width: "100%", maxWidth: "600px", margin: "auto" }}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
           {FeatureList.map((props, idx) => (
             <Feature key={idx} {...props} />
           ))}
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  );
};

export default GlideCards;
