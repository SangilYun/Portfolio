import Link from "next/link";
import styles from "./styles.module.css";
const Navbar = () => {
  return (
    <nav className={`${styles.root} d-flex justify-content-between`}>
      <div>
        <Link href="/">sangil yun</Link>
      </div>
      <div className="d-flex">
        <div>
          <Link href="/about">about</Link>
        </div>
        <div className="ml-4">
          <Link href="/projects">projects</Link>
        </div>
        <div className="ml-4">
          <Link href="/blog">blog</Link>
        </div>
        <div className="ml-4">
          <Link href="/contact">contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
