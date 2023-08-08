import { useState } from "react";
import Form from "./Form";

import Trash from "../assets/images/trash.svg";
import Close from "../assets/images/close.svg";
import DeleteMenu from "./DeleteMenu";

function FormList({ dataId, list, addItem, updateList, deleteElementList }) {
  const idName =
    dataId === "personal"
      ? "Links"
      : dataId.charAt(0).toUpperCase() + dataId.slice(1);

  const [itemEdit, setItemEdit] = useState(null);

  const changeItemActive = (e) => {
    setItemEdit(e.target.id || null);
  };

  return (
    <>
      <div className="forms-list">
        <p>{idName} List</p>
        {list.length > 1 &&
          list.map((object) =>
            object.id === 0 ? null : (
              <h3 key={object.id} id={object.id} onClick={changeItemActive}>
                {object.name}
              </h3>
            )
          )}
        <button onClick={addItem}>Add item</button>
      </div>
      {list.length > 1 &&
        list.map((object, index) =>
          object.id == itemEdit ? (
            <EditListItem
              key={object.id}
              objectId={index}
              object={object}
              changeItemActive={changeItemActive}
              updateList={updateList}
              deleteElementList={deleteElementList}
            />
          ) : null
        )}
    </>
  );
}

function EditListItem({
  object,
  objectId,
  changeItemActive,
  updateList,
  deleteElementList,
}) {
  const [isDeleteMenu, setIsDeleteMenu] = useState(false);

  const showDeleteMenu = () => {
    setIsDeleteMenu(true);
  };

  const hideDeleteMenu = () => {
    setIsDeleteMenu(false);
  };

  return (
    <div className="edit-list-item" key={object.id} id={object.id}>
      {Object.keys(object).map((key) => {
        if (key === "id") return null;
        return (
          <Form
            key={key}
            objectId={objectId}
            id={key}
            data={object[key]}
            changeData={updateList}
          />
        );
      })}
      <div className="edit-list-item-images">
        <img id={object.id} src={Trash} onClick={showDeleteMenu}></img>
        <img src={Close} onClick={changeItemActive}></img>
      </div>
      {isDeleteMenu && (
        <DeleteMenu
          id={object.id}
          deleteContent={deleteElementList}
          hideDeleteMenu={hideDeleteMenu}
        ></DeleteMenu>
      )}
    </div>
  );
}

export default FormList;
