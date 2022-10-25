import styles from "./Image.module.css";

import background from "/signin.jpg";

const Image = () => {
  return (
    <article className={styles.article}>
      <img className={styles.image} src={background} alt="background" />
      <h1 className={styles.header}>React Is Awesome</h1>
    </article>
  );
};

export default Image;