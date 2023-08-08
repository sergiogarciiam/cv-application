function DeleteMenu({ id, deleteContent, hideDeleteMenu }) {
  return (
    <div className="delete-menu">
      <p>Are you sure?</p>
      <button id={id} onClick={deleteContent}>
        Yes
      </button>
      <button onClick={hideDeleteMenu}>No</button>
    </div>
  );
}

export default DeleteMenu;
