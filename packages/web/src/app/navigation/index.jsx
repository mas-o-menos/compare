import { Link } from 'preact-router/match';

import styles from './styles.css';

const Navigation = () => (
  <ul class={styles.root}>
    <li class={styles.item}>
      <Link
        class={styles.link}
        activeClassName={styles.linkActive}
        href="/webpack"
      >
        Webpack
      </Link>
      <Link
        class={styles.link}
        activeClassName={styles.linkActive}
        href="/lighthouse"
      >
        Lighthouse
      </Link>
      <Link
        class={styles.link}
        activeClassName={styles.linkActive}
        href="/browsertime"
      >
        Browsertime
      </Link>
    </li>
  </ul>
);

export default Navigation;
