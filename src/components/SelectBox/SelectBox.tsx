import React from "react";
import "./style.css";


interface SelectProps {
  setNumOfItemPerPage: Function;
}
const SelectBox:React.FC<SelectProps> = ({setNumOfItemPerPage}) => {
  const handleChange = (num:string)=>{
    setNumOfItemPerPage(num);
  }
  return (
    <select
      name="cars"
      id="cars"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      <option value="10">10 Per page</option>
      <option value="20">20 Per page</option>
      <option value="50">50 Per page</option>
    </select>
  );
};
export default SelectBox;
