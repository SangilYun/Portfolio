import Container from "components/container";
import styles from "./styles.module.css";
import cn from "classnames";
const Footer = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div>Sangil Yun © 2020</div>
        <div className={styles.icons}>
          <i className={cn(styles.icon, "fab fa-linkedin fa-2x")} />
          <i className={cn(styles.icon, "fab fa-medium fa-2x")}></i>
          <i className={cn(styles.icon, "fab fa-github fa-2x")}></i>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
