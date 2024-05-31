import React from "react";
import ProfilePicture from "../assets/image000.jpg";
import "../styles/Homepage.css";
import RepositoryComponent from "./Repositories";

/*About page component */

function Mainpage() {
  return (
    <main>
      <section className="main_page">
        <header>
          <div>
            <img
              src={ProfilePicture}
              alt="Onihana Fanye"
              className="my_picture"
            />
          </div>
          <div>
            <h1>Fanye's Repositories</h1>
            <p>Altschool Second Semester's Examination.</p>
          </div>
        </header>
        <section className="main_section">
          <div className="page_description">
            <p className="description">
              Hi!. My name is Onihana Fanye. I am a student at Altschool, School
              of Frontend Engineering.This is my examination project for the
              second Semester. It includes a page showing a list of all my Github
              repositories with pagination included.
            </p>
          </div>
          <RepositoryComponent />
        </section>
      </section>
    </main>
  );
}

export default Mainpage;
