function Button({ name, onClick, id }) {
  return (
    <button id={id} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
