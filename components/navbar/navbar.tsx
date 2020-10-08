import Link from "next/link";
import styles from "./styles.module.css";
const Navbar = () => {
  return (
    <nav className={`${styles.root} d-flex justify-content-between`}>
      <div>
        <Link href="/">
          <a className={styles.logo}>Sangil Yun</a>
        </Link>
      </div>
      <div className="d-flex">
        <div>
          <Link href="/about">
            <a className={styles.link}>about</a>
          </Link>
        </div>
        <div className="ml-4">
          <Link href="/projects">
            <a className={styles.link}>projects</a>
          </Link>
        </div>
        <div className="ml-4">
          <Link href="/blog">
            <a className={styles.link}>blog</a>
          </Link>
        </div>
        <div className="ml-4">
          <Link href="/contact">
            <a className={styles.link}>contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
