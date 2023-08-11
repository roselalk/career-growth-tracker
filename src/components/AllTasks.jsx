/* eslint-disable react/prop-types */
import "./all-tasks.css";
import "./item.css";
import Item from "./Item";
import data from "../../items.js";
import Filter from "./Filter";
import { useMemo, useState } from "react";
import arrowUp from "../assets/arrow-white.png";
import arrowDown from "../assets/arrow-white.png";

function AllTasks() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortDirection, setSortDirection] = useState("ascending");

  function handleClick() {
    setShowFilter(!showFilter);
  }

  function filterByTag(searchTag) {
    setFilter(searchTag);
    setShowFilter(false);
  }


  const tasks = useMemo(() => {
    const filteredItems = data.filter((item) => {
      if (filter === "" || filter === "all") return data;

      if (
        (filter === "star" && item.star === true) ||
        item.status.includes(filter) ||
        item.tags.includes(filter) ||
        item.learningOpportunities.includes(filter)
      ) {
        return item;
      }
    });
    return filteredItems.sort(({ id: a }, { id: b }) => a - b);
  }, [filter]);

  function sortTasks() {
    if (sortDirection === "ascending") {
      tasks.sort(({ id: a }, { id: b }) => b - a);
    } else {
      tasks.sort(({ id: a }, { id: b }) => a - b);
    }
    setSortDirection(
      sortDirection === "ascending" ? "descending" : "ascending"
    );
  }

  return (
    <main className="page-container">
      <span className="title-container">
        <h1>ALL TASKS</h1>
        <h4 onClick={handleClick} className="tag filter-tag">
          Filter
        </h4>
        {showFilter && <Filter filterByTag={filterByTag} />}
        <span onClick={sortTasks} className="sorting-icon">
          <img src={arrowUp} alt="" className="arrow-up" />
          <img src={arrowDown} alt="" className="arrow-down" />
        </span>
      </span>
      {tasks.length === 0 ? (
        <h3>Er zijn nog geen stories met deze tag!</h3>
      ) : (
        tasks.map((item) => {
          return (
            <Item
              key={item.id}
              firstInArray={item.id === tasks[0].id}
              id={item.id}
              title={item.title}
              status={item.status}
              star={item.star}
              description={item.description}
              learningOpportunities={item.learningOpportunities}
              tags={item.tags}
              jiraLink={item.jiraLink}
            />
          );
        })
      )}
    </main>
  );
}

export default AllTasks;
