import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Styles from "./EditableField.module.scss";

const EditableField = ({ fieldName, value, setValue }) => {
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <FormControl className={Styles.field}>
      <InputLabel htmlFor={fieldName}>{fieldName}</InputLabel>
      <Input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      ></Input>
    </FormControl>
  );
};

export default EditableField;
