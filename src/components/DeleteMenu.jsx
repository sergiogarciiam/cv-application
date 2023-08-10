function DeleteMenu({
  dataID,
  listItemIndex = "",
  deleteContent,
  hideDeleteMenu,
}) {
  return (
    <div className="delete-menu">
      <p>Are you sure?</p>
      <button
        data-id={dataID}
        data-item-index={listItemIndex}
        onClick={deleteContent}
      >
        Yes
      </button>
      <button onClick={hideDeleteMenu}>No</button>
    </div>
  );
}

export default DeleteMenu;
