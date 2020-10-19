import { useRouter } from "next/router";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import Truncate from "react-truncate";

import styles from "./styles.module.css";

interface BlogCardProps {
  id: string;
  title: string;
  description: any; //TODO: add description type
}
const BlogCard = ({ id, title, description }: BlogCardProps) => {
  const router = useRouter();
  return (
    <div className={styles.root} onClick={() => router.push(`/blog/${id}`)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.article}>
        <Truncate lines={3}>{documentToPlainTextString(description)}</Truncate>
      </div>
    </div>
  );
};
export default BlogCard;
