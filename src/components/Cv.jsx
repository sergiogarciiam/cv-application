function Cv({ contents }) {
  return (
    <div className="cv">
      {Object.keys(contents).map((key) => (
        <Section key={key} name={key} element={contents[key]} />
      ))}
    </div>
  );
}

function Section({ name, element }) {
  return (
    <div className={`section-${name}`}>
      {Object.keys(element).map((key) => {
        const value = element[key];
        if (value === "" || key === "id") {
          return null;
        } else if (key === "title") {
          return (
            <h2 key={key} className={`section-${key}`}>
              {value}
            </h2>
          );
        } else if (key === "list") {
          return <SectionList key={key} list={value} />;
        } else {
          return (
            <p key={key} className={`section-${key}`}>
              {value}
            </p>
          );
        }
      })}
    </div>
  );
}

function SectionList({ list }) {
  return (
    <div className="list">
      {list.map((object, index) => (
        <SectionListItem key={object.id || index} object={object} />
      ))}
    </div>
  );
}

function SectionListItem({ object }) {
  const { id, link, name, ...rest } = object;

  if (id === 0 || link === "") {
    return null;
  }

  const isLinked = link && name;

  return (
    <div className="list-item">
      {isLinked ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ) : (
        <h4>{name}</h4>
      )}
      {Object.keys(rest).map((key) => (
        <p key={key} className={`list-item-${key}`}>
          {rest[key]}
        </p>
      ))}
    </div>
  );
}

export default Cv;
