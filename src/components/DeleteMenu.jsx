function DeleteMenu({ id, deleteContent, hideMenu }) {
  return (
    <div className="delete-menu">
      <p>Are you sure?</p>
      <button id={id} onClick={deleteContent}>
        Yes
      </button>
      <button onClick={hideMenu}>No</button>
    </div>
  );
}

export default DeleteMenu;
