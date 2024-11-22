import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.textSpan}>Completed Todos: {completedTodos}</span>
      <span className={styles.textSpan}>Total Todos: {totalTodos}</span>
    </div>
  );
}
