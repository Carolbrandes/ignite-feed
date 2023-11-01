import styles from "./style.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/45435565?v=4"
          />

          <div className={styles.authorInfo}>
            <strong>CarolB</strong>
            <span>Front End Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        {/* no html do react ele ignora os espacos e deixa o emoction abaixo grudado
        da ancora, uma alternativa ao css e usar{" "} */}
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href=""> #nlw </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>
    </article>
  );
};
