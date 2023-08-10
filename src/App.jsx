import { useState, useEffect } from "react";
import { getContents } from "./util/contents.js";
import { getDataID, getID } from "./util/getFunctions.js";
import Categories from "./components/Categories.jsx";
import Cv from "./components/Cv.jsx";
import SpecificContent from "./components/SpecificContent.jsx";

function App() {
  // GET FROM STORAGE
  const initialContents = JSON.parse(localStorage.getItem("contents")) || {
    0: getContents[0],
  };

  // STATES
  const [isCvZoom, setIsCvZoom] = useState(false);
  const [contents, setContents] = useState(initialContents);
  const [isCategoriesDisplay, setIsCategoriesDisplay] = useState(false);
  const [activeContent, setActiveContent] = useState("");

  // FUNCTIONS
  const toggleCv = () => {
    setIsCvZoom(!isCvZoom);
  };

  const addContent = (e) => {
    const id = getID[getDataID(e)];
    setContents({
      ...contents,
      [id]: getContents[id],
    });
  };

  const deleteContent = (e) => {
    let newContents = { ...contents };
    const id = getID[getDataID(e)];
    delete newContents[id];
    setContents(newContents);
  };

  const changeContent = (newContent) => {
    const id = getID[newContent.id];
    setContents({ ...contents, [id]: newContent });
  };

  const showCategories = () => {
    setIsCategoriesDisplay(true);
  };

  const hideCategories = () => {
    setIsCategoriesDisplay(false);
  };

  const changeActiveContent = (e) => {
    setActiveContent(getDataID(e));
  };

  // LOAD TO STORAGE
  useEffect(() => {
    localStorage.setItem("contents", JSON.stringify(contents));
  }, [contents]);

  // RENDER
  return (
    <div className="page">
      <div className="contents-selection">
        {Object.keys(contents).map((key) => {
          return (
            <SpecificContent
              key={contents[key].id}
              content={contents[key]}
              isActive={contents[key].id === activeContent}
              changeActiveContent={changeActiveContent}
              changeContent={changeContent}
              deleteContent={deleteContent}
            />
          );
        })}

        <button onClick={showCategories}>+ Add content</button>
      </div>

      {isCategoriesDisplay && (
        <Categories
          contents={contents}
          hideCategories={hideCategories}
          addContent={addContent}
        />
      )}

      <Cv contents={contents} toggleCv={toggleCv}></Cv>

      {isCvZoom && (
        <>
          <div className="blocker"></div>
          <Cv contents={contents} toggleCv={toggleCv} zoom="zoom"></Cv>
        </>
      )}
    </div>
  );
}

export default App;
