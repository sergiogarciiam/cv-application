import { getContents } from "../util/contents";

function Categories({ contents, hideCategories, addContent }) {
  const addNewContent = (e) => {
    hideCategories();
    addContent(e);
  };

  return (
    <div className="categories">
      {Object.keys(getContents).map((key) => {
        if (!contents.hasOwnProperty(key))
          return (
            <button
              key={getContents[key].id}
              id={getContents[key].id}
              onClick={addNewContent}
            >
              {getContents[key].title}
            </button>
          );
      })}
      <button onClick={hideCategories}>Go Back</button>
    </div>
  );
}

export default Categories;
