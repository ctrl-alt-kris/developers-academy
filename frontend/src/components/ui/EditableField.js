const EditableField = ({ fieldName, value, setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <label htmlFor={fieldName}>{fieldName}</label>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={value}
      ></input>
    </>
  );
};

export default EditableField;
