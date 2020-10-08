import ProfileImage from "./profileImage";
import Introduction from "./introduction";
import styles from "./styles.module.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import cns from "classnames";
const Profile = () => {
  return (
    <Container className="p-0">
      <Row className={styles.row}>
        <Col className={styles.col} md={7}>
          <Introduction />
        </Col>
        <Col
          className={cns(styles.col, "d-flex justify-content-center")}
          md={5}
        >
          <ProfileImage />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
