import {useState} from "react";
import SelectComponent from "./SelectComponent";
import "./DropDownList.css";


const options = [
    {key:1, value: "Warszawa"},
    {key:2, value: "Wrocław"},
    {key:3, value: "Gdańsk"},
    {key:5, value: "Gdynia"},
    {key:6, value: "Katowice"},
    {key:7, value: "Poznań"},
];

export default function DropDownList() {

    const [selectedOption, setSelectedOption] = useState("")
    const [open, setOpen] = useState(false);


    return (
        <div className="dropdownList">
            <SelectComponent
                options={options}
                onChange={(item) => setSelectedOption(item)}
                selectedKay={selectedOption}
                placeholder={"wpisz i wybierz miejscowość"}
                open={open}
                setOpen={setOpen}
            />
            {/*<p>selected option: {selectedOption} </p>*/}
            <hr/>
            <p style={{ marginTop: "2%", marginLeft: 'auto',
                marginRight: 'auto',}}>Miejscowość</p>
        </div>

    );
}

