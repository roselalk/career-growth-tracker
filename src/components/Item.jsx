/* eslint-disable react/prop-types */
import { useState } from "react";
import "./item.css";
import starFilled from "../assets/star2.png";

function Item({
  firstInArray,
  id,
  title,
  status,
  star,
  description,
  learningOpportunities,
  tags,
  jiraLink,
}) {
  const [showInfo, setShowInfo] = useState(true);
//   const [showInfo, setShowInfo] = useState(firstInArray ? true : false);

  function handleClick() {
    setShowInfo(!showInfo);
  }

  const allTags = tags.map((tag, index) => {
    return (
      <h4 key={index} className={`tag ch-${tag.length} ${tag}`}>
        {tag}
      </h4>
    );
  });

  const learningOpps = learningOpportunities.map((lo, index) => {
    return (
      <h4 key={index} className={`tag ch-${lo.length} lo`}>
        {lo}
      </h4>
    );
  });

  return (
    <>
      <div className="item-card" onClick={handleClick}>
        <span className="topline">
          <h4>
            <a className="item-id" href={jiraLink}>
              #{id}
            </a>
          </h4>
          <img src={star === true ? starFilled : ""} alt="" className="star" />
        </span>
        <h2 className="item-title">{title}</h2>
        <span className="tag-container">
          <h4 className={`tag ch-${status.length} ${status}`}>{status}</h4>
          {allTags}
          {learningOpps}
        </span>
        {showInfo ? (
          <div className="expanded-info">
            <span className="item-info">
              <h3>Description:</h3>
              <p>{description}</p>
            </span>
            <a
              className="jira-link"
              href={jiraLink}
              target="_blank"
              rel="nofollower noreferrer noopener"
            >
              View this story in Jira
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Item;
