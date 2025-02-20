import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomeIntro(): ReactNode {
  return (
    <section className={styles.content}>
      <div className="container">
        <div className="row">
<p>As the digital age progresses, securely managing identities and personal data has become an urgent challenge. Odditysay Labs is a research team comprising social science researchers and technology experts dedicated to developing innovative solutions to address societal needs. Guided by principles such as data minimization and informed consent, we envision a safer, more seamless, and trustworthy digital ecosystem.</p>
        </div>
      </div>
    </section>
  );
}
