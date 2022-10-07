import React from "react"
import Course from "./components/course"
import "./App.css"
import witCrest from "C:/Users/Corma/Desktop/course-app/src/components/wit_crest.png"

const App = () => {
   // Substitute your module names here.
   const modules = [
    {
        name: "Web Dev",
        noLectures: 1,
        noPracticals: 2
    },
    {
        name: "Programming",
        noLectures: 2,
        noPracticals: 3
    },
      {
        name: "Database Systems",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "DevOps",
        noLectures: 2,
        noPracticals: 2
    },
    {
        name: "Enterprise Web Dev",
        noLectures: 2,
        noPracticals: 3
    }
   ];
  const name = "HDip Computer Systems" 

  return (
    <>
      <header className="App-header">
        <img className="center" src={witCrest} alt="logo" />
      </header>
      <div className="course">
        <Course title={name} modules={modules} />
      </div>
    </>
  );
};

export default App