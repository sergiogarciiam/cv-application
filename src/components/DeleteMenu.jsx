function DeleteMenu({ dataID, deleteContent, hideDeleteMenu }) {
  return (
    <div className="delete-menu">
      <p>Are you sure?</p>
      <button data-id={dataID} onClick={deleteContent}>
        Yes
      </button>
      <button onClick={hideDeleteMenu}>No</button>
    </div>
  );
}

export default DeleteMenu;
