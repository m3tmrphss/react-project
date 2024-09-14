import React, { useEffect } from "react";
import { HeaderNode } from "./header/header";
import { FooterNode } from "./footer/footer";
import { MainNode } from "./main/main";
import { useState } from "react";
import { data } from "./main/main-components/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
 
function App( ) {    
   // useEffect(() => {
    //
    //    localStorage.setItem('tasks', JSON.stringify(data) ) 
  //  })
    const [tasks, setTasks] = useState(data);   
    const addTask = (listName, task) => { 
        setTasks({ 
            ...tasks,  
            [listName]: [...tasks[listName], task] 
        }); 
    }
    const moveTask = (fromListName, toListName, taskId) => {
        setTasks(prevTasks => {
            const fromList = [...prevTasks[fromListName]]; 
            const toList = [...prevTasks[toListName]]; 

            const taskIndex = fromList.findIndex(task => task.id === taskId);
            if (taskIndex !== -1) {
                const [taskToMove] = fromList.splice(taskIndex, 1); 
                toList.push(taskToMove);
                return {
                    ...prevTasks,
                    [fromListName]: fromList, 
                    [toListName]: toList 
                };
            } else {
                return prevTasks; 
            }
        }); 
    };   
   // useEffect(() => { 
    //        localStorage.setItem('tasks', JSON.stringify(tasks)); 
    //}, [tasks]);
  return ( 
      <BrowserRouter> 
        <Routes >
            <Route path={'/'} element={ 
                <>
                    <HeaderNode />
                    <MainNode  addTask={addTask} moveTask={moveTask} tasks={tasks} />  
                    <FooterNode tasks={tasks}  />
                </>
            } > </Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
 