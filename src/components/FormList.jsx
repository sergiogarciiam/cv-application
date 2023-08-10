import { LINKS, PERSONAL } from "../util/constants";
import { useState } from "react";
import Form from "./Form";
import DeleteMenu from "./DeleteMenu";
import Trash from "../assets/images/trash.svg";
import Close from "../assets/images/close.svg";

function FormList({ dataID, list, addItem, updateList, deleteElementList }) {
  const listName =
    dataID === PERSONAL
      ? LINKS
      : dataID.charAt(0).toUpperCase() + dataID.slice(1);

  const [itemEdit, setItemEdit] = useState(null);

  const changeItemActive = (e) => {
    setItemEdit(e.target.getAttribute("data-id") || null);
  };

  return (
    <>
      <div className="forms-list">
        <p>{listName} List</p>
        {list.length > 1 &&
          list.map((object) =>
            object.id === 0 ? null : (
              <h3
                key={object.id}
                data-id={object.id}
                onClick={changeItemActive}
              >
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
              objectID={index}
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
  objectID,
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
    <div className="edit-list-item" key={object.id} data-id={object.id}>
      {Object.keys(object).map((key) => {
        if (key === "id") return null;
        return (
          <Form
            key={key}
            dataID={key}
            objectID={objectID}
            data={object[key]}
            changeData={updateList}
          />
        );
      })}
      <div className="edit-list-item-images">
        <img data-id={object.id} src={Trash} onClick={showDeleteMenu}></img>
        <img src={Close} onClick={changeItemActive}></img>
      </div>
      {isDeleteMenu && (
        <DeleteMenu
          dataID={object.id}
          deleteContent={deleteElementList}
          hideDeleteMenu={hideDeleteMenu}
        ></DeleteMenu>
      )}
    </div>
  );
}

export default FormList;
