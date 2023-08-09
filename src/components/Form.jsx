import { getInputType } from "../util/getFunctions";
import { DEFAULT_INPUT_TYPE, DESCRIPTION } from "../util/constants";

function Form({ objectId, id, data, changeData }) {
  const type = getInputType[id] || DEFAULT_INPUT_TYPE;
  const isDescription = id === DESCRIPTION;
  const idName = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div className="form">
      <label>{idName}</label>
      {isDescription ? (
        <textarea
          value={data}
          className={objectId}
          id={id}
          onChange={changeData}
          type={type}
        ></textarea>
      ) : (
        <input
          value={data}
          className={objectId}
          id={id}
          onChange={changeData}
          type={type}
        ></input>
      )}
    </div>
  );
}

export default Form;
