import Container from "components/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./styles.module.css";
import cn from "classnames";

const Footer = () => {
  return (
    <Container>
      <div className={styles.root}>
        <div>Sangil Yun © 2020</div>
        <div className={styles.icons}>
          <FontAwesomeIcon
            className={cn(styles.icon, "fab fa-linkedin fa-lg")}
            icon={["fab", "github"]}
            onClick={() => window.open("https://github.com/SangilYun")}
          />
          <FontAwesomeIcon
            className={cn(styles.icon, "fab fa-linkedin fa-lg")}
            icon={["fab", "linkedin"]}
            onClick={() =>
              window.open("https://www.linkedin.com/in/sangil-yun-37452a103/")
            }
          />
          <FontAwesomeIcon
            className={cn(styles.icon, "fab fa-linkedin fa-lg")}
            icon={["fab", "medium"]}
            onClick={() => window.open("https://medium.com/@sangilyun")}
          />
        </div>
      </div>
    </Container>
  );
};
export default Footer;
