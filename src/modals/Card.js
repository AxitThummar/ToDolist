import React, { useState } from "react";
import './Card.css';
import { RiDeleteBinFill } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import EditTask from "./EditTask";


const Card = ({ taskObj, index, deleteTask , updateListArray}) => {
    const [modal,setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (

        <div class="card-wrapper mr-15">
            <div class="task-holder">
                <span class="card-holder" ><h4> {taskObj.name}</h4> </span>
                <div>
                    <a><TfiWrite size="14px" cursor='pointer' onClick={() => setModal(true)} /></a>
                    <a><RiDeleteBinFill size="17px" cursor='pointer' onClick={handleDelete} /></a>
                </div>

            </div>
            <div>
                <p>{taskObj.description}</p>
            </div>
            <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>

            </div>
            <EditTask modal={modal} toggle={toggle}  updateTask={updateTask} taskObj={taskObj} />
        </div>

    )
}
export default Card;

