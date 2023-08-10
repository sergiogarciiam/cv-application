import { ID, LIST, TITLE } from "../util/constants";
import { useState } from "react";
import FormList from "./FormList";
import Form from "./Form";
import DeleteMenu from "./DeleteMenu";
import Trash from "../assets/images/trash.svg";
import Close from "../assets/images/close.svg";
import { getDataID, getDataItemIndex } from "../util/getFunctions";

function SpecificContent({
  content,
  isActive,
  changeActiveContent,
  changeContent,
  deleteContent,
}) {
  const [isDeleteMenu, setIsDeleteMenu] = useState(false);

  const changeTitle = (e) => {
    let newContent = { ...content };
    newContent.title = e.target.value;
    changeContent(newContent);
  };

  const changeData = (e) => {
    let newContent = { ...content };
    newContent[getDataID(e)] = e.target.value;
    changeContent(newContent);
  };

  const changeList = (newList) => {
    let newContent = { ...content };
    newContent.list = newList;
    changeContent(newContent);
  };

  const showDeleteMenu = () => {
    setIsDeleteMenu(true);
  };

  const hideDeleteMenu = () => {
    setIsDeleteMenu(false);
  };

  return (
    <>
      {!isActive && (
        <div
          data-id={content.id}
          className="specific-content hide"
          onClick={changeActiveContent}
        >
          <h2 data-id={content.id} onClick={changeActiveContent}>
            {content.title}
          </h2>
        </div>
      )}
      {isActive && (
        <div className="specific-content">
          <div className="specific-content-title-container">
            <input
              data-id={content.id}
              value={content.title}
              onChange={changeTitle}
            />
            <img
              data-id={content.id}
              src={Trash}
              onClick={showDeleteMenu}
            ></img>
            <img src={Close} onClick={changeActiveContent}></img>
          </div>

          <ContentDetails
            data={content}
            changeData={changeData}
            changeList={changeList}
          />

          {isDeleteMenu && (
            <DeleteMenu
              dataID={content.id}
              deleteContent={deleteContent}
              hideDeleteMenu={hideDeleteMenu}
            ></DeleteMenu>
          )}
        </div>
      )}
    </>
  );
}

function ContentDetails({ data, changeData, changeList }) {
  const addItem = () => {
    const newList = [...data.list];
    const maxId = Math.max(...newList.map((item) => item.id), 0);

    const newItem = {
      ...newList[0],
      id: maxId + 1,
    };

    newList.push(newItem);
    changeList(newList);
  };

  const updateList = (e) => {
    const newList = [...data.list];
    newList[getDataItemIndex(e)][getDataID(e)] = e.target.value;
    changeList(newList);
  };

  const deleteElementList = (e) => {
    const newList = [...data.list];
    newList.splice(getDataItemIndex(e), 1);
    changeList(newList);
  };

  return (
    <div className="specific-content-details-container">
      {data !== undefined &&
        Object.keys(data).map((key) => {
          if (key === ID || key === TITLE) return null;
          else if (key === LIST) {
            return (
              <FormList
                key={key}
                dataID={data.id}
                list={data[key]}
                addItem={addItem}
                updateList={updateList}
                deleteElementList={deleteElementList}
              />
            );
          } else {
            return (
              <Form
                key={key}
                dataID={key}
                data={data[key]}
                changeData={changeData}
              />
            );
          }
        })}
    </div>
  );
}

export default SpecificContent;
