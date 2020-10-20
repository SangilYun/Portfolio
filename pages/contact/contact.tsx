import Layout from "components/layout";
import Container from "components/container";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.root}>
          <header className={styles.pageTitle}>Contact</header>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <p className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.textField}
              />
            </p>
            <p className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={styles.textField}
                required //TODO: add custom required
              />
            </p>
            <p className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className={styles.textarea}
                required
              ></textarea>
            </p>
            <p>
              <button type="submit" className={styles.submitBtn}>
                Send
              </button>
            </p>
          </form>
        </div>
      </Container>
    </Layout>
  );
};
export default Contact;
