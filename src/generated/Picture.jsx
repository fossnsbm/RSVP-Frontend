import styles from "./Picture.module.css";

import background from "/signin.jpg";

const Picture = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="background" />
      </picture>
      <h1 className={styles.header}>A truly 
Open Source
Community dedicated to 
Open Source 
Enthusiasts.</h1>
    </article>
  );
};

export default Picture;