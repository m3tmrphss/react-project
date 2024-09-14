import { useState } from 'react';
import addBtnIcon from '../Vector.svg'; 

export function  FinishedTasksContainer({tasks, moveTask, selectTask}) {
    let [clickOnBtn, SetClickOnBtn] = useState(false);
    let handleClickOnBtn = () => {
        !clickOnBtn && SetClickOnBtn(true);
        clickOnBtn && SetClickOnBtn(false)
    };
    let handleMoveTask = (evt) => {
        let selectedTaskTitle = evt.target.value;
        const taskId = tasks.inProgress.find(task => task.title === selectedTaskTitle).id;
        moveTask('inProgress', 'finished', taskId)
        evt.target.value = '';
        handleClickOnBtn();
    } 
    return (
        <div className={"tasks-container ready-tasks"}>
            <h2 className={"tasks-container__title"}>Finished</h2>
            <div className={"tasks-list"}>
                {tasks.finished.map((task) => (
                    <div key={task.id}  onClick={() => selectTask(task.id)} className='tasks-list__task'>{task.title}</div>
                ))}
                <div className={"btn-container"}>
                    { tasks.inProgress.length > 0 ?
                        (!clickOnBtn ?
                            <button className={"btn-container__btn"} onClick={handleClickOnBtn}>
                                <img src={addBtnIcon} alt="Кнопка 'Добавить задачу'" />
                                <div>Add card</div>
                            </button>
                            :
                            <select className={"backlog-task-select"} name={"select-task"} onChange={handleMoveTask}>
                                <option value={""} className={"backlog-task-select__item"}></option>
                                {
                                    tasks.inProgress.map((option) =>
                                        <option key={option.id} value={option.title} className={"backlog-task-select__item"}>{option.title}</option>
                                    )
                                }
                            </select>
                        ) : (
                            <button className={"btn-container__btn ready-tasks-btn"} disabled onClick={handleClickOnBtn}   >
                                <img src={addBtnIcon} alt="Кнопка 'Добавить задачу'" />
                                <div>Add card</div>
                            </button>
                        )}
                </div>
            </div>
        </div>
    );
}