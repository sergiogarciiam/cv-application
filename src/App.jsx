import { useState } from "react";
import { getContents } from "./util/contents.js";

import Categories from "./components/Categories.jsx";
import Cv from "./components/Cv.jsx";
import SpecificContent from "./components/SpecificContent.jsx";

function App() {
  const [contents, setContents] = useState({
    personal: getContents["personal"],
  });
  const [isCategoriesDisplay, setIsCategoriesDisplay] = useState(false);
  const [activeContent, setActiveContent] = useState("");

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
    setContents({
      ...contents,
      [e.target.id]: getContents[e.target.id],
    });
  };

  const deleteContent = (e) => {
    let newContents = { ...contents };
    delete newContents[e.target.id];
    setContents(newContents);
  };

  const changeContent = (newContent) => {
    setContents({ ...contents, [newContent.id]: newContent });
  };

  return (
    <div className="page">
      <div className="contents-selection">
        {Object.keys(contents).map((key) => {
          return (
            <SpecificContent
              key={contents[key].id}
              content={contents[key]}
              isActive={key === activeContent}
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
