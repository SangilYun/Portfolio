import HighlightedText from "components/highlightedText";
import styles from "./styles.module.css";

const BlogCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}> blog title</div>
      <div className={styles.description}>
        blog description...<HighlightedText>continue reading -></HighlightedText>
      </div>
    </div>
  );
};
export default BlogCard;
