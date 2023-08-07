import { useState } from "react";

const getInputType = {
  start: "date",
  end: "date",
  phone: "number",
  link: "url",
};

function Section({ objectId, id, data, changeData }) {
  let type = getInputType[id];
  if (type === null) type = "text";

  let isDescription = id === "description";

  let idName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className="section">
      <label>{idName}</label>
      {!isDescription && (
        <input
          value={data}
          className={objectId}
          id={id}
          onChange={changeData}
          type={type}
        ></input>
      )}
      {isDescription && (
        <textarea
          value={data}
          className={objectId}
          id={id}
          onChange={changeData}
          type={type}
        ></textarea>
      )}
    </div>
  );
}

function ListItem({ object, itemEdit, changeItemActive, updateList }) {
  if (object.id == itemEdit) {
    return (
      <div key={object.id} id={object.id}>
        {Object.keys(object).map((key) => {
          if (key === "id") return null;
          return (
            <Section
              key={key}
              objectId={object.id}
              id={key}
              data={object[key]}
              changeData={updateList}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <h3 key={object.id} id={object.id} onClick={changeItemActive}>
        {object.title}
      </h3>
    );
  }
}

function List({ list, addItem, updateList }) {
  const [itemEdit, setItemEdit] = useState("");

  const changeItemActive = (e) => {
    setItemEdit(e.target.id);
  };

  return (
    <>
      {list.length > 1 &&
        list.map((object) =>
          object.id === 0 ? null : (
            <ListItem
              key={object.id}
              object={object}
              itemEdit={itemEdit}
              changeItemActive={changeItemActive}
              updateList={updateList}
            />
          )
        )}
      <button onClick={addItem}>Add item</button>
    </>
  );
}

function Details({ data, changeData, changeList }) {
  const addItem = () => {
    const newList = [...data.list];
    newList.push({
      ...newList[0],
      id: newList.length,
    });

    changeList(newList);
  };

  const updateList = (e) => {
    const newList = [...data.list];
    newList[e.target.classList[0]][e.target.id] = e.target.value;
    changeList(newList);
  };

  return (
    <div className="details">
      {data !== undefined &&
        Object.keys(data).map((key) => {
          if (key === "id" || key === "title" || key === "isShow") return null;
          else if (key === "list") {
            return (
              <List
                key={key}
                list={data[key]}
                addItem={addItem}
                updateList={updateList}
              />
            );
          } else {
            return (
              <Section
                key={key}
                id={key}
                data={data[key]}
                changeData={changeData}
              />
            );
          }
        })}
    </div>
  );
}

function Content({ content, isActive, onClick, changeContent }) {
  const changeTitle = (e) => {
    let newContent = { ...content };
    newContent.title = e.target.value;
    changeContent(newContent);
  };

  const changeData = (e) => {
    let newContent = { ...content };
    newContent[e.target.id] = e.target.value;
    changeContent(newContent);
  };

  const changeList = (newList) => {
    let newContent = { ...content };
    newContent.list = newList;
    changeContent(newContent);
  };

  return (
    <div className="specific-content">
      {!isActive && (
        <h2 id={content.id} onClick={onClick}>
          {content.title}
        </h2>
      )}
      {isActive && (
        <>
          <input value={content.title} id={content.id} onChange={changeTitle} />
          <Details
            data={content}
            changeData={changeData}
            changeList={changeList}
          />
        </>
      )}
    </div>
  );
}

export default Content;
