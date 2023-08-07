function Categories({ contents, onClick }) {
  return (
    <div className="categories">
      {Object.keys(contents).map((key) => {
        if (!contents[key].isShow) {
          return (
            <button
              key={contents[key].id}
              id={contents[key].id}
              onClick={onClick}
            >
              {contents[key].title}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Categories;
