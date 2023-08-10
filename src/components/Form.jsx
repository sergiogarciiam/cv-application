import { getInputType } from "../util/getFunctions";
import { DEFAULT_INPUT_TYPE, DESCRIPTION } from "../util/constants";

function Form({ dataID, objectID = "", data, changeData }) {
  const type = getInputType[dataID] || DEFAULT_INPUT_TYPE;
  const isDescription = dataID === DESCRIPTION;
  const idName = dataID.charAt(0).toUpperCase() + dataID.slice(1);

  return (
    <div className="form">
      <label>{idName}</label>
      {isDescription ? (
        <textarea
          value={data}
          type={type}
          data-object-id={objectID}
          data-id={dataID}
          onChange={changeData}
        ></textarea>
      ) : (
        <input
          value={data}
          type={type}
          data-object-id={objectID}
          data-id={dataID}
          onChange={changeData}
        ></input>
      )}
    </div>
  );
}

export default Form;
