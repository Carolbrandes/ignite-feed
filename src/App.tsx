import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa 👋 ",
      },
      {
        type: "paragraph",
        text:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        text: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-11-07 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa 👋 ",
      },
      {
        type: "paragraph",
        text:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        text: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-11-08 06:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
