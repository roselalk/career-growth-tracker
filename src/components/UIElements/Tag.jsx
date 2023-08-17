import "../item.css";

function Tag({ classes, text, onClick }) {
  return (
    <span className={classes} onClick={onClick}>
      <h4>{text}</h4>
    </span>
  );
}

export default Tag;
