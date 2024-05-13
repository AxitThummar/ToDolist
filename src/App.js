import logo from './logo.svg';
import { IoMdExit } from "react-icons/io";
import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import CreateTask from './modals/CreateTask';
import Card from './modals/Card';


function App() {

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
    if (arr) {
      let obj = JSON.parse(arr)
      setTaskList(obj)
    }
  }, [])

  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = taskList
    tempList[index] = obj
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }


  const toggle = () => {
    setModal(!modal);
  }
  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setModal(false)
    setTaskList(taskList)

  }
  /* 
    const tabs = [
      {
        id: 1,
        tabTitle: 'All',
        
      },
      {
        id: 2,
        tabTitle: 'Todo',
        title: 'Title 2',
        content: 'b',
      },
      {
        id: 3,
        tabTitle: 'In Progress..',
        title: 'Title 3',
        content: 'c',
      },
      {
        id: 4,
        tabTitle: 'Done',
        title: 'Title 4',
        content: 'd',
      }
  
    ] 

  /*
      <div className='container' >
        <div className='tabs text-center'>
          {tabs.map((tab, i) =>
            <button
              key={i}
              id={tab.id}
              disabled={currentTab === `${tab.id}`}
              onClick={(handleTabClick)}
            >
              {tab.tabTitle}
            </button>
          )}
        </div>
        <div className="content">
          {tabs.map((tab, i) =>
            <div key={i}>
              {currentTab === `${tab.id}` &&
                <div>
                  <p>{tab.title}</p>
                  <p>{tab.content}</p>
                </div>
              }
            </div>
          )}
        </div>
      </div>
*/


  return (
    <div className="App">
      <header className="App-header">
        <nav class="nav">
          <h1 Class="WebName"> Todo List </h1>
          <div class="navin">
            <button class="button btn btn-primary" type="button" onClick={() => setModal(true)}>Create New Todo</button>
            <a><IoMdExit size="30px" cursor='pointer' /></a>
          </div>
        </nav>
      </header>


      <div className='task-container'>
        {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index}
         deleteTask={deleteTask} updateListArray={updateListArray} />)}

      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />

    </div >
  );
}

export default App;

