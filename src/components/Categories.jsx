import { getContents } from "../util/contents";

function Categories({ contents, onClick }) {
  return (
    <div className="categories">
      {Object.keys(getContents).map((key) => {
        if (!contents.hasOwnProperty(key))
          return (
            <button
              key={getContents[key].id}
              id={getContents[key].id}
              onClick={onClick}
            >
              {getContents[key].title}
            </button>
          );
      })}
    </div>
  );
}

export default Categories;
