import { useState } from 'react';
import addBtnIcon from '../Vector.svg';  
export function ReadyTasksContainer({tasks, moveTask, selectTask}) {
    let [clickOnBtn, SetClickOnBtn] = useState(false);
    let handleClickOnBtn = () => {
        !clickOnBtn && SetClickOnBtn(true);
        clickOnBtn && SetClickOnBtn(false)
    };
    let handleMoveTask = (evt) => {
        let selectedTaskTitle = evt.target.value;
        const taskId = tasks.backlog.find(task => task.title === selectedTaskTitle).id;
        moveTask('backlog', 'ready', taskId)
        evt.target.value = '';
        handleClickOnBtn();
    }
     
    return (
        <div className={"tasks-container ready-tasks"}>
            <h2 className={"tasks-container__title"}>Ready</h2>
            <div className={"tasks-list"}>
                {tasks.ready.map((task) => (
                    <div key={task.id} onClick={() => selectTask(task.id)} className='tasks-list__task'>{task.title}</div>
                ))}
                <div className={"btn-container"}>
                    {  tasks.backlog.length > 0 ?
                        (!clickOnBtn ?
                            <button className={"btn-container__btn ready-tasks-btn"} onClick={handleClickOnBtn}   >
                                <img src={addBtnIcon} alt="Кнопка 'Добавить задачу'" />
                                <div>Add card</div>
                            </button>
                            :
                            <select className={"backlog-task-select"} name={"select-task"} onChange={handleMoveTask}>
                                <option value={""} className={"backlog-task-select__item"}></option>
                                {
                                    tasks.backlog.map((option) =>
                                        <option key={option.id} value={option.title} className={"backlog-task-select__item"}>{option.title}</option>
                                    )
                                }
                            </select>) : (
                                <button className={"btn-container__btn ready-tasks-btn"} disabled onClick={handleClickOnBtn}   >
                                    <img src={addBtnIcon} alt="Кнопка 'Добавить задачу'" />
                                    <div>Add card</div>
                                </button>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

 