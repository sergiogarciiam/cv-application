import { useState } from "react";

import Button from "./components/Button.jsx";
import Categories from "./components/Categories.jsx";
import Content from "./components/Content.jsx";

import { initialContent } from "./content.js";
import Cv from "./components/Cv.jsx";

function App() {
  const [contents, setContentList] = useState(initialContent);
  const [isCategoriesDisplay, setIsCategoriesDisplay] = useState(false);
  const [activeContent, setActiveContent] = useState("");

  const showCategories = () => {
    setIsCategoriesDisplay(true);
  };

  const changeActiveContent = (e) => {
    setActiveContent(e.target.id);
  };

  const hideCategories = (e) => {
    setIsCategoriesDisplay(false);
    setContentList({
      ...contents,
      [e.target.id]: { ...contents[e.target.id], isShow: true },
    });
  };

  const changeContent = (newContent) => {
    setContentList({ ...contents, [newContent.id]: newContent });
  };

  return (
    <div className="page">
      <div className="contents">
        {Object.keys(contents).map((key) => {
          if (contents[key].isShow) {
            return (
              <Content
                key={contents[key].id}
                content={contents[key]}
                isActive={key === activeContent}
                onClick={changeActiveContent}
                changeContent={changeContent}
              />
            );
          }
        })}

        <Button name="+ Add content" onClick={showCategories}></Button>
      </div>

      {isCategoriesDisplay && (
        <Categories contents={contents} onClick={hideCategories} />
      )}

      <Cv contents={contents}></Cv>
    </div>
  );
}

export default App;
