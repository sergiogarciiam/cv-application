function List({ list }) {
  return list.map((object) => {
    return Object.keys(object).map((key) => {
      if (key === "id" || object.id === 0) return null;
      else if (key === "name") return <h4 key={key}>{object[key]}</h4>;
      else return <p key={key}>{object[key]}</p>;
    });
  });
}

function Element({ element }) {
  return Object.keys(element).map((key) => {
    if (key === "id" || key === "isShow") return null;
    else if (key === "title") return <h2 key={key}>{element[key]}</h2>;
    else if (key === "list") return <List key={key} list={element[key]}></List>;
    else return <p key={key}>{element[key]}</p>;
  });
}

function Cv({ contents }) {
  return (
    <div className="cv">
      {Object.keys(contents).map((key) => {
        if (contents[key].isShow)
          return <Element key={key} element={contents[key]}></Element>;
      })}
    </div>
  );
}

export default Cv;
