import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Introduction = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.greeting}>HI, I'M SANGIL</div>
      <div className={styles.intro}>
        I’m a frontend developer in Seoul, Korea. I have experience in web
        development using React, Mobx, flow and more.
      </div>
      <div className={styles.intro}>
        Here you can see my
        <span className={styles.text} onClick={() => router.push("/projects")}>
          {` selected projects `}
        </span>
        I’ve done as well as my
        <span className={styles.text} onClick={() => router.push("/projects")}>
          {` blog`}
        </span>
        . You can also
        <span className={styles.text} onClick={() => router.push("/contact")}>
          {` contact me `}
        </span>
        or
        <span
          className={styles.text}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/15e7BjPuVvHb8tkf1L7RHJwi1hmo64W-s/view?usp=sharing"
            )
          }
        >
          {` view my resume`}
        </span>
        .
      </div>
    </div>
  );
};
export default Introduction;
