import { useState } from "react";

function Section({ id, data, changeData }) {
  return (
    <div>
      <label>{id}</label>
      <input value={data} id={id} onChange={changeData}></input>
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
              id={object.id + "-" + key}
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
        {object.name}
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
    const idSplit = e.target.id.split("-");
    newList[idSplit[0]][idSplit[1]] = e.target.value;
    changeList(newList);
  };

  return (
    <>
      {data !== undefined &&
        Object.keys(data).map((key) => {
          if (key === "id" || key === "name" || key === "isShow") return null;
          if (key === "list") {
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
    </>
  );
}

function Content({ content, isActive, onClick, changeContent }) {
  const changeName = (e) => {
    let newContent = { ...content };
    newContent.name = e.target.value;
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
    <div>
      {!isActive && (
        <h2 id={content.id} onClick={onClick}>
          {content.name}
        </h2>
      )}
      {isActive && (
        <>
          <input value={content.name} id={content.id} onChange={changeName} />
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
