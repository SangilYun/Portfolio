import styles from "./styles.module.css";
import { useRouter } from "next/router";

const HighlightedText = (props: {
  href: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <div
      className={styles.root}
      onClick={() => router.push(props.href).then(() => window.scrollTo(0, 0))}
    >
      {props.children}
    </div>
  );
};

export default HighlightedText;
