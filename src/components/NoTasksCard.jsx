import "./dashboard.css"

function NoTasksCard() {
  return (
    <article className="card dashboard--no-tasks-card">
      <p>You haven't started any stories yet.</p>
      <button>Start</button>
    </article>
  );
}

export default NoTasksCard;
