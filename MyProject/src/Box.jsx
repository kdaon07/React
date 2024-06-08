import { DiAptana } from "react-icons/di";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Box = ({ gr, bg, box, setBox, setSetting, index, moveItem }) => {
    const preventDefault = (e) => {
        e.preventDefault();
    };

    const handleDragStart = () => {
        console.log("Dragging Box");
    };

    return (
        <tr>
            <td className="Box" draggable="true" onDragStart={handleDragStart}>
                <div>
                    <input 
                        type="text" 
                        value={gr} 
                        className="Grade" 
                        style={{ background: bg }}
                        onChange={(e) => {
                            const newBox = [...box];
                            newBox[index].gr = e.target.value;
                            setBox(newBox);
                        }}
                        onDragOver={preventDefault}
                        onDrop={preventDefault}
                    />
                </div>
                <span>

                </span>
                <div className="Setting">
                    <DiAptana className="IconHover" style={{ marginLeft: "10px" }} onClick={() => setSetting(true)} />
                    <div>
                        <IoIosArrowUp className="IconHover" onClick={() => moveItem(index, -1)} />
                        <IoIosArrowDown className="IconHover" onClick={() => moveItem(index, 1)} />
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default Box;
