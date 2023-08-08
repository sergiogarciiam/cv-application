function Cv({ contents }) {
  return (
    <div className="cv">
      {Object.keys(contents).map((key) => {
        return <Section key={key} name={key} element={contents[key]}></Section>;
      })}
    </div>
  );
}

function Section({ name, element }) {
  return (
    <div className={name}>
      {Object.keys(element).map((key) => {
        if (key === "id") return null;
        else if (key === "title")
          return (
            <h2 key={key} className={key}>
              {element[key]}
            </h2>
          );
        else if (element[key] === "") return null;
        else if (key === "list")
          return <SectionList key={key} list={element[key]}></SectionList>;
        else
          return (
            <p key={key} className={key}>
              {element[key]}
            </p>
          );
      })}
    </div>
  );
}

function SectionList({ list }) {
  return (
    <div className="list">
      {list.map((object) => {
        return Object.keys(object).map((key) => {
          if (key === "id" || object.id === 0) return null;
          else if (key === "name")
            return (
              <h4 key={key} className={key}>
                {object[key]}
              </h4>
            );
          else if (object[key] === "") return null;
          else
            return (
              <p key={key} className={key}>
                {object[key]}
              </p>
            );
        });
      })}{" "}
    </div>
  );
}

export default Cv;
