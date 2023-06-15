import React, {useState} from "react";
import "./DropDownList.css";


const SelectComponent = ({
    options,
    placeholder = "",
    onChange,
    selectedKay,
    open,
    setOpen,
}) => {

    const [inputValue, setInputValue] = useState("")
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onItemSelected = (option) => {
        onChange !== undefined && onChange(option.key);
        onChange !== undefined && setInputValue(option.value);
        setOpen(false);
    };

    const onInputClick = () => {
        setOpen((prevValue) => !prevValue);
    };

    return (<div className="dropdwon-container"
            style= {{width: "250px",
                 position: "relative",}}>
        <div className="input-container" onClick={onInputClick} >
            <input
                type="text"
                value={inputValue}
                placeholder={placeholder}
                onChange={onInputChange}
                style={{
                    width: '400px',
                    borderWidth: "1px",
                    height: "40px",
                    paddingLeft: "15%",
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    border: "transparent",
                    color: 'rgb(234,216,205)',
                    fontSize: '20px',
                }}
            />

            <div className="input-arrow-container">
                <i className="input-arrow"/>
            </div>
        </div>
        <div className={`dropdown ${open ? "visible" : ""}`}>
            {options
                .filter((item) => {
                    const  searchItem = inputValue.toLocaleLowerCase();
                    const v = item.value.toLocaleLowerCase();

                    if (!searchItem) return true;

                    return v.startsWith(searchItem);
                })
                .map((opt) => {
            return (
                <div
                    key={opt.key}
                    onClick={() => onItemSelected(opt)}
                    className="option">
                    {opt.value}
                </div>
            );
            })}
        </div>
    </div>);
};

export default SelectComponent;