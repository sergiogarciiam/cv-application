function Cv({ contents }) {
  return (
    <div className="cv">
      {Object.keys(contents).map((key) => {
        return <Section key={key} element={contents[key]}></Section>;
      })}
    </div>
  );
}

function Section({ element }) {
  return Object.keys(element).map((key) => {
    if (key === "id") return null;
    else if (key === "title")
      return (
        <h2 className="section-title" key={key}>
          {element[key]}
        </h2>
      );
    else if (element[key] === "") return null;
    else if (key === "list")
      return <SectionList key={key} list={element[key]}></SectionList>;
    else return <p key={key}>{element[key]}</p>;
  });
}

function SectionList({ list }) {
  return list.map((object) => {
    return Object.keys(object).map((key) => {
      if (key === "id" || object.id === 0) return null;
      else if (key === "name") return <h4 key={key}>{object[key]}</h4>;
      else if (object[key] === "") return null;
      else return <p key={key}>{object[key]}</p>;
    });
  });
}

export default Cv;
