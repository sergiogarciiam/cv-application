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
        if (element[key] === "" || key === "id") return null;
        else if (key === "title")
          return (
            <h2 key={key} className={key}>
              {element[key]}
            </h2>
          );
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
          if (
            object[key] === "" ||
            key === "id" ||
            key === "link" ||
            object.id === 0
          )
            return null;
          else if (key === "name" && !object.hasOwnProperty("link"))
            return (
              <h4 key={key} className={key}>
                {object[key]}
              </h4>
            );
          else if (key === "name" && object.hasOwnProperty("link"))
            return (
              <>
                <a href={object.link} target="__blank">
                  {object[key]}
                </a>{" "}
                <br></br>
              </>
            );
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
