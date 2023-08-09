const CVSection = ({ name, element }) => {
  return (
    <div className={`section-${name}`}>
      {Object.keys(element).map((key) => {
        const value = element[key];

        if (value === "" || key === "id") {
          return null;
        }

        if (key === "title") {
          return (
            <h2 key={key} className={`section-${key}`}>
              {value}
            </h2>
          );
        }

        if (key === "website" || key === "github" || key === "linkedin") {
          return createLink(key, value);
        }

        if (key === "list") {
          return <SectionList key={key} list={value} />;
        }

        return (
          <p key={key} className={`section-${key}`}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

const SectionList = ({ list }) => {
  return (
    <>
      {list.map((object, index) => (
        <SectionListItem key={object.id || index} object={object} />
      ))}
    </>
  );
};

const SectionListItem = ({ object }) => {
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
        <p className="list-item-name">{name}</p>
      )}
      {Object.keys(rest).map((key) => (
        <p key={key} className={`list-item-${key}`}>
          {rest[key]}
        </p>
      ))}
    </div>
  );
};

const CVContainer = ({ contents }) => {
  return (
    <div className="cv">
      {Object.keys(contents).map((key) => (
        <CVSection key={key} name={key} element={contents[key]} />
      ))}
    </div>
  );
};

// Utility function to create anchor elements
const createLink = (key, element) => {
  const url =
    key === "github"
      ? `https://${key}.com/${element}`
      : `https://${key}.com/in/${element}`;
  return (
    <a
      key={key}
      className={`section-${key}`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {element}
    </a>
  );
};

export default CVContainer;
