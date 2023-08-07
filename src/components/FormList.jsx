import { useState } from "react";
import Form from "./Form";

function FormList({ list, addItem, updateList }) {
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

function ListItem({ object, itemEdit, changeItemActive, updateList }) {
  if (object.id == itemEdit) {
    return (
      <div key={object.id} id={object.id}>
        {Object.keys(object).map((key) => {
          if (key === "id") return null;
          return (
            <Form
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
        {object.name}
      </h3>
    );
  }
}

export default FormList;
