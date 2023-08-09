import {
  EMPTY,
  GITHUB,
  ID,
  LINKEDIN,
  LIST,
  TITLE,
  WEBSITE,
} from "../util/constants";

const CVContainer = ({ contents, toggleCv, zoom = "" }) => {
  return (
    <div className={`cv ${zoom}`} onClick={toggleCv}>
      {Object.keys(contents).map((key) => (
        <CVSection key={key} name={key} element={contents[key]} />
      ))}
    </div>
  );
};

const CVSection = ({ name, element }) => {
  return (
    <div className={`section-${name}`}>
      {Object.keys(element).map((key) => {
        const value = element[key];

        if (value === EMPTY || key === ID) {
          return null;
        }

        if (key === TITLE) {
          return (
            <h2 key={key} className={`section-${key}`}>
              {value}
            </h2>
          );
        }

        if (key === WEBSITE || key === GITHUB || key === LINKEDIN) {
          return createLink(key, value);
        }

        if (key === LIST) {
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

const createLink = (key, element) => {
  const url =
    key === GITHUB
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
