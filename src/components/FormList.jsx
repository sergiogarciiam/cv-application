import { useState } from "react";
import Form from "./Form";

import Trash from "../assets/images/trash.svg";
import Close from "../assets/images/close.svg";
import DeleteMenu from "./DeleteMenu";

function FormList({ list, addItem, updateList, deleteElementList }) {
  const [itemEdit, setItemEdit] = useState("");

  const changeItemActive = (e) => {
    setItemEdit(e.target.id);
  };

  return (
    <div className="form-list">
      {list.length > 1 &&
        list.map((object) =>
          object.id === 0 ? null : (
            <ListItem
              key={object.id}
              object={object}
              itemEdit={itemEdit}
              changeItemActive={changeItemActive}
              updateList={updateList}
              deleteElementList={deleteElementList}
            />
          )
        )}
      <button onClick={addItem}>Add item</button>
    </div>
  );
}

function ListItem({
  object,
  itemEdit,
  changeItemActive,
  updateList,
  deleteElementList,
}) {
  const [isDeleteMenu, setIsDeleteMenu] = useState(false);

  const showDeleteMenu = () => {
    setIsDeleteMenu(true);
  };

  const hideMenu = () => {
    setIsDeleteMenu(false);
  };

  if (object.id == itemEdit) {
    return (
      <div className="list-item" key={object.id} id={object.id}>
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
        <div>
          <img id={object.id} src={Trash} onClick={showDeleteMenu}></img>
          <img src={Close} onClick={changeItemActive}></img>
        </div>
        {isDeleteMenu && (
          <DeleteMenu
            id={object.id}
            deleteContent={deleteElementList}
            hideMenu={hideMenu}
          ></DeleteMenu>
        )}
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
