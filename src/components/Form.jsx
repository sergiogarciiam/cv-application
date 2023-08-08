import { getInputType } from "../util/inputType";

function Form({ objectId, id, data, changeData }) {
  let type = getInputType[id];
  if (type === null) type = "text";

  let isDescription = id === "description";
  const idName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className="form">
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

export default Form;
