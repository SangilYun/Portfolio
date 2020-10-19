import styles from "./styles.module.css";
import cn from "classnames";
const Tags = ({
  tags,
  selectedTags,
  onClick,
}: {
  tags: string[];
  selectedTags?: boolean;
  onClick: (tag: string) => void;
}) => {
  const onTagClick = (tag: string) => {
    onClick(tag);
  };
  return (
    <div className={styles.root}>
      {tags?.map((tag) => (
        <span
          key={tag}
          className={cn(styles.tag, { [styles.selectedTag]: selectedTags })}
          onClick={() => onTagClick(tag)}
        >{`#${tag} `}</span>
      ))}
    </div>
  );
};
export default Tags;
