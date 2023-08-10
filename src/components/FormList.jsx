import { useState } from "react";
import { LINKS, PERSONAL } from "../util/constants";
import { getDataID } from "../util/getFunctions";
import Form from "./Form";
import DeleteMenu from "./DeleteMenu";
import Trash from "../assets/images/trash.svg";
import Close from "../assets/images/close.svg";

function FormList({ dataID, list, addItem, updateList, deleteElementList }) {
  // VARIABLES
  const listName =
    dataID === PERSONAL
      ? LINKS
      : dataID.charAt(0).toUpperCase() + dataID.slice(1);

  const [itemEdit, setItemEdit] = useState(null);

  // FUNCTIONS
  const changeItemActive = (e) => {
    setItemEdit(getDataID(e) || null);
  };

  // RENDER
  return (
    <>
      <div className="forms-list">
        <p>{listName} List</p>
        {list.length > 1 &&
          list.map((listItem) =>
            listItem.id === 0 ? null : (
              <h3
                key={listItem.id}
                data-id={listItem.id}
                onClick={changeItemActive}
              >
                {listItem.name}
              </h3>
            )
          )}
        <button onClick={addItem}>Add item</button>
      </div>
      {list.length > 1 &&
        list.map((listItem, index) =>
          listItem.id == itemEdit ? (
            <EditListItem
              key={listItem.id}
              listItemIndex={index}
              listItem={listItem}
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
  listItemIndex,
  listItem,
  changeItemActive,
  updateList,
  deleteElementList,
}) {
  // STATES
  const [isDeleteMenu, setIsDeleteMenu] = useState(false);

  // FUNCTIONS
  const showDeleteMenu = () => {
    setIsDeleteMenu(true);
  };

  const hideDeleteMenu = () => {
    setIsDeleteMenu(false);
  };

  // RENDER
  return (
    <div className="edit-list-item" key={listItem.id} data-id={listItem.id}>
      {Object.keys(listItem).map((key) => {
        if (key === "id") return null;
        return (
          <Form
            key={key}
            dataID={key}
            listItemIndex={listItemIndex}
            data={listItem[key]}
            changeData={updateList}
          />
        );
      })}
      <div className="edit-list-item-images">
        <img data-id={listItem.id} src={Trash} onClick={showDeleteMenu}></img>
        <img src={Close} onClick={changeItemActive}></img>
      </div>
      {isDeleteMenu && (
        <DeleteMenu
          dataID={listItem.id}
          listItemIndex={listItemIndex}
          deleteContent={deleteElementList}
          hideDeleteMenu={hideDeleteMenu}
        ></DeleteMenu>
      )}
    </div>
  );
}

export default FormList;
