/* eslint-disable react/prop-types */
import "./all-tasks.css";
import "./dashboard.css";
import data from "../../items.js";
import { useEffect, useState } from "react";
import heroImg from "../assets/woman-waving.jpeg";
import TasksCompletedCard from "./TasksCompletedCard";
import NoTasksCard from "./NoTasksCard";

function Dashboard() {
  const [doingDoneStories, setDoingDoneStories] = useState(false);
  const [doneTasks, setDoneTasks] = useState(0);

  useEffect(() => {
    checkIfDoingDoneTasks();
    countDoneTasks();
  });

  function countDoneTasks() {
    let count = 0;
    data.map((item) => {
      if (item.status === "done") {
        count += 1;
      }
    });
    setDoneTasks(count);
  }

  function checkIfDoingDoneTasks() {
    data.map((item) => {
      if (item.status === "doing" || item.status === "done") {
        setDoingDoneStories(true);
        return;
      }
    });
  }

  console.log(doingDoneStories);
  console.log(doneTasks);

  return (
    <main className="dashboard-container">
      <hgroup>
        <h2>Hi, Rose!</h2>

        <img src={heroImg} alt="" />

        {doingDoneStories ? (
          <TasksCompletedCard doneTasks={doneTasks} />
        ) : (
          <NoTasksCard />
        )}
      </hgroup>

      {/* <section className="most-practiced-skills-section">
        <p>Your most practiced skills are</p>
        <h4 className={`tag ch lo`}>React</h4>
        <h4 className={`tag ch lo`}>refactoring</h4>
        <h4 className={`tag ch lo`}>CSS</h4>
        <h4 className={`tag ch lo`}>legacy</h4>
      </section>

      <section className="card activity-card"></section> */}
    </main>
  );
}

export default Dashboard;
