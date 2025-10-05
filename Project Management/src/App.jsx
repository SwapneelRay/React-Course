import { useState } from "react";
import NoProjectSelected from "./Components/NoProjectSelected";
import Project from "./Components/Project";
import Sidebar from "./Components/Sidebar";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  function startAddProjectHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function createProjectHandler(data) {
    setProjectState((prevState) => {
      const newProject = {
        ...data,
        id: Math.random(),
      };
      return {
        ...prevState,
        project: [...prevState.project, newProject],
      };
    });
  }

  let content;
console.log(projectState)
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={startAddProjectHandler} />;
  } else {
    if (projectState.selectedProjectId === null) {
      content = <Project  onSaveClick={createProjectHandler} />;
    }
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar project={projectState} onStartAddProject={startAddProjectHandler}></Sidebar>
      {content}
    </main>
  );
}

export default App;
