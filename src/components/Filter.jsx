/* eslint-disable react/prop-types */
import "./filter.css";
import "./item.css";
import ENUM from "../../enum";

function Filter({ filterByTag }) {

  const statusArray = Object.values(ENUM.status);
  const tagsArray = Object.values(ENUM.tags);
  const loArray = Object.values(ENUM.learningOpportunities);


  const allStatus = statusArray.map((status, index) => {
    return (
      <h4
        key={index}
        onClick={() => {
          filterByTag(status);
        }}
        className={`tag ch-${status.length} ${status}`}
      >
        {status}
      </h4>
    );
  });

  const allTags = tagsArray.map((tag, index) => {
    return (
      <h4
        key={index}
        onClick={() => {
          filterByTag(tag);
        }}
        className={`tag ch-${tag.length} ${tag}`}
      >
        {tag}
      </h4>
    );
  });

  const allLO = loArray.map((lo, index) => {
    return (
      <h4
      key={index}
      onClick={() => {
        filterByTag(lo);
      }}
        className={`tag ch-${lo.length} lo`}
      >
        {lo}
      </h4>
    );
  });

  return (
    <>
      <div className="filter-container">
        <h4
          onClick={() => {
            filterByTag("all");
          }}
          className="tag all-tag"
        >
          All
        </h4>
        {allStatus}
        {allTags}
        {allLO}
      </div>
    </>
  );
}

export default Filter;
