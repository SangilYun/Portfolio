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
            className={cn(styles.icon, "fab fa-linkedin fa-2x")}
            icon={["fab", "github"]}
          />
          <FontAwesomeIcon
            className={cn(styles.icon, "fab fa-linkedin fa-2x")}
            icon={["fab", "linkedin"]}
          />
          <FontAwesomeIcon
            className={cn(styles.icon, "fab fa-linkedin fa-2x")}
            icon={["fab", "medium"]}
          />
        </div>
      </div>
    </Container>
  );
};
export default Footer;
