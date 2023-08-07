import { useState } from "react";
import { initialContent } from "./util/content.js";

import Categories from "./components/Categories.jsx";
import Cv from "./components/Cv.jsx";
import SpecificContent from "./components/SpecificContent.jsx";

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
              <SpecificContent
                key={contents[key].id}
                content={contents[key]}
                isActive={key === activeContent}
                showContent={changeActiveContent}
                changeContent={changeContent}
              />
            );
          }
        })}

        <button onClick={showCategories}>+ Add content</button>
      </div>

      {isCategoriesDisplay && (
        <Categories contents={contents} onClick={hideCategories} />
      )}

      <Cv contents={contents}></Cv>
    </div>
  );
}

export default App;
