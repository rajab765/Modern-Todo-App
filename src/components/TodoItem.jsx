import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((todo) => todo.name != item.name));
  }

  function handleComplete() {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={handleComplete}
        >
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete()}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
