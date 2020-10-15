import { useRouter } from "next/router";
import styles from "./styles.module.css";

interface ProjectCardProps {
  id: string;
  image: { url: string };
  alt: string;
}
const ProjectCard = ({ id, image, alt }: ProjectCardProps) => {
  const router = useRouter();
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    router.push(`/projects/${id}`);
  };
  return (
    <div
      className={styles.root}
      style={{
        background: `url(${image.url}) no-repeat center `,
        backgroundSize: "cover",
      }}
      onClick={onClick}
      title={alt}
    />
  );
};
export default ProjectCard;
