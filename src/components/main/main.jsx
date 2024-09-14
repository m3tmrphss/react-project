
import { BacklogTasksContainer } from './main-components/backlog/backlog'  
import { ReadyTasksContainer } from './main-components/ready/ready';
import { InProgressTasksContainer } from './main-components/in-progress/inProgress';
import './main.css'  
import vector1 from './main-components/Line 2.svg';
import vector2 from './main-components/Line 3.svg';
import { FinishedTasksContainer } from './main-components/finished/finished';
import { useRef, useState } from 'react'; 
export function MainNode({tasks, moveTask, addTask}) { 
  
    let [selectedTaskId, setSelectedTaskId] = useState(null)
    let [selectedTaskType, setSelectedTaskType] = useState(null);
     
    let [ handleClickBtn, SetHandleClickBtn ] = useState(false) ;
    let addDescription = () => {
        const newDescription = inputRef.current.value.trim();
        if (newDescription) {
            const taskIndex = tasks[selectedTaskType].findIndex(task => task.id === selectedTaskId);
            if (taskIndex !== -1) {
                tasks[selectedTaskType][taskIndex].description = newDescription; 
                SetHandleClickBtn(false);
                inputRef.current.value = ''; 
            }
        } else {
            SetHandleClickBtn(false);
        }
    }
    let inputRef = useRef()
    return (
        <main>
            <div className="container"> 
            {selectedTaskId === null ? (
                <>
                
                    <BacklogTasksContainer tasks={tasks.backlog} addTask={addTask} selectedTask={selectedTaskId} selectTask= {(taskId) => {
                        setSelectedTaskId(taskId);
                        setSelectedTaskType('backlog');
                    }}/> 
                    <ReadyTasksContainer tasks={tasks} moveTask={moveTask} selectedTask={selectedTaskId} selectTask={(taskId) => {
                        setSelectedTaskId(taskId);
                        setSelectedTaskType('ready');
                    }} />
                    <InProgressTasksContainer tasks={tasks} moveTask={moveTask} selectedTask={selectedTaskId} selectTask= {(taskId) => {
                        setSelectedTaskId(taskId);
                        setSelectedTaskType('inProgress');
                    }} />
                    <FinishedTasksContainer tasks={tasks} moveTask={moveTask}  selectedTask={selectedTaskId} selectTask= {(taskId) => {
                        setSelectedTaskId(taskId);
                        setSelectedTaskType('finished');
                    }}/>
                    
                </>
            ) : ( 
                        <div className={'task'}> 
                        <div className="modal-container">
                            <div className={"text-container"}>
                                <h2 className={" task-title"}>{tasks[selectedTaskType].find(task => task.id === selectedTaskId)?.title}</h2>
                                <p className={" task-description"}>{tasks[selectedTaskType].find(task => task.id === selectedTaskId)?.description || 'This task has no description'}</p>
                                {!handleClickBtn ? (
                                    <button className={"add-description-button"} onClick={() => SetHandleClickBtn(true)}>Add Description</button>
                                ) : (
                                    <div className={"add-description-form"}>
                                        <input className={"add-description-input"} ref={inputRef}/>
                                        <button className={"add-description-button"} onClick={addDescription} > Add description</button>
                                    </div>
                                )}
                            </div> 
                            <div className="modal-container__btn-container" >
                                <div className="close-btn" onClick={() => {setSelectedTaskId(null); setSelectedTaskType(null) }}>
                                    <img src={vector1} alt="" />
                                    <img src={vector2} alt="" />
                                </div>  
                            </div>
                        </div>
                        </div>
                 )}
             
            
             </div> 

        </main>
    )
}