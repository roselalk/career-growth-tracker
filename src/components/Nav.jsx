/* eslint-disable react/prop-types */
import "./nav.css";

function Nav() {

    return (
        <nav className="nav-container">
            <h2 className="active">ALL TASKS</h2>
            {/* Het idee is om hier een shortcut te hebben met open/doing/done stories, en dan die pagina's
            ook hun eigen uiterlijk/UX te geven. */}
            {/* <h2>OPEN</h2>
            <h2>DOING</h2>
            <h2>DONE</h2> */}
        </nav>
  );
}

export default Nav;
