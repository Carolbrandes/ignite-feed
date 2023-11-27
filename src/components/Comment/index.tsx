import React, {useState} from "react";
import styles from "./styles.module.css";
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "../Avatar";

interface CommentProps {
  content: string
  onDeleteComment: (commentToRemove: string) => void 
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment(){
    setLikeCount(state => state + 1)
  }

  return content ? (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>

              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={() => onDeleteComment(content)}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};
