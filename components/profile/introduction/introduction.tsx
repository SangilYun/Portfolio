import styles from "./styles.module.css";
const Introduction = () => {
  return (
    <div>
      <div className={styles.greeting}>HI, I'M SANGIL</div>
      <div className={styles.intro}>
        I’m a frontend developer in Seoul, Korea. I have experience in web
        developement using React, Mobx, flow and more.
      </div>
      <div className={styles.intro}>
        Here you can see my selected projects I’ve done as well as my blog. You
        can also contact me or view my resume.
      </div>
    </div>
  );
};
export default Introduction;
