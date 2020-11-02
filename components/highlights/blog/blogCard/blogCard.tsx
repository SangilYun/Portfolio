import HighlightedText from "components/highlightedText";
import Truncate from "react-truncate";

import { useRouter } from "next/router";
import styles from "./styles.module.css";

import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

interface BlogCardProps {
  id: string;
  date: string;
  description: any; //TODO: rich text type
  title: string;
}
const BlogCard = (props: BlogCardProps) => {
  const router = useRouter();
  return (
    <div
      className={styles.root}
      onClick={() =>
        router.push(`/blog/${props.id}`).then(() => window.scrollTo(0, 0))
      }
    >
      <div className={styles.title}> {props.title}</div>
      <div className={styles.description}>
        <Truncate lines={3}>
          {documentToPlainTextString(props.description)}
        </Truncate>
        <HighlightedText href={`/blog/${props.id}`}>
          continue reading -&gt;
        </HighlightedText>
      </div>
    </div>
  );
};
export default BlogCard;
