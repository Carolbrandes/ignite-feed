import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./style.module.css";
import { useState } from "react";

export const Post = ({
  post: {
    author: { avatarUrl, name, role },
    content,
    publishedAt,
  },
}) => {
  const [contentTextArea, setContentTextArea] = useState("");
  const [comments, setComments] = useState([""]);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleChange(event) {
    setContentTextArea(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setComments([...comments, contentTextArea]);
    event.target.setCustomValidity("");
  }

  function deleteComment(commentToDelete) {
    setComments(comments.filter((comment) => comment !== commentToDelete));
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  const isNewCommentempty = contentTextArea.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph")
            return <p key={line.content}>{line.content}</p>;
          else if (line.type === "link")
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
        })}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onInvalid={handleNewCommentInvalid}
          required
          onChange={handleChange}
          placeholder="Deixe um comentário"
        />
        <footer>
          <button disabled={isNewCommentempty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      {comments.length > 0 && (
        <div className={styles.commentList}>
          {comments.map((c) => (
            <Comment key={c} content={c} onDeleteComment={deleteComment} />
          ))}
        </div>
      )}
    </article>
  );
};
