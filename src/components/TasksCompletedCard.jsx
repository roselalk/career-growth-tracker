import "./dashboard.css"

function TasksCompletedCard({ doneTasks }) {
  return (
    <article className="card dashboard--tasks-completed-card">
      <p>You've completed</p>
      <h3>{doneTasks} tasks</h3>
    </article>
  );
}

export default TasksCompletedCard;
