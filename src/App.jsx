import { useState, useEffect } from "react";
import { getContents } from "./util/contents.js";

import Categories from "./components/Categories.jsx";
import Cv from "./components/Cv.jsx";
import SpecificContent from "./components/SpecificContent.jsx";
import { getID } from "./util/getFunctions.js";

function App() {
  // GET FROM STORAGE
  const initialContents = JSON.parse(localStorage.getItem("contents")) || {
    0: getContents[0],
  };

  // STATES
  const [contents, setContents] = useState(initialContents);
  const [isCategoriesDisplay, setIsCategoriesDisplay] = useState(false);
  const [activeContent, setActiveContent] = useState("");

  // FUNCTIONS
  const showCategories = () => {
    setIsCategoriesDisplay(true);
  };

  const changeActiveContent = (e) => {
    setActiveContent(e.target.id);
  };

  const hideCategories = () => {
    setIsCategoriesDisplay(false);
  };

  const addContent = (e) => {
    const id = getID[e.target.id];
    setContents({
      ...contents,
      [id]: getContents[id],
    });
  };

  const deleteContent = (e) => {
    let newContents = { ...contents };
    const id = getID[e.target.id];
    delete newContents[id];
    setContents(newContents);
  };

  const changeContent = (newContent) => {
    const id = getID[newContent.id];
    setContents({ ...contents, [id]: newContent });
  };

  // LOAD TO STORAGE
  useEffect(() => {
    localStorage.setItem("contents", JSON.stringify(contents));
  }, [contents]);

  // RETURN
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

      <Cv contents={contents}></Cv>
    </div>
  );
}

export default App;
