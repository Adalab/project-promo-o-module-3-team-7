function InputString(props) {
  const handleChangeInput = (ev) => {
    props.handleInput(ev.currentTarget.name, ev.currentTarget.value);
  };
  return (
    <>
      <label className="label" htmlFor="name">
        Nombre completo
      </label>
      <input
        minLength="2"
        maxLength="20"
        className="contact__form--name js-input"
        placeholder="Ej: Sally Jill"
        id={props.name}
        type="text"
        name={props.name}
        required
        onChange={handleChangeInput}
        value={props.value}
      />
    </>
  );
}

export default InputString;
