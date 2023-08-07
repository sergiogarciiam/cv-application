import FormList from "./FormList";
import Form from "./Form";
import Edit from "../assets/images/edit.svg";
import Trash from "../assets/images/trash.svg";

function SpecificContent({ content, isActive, showContent, changeContent }) {
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
    <>
      {!isActive && (
        <div id={content.id} className="specific-content" onClick={showContent}>
          <h2 id={content.id} onClick={showContent}>
            {content.title}
          </h2>
          <img id={content.id} src={Edit} onClick={showContent}></img>
          <img src={Trash}></img>
        </div>
      )}
      {isActive && (
        <div className="specific-content active">
          <div>
            <input
              value={content.title}
              id={content.id}
              onChange={changeTitle}
            />
            <img src={Trash}></img>
          </div>

          <ContentDetails
            data={content}
            changeData={changeData}
            changeList={changeList}
          />
        </div>
      )}
    </>
  );
}

function ContentDetails({ data, changeData, changeList }) {
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
              <FormList
                key={key}
                list={data[key]}
                addItem={addItem}
                updateList={updateList}
              />
            );
          } else {
            return (
              <Form
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

export default SpecificContent;
