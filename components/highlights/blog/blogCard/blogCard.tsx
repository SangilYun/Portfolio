import HighlightedText from "components/highlightedText";
import styles from "./styles.module.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogCardProps {
  date: string;
  description: any; //TODO: rich text type
  title: string;
}
const BlogCard = (props: BlogCardProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}> blog title</div>
      <div className={styles.description}>
        {documentToReactComponents(props.description)}...
        <HighlightedText>continue reading -&gt;</HighlightedText>
      </div>
    </div>
  );
};
export default BlogCard;
