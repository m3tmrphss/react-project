import { useRef, useState } from 'react';
import addBtnIcon from '../Vector.svg'; 

export function BacklogTasksContainer({tasks, addTask, selectTask}) { 
    let [clickOnBtn, SetClickOnBtn] = useState(false);
    let toggleClickOnBtn = () => {
        !clickOnBtn && SetClickOnBtn(true);
        clickOnBtn && SetClickOnBtn(false)
    }
    let inputRef = useRef();

    const handleAddTask = () => {
        const taskTitle = inputRef.current.value.trim();
        if (taskTitle) {
            const newTask = {
                title: taskTitle,
                id: Date.now(),
                description: 'Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.'
            };
            addTask('backlog', newTask);
            inputRef.current.value = ''; 
            toggleClickOnBtn();
        } else {
            toggleClickOnBtn();
        }
    }

    return (
        <div className="tasks-container backlog-tasks">
            
            <h2 className="tasks-container__title">Backlog</h2> 
                <div className="tasks-list">
                {tasks.map((task) => (
                    <div key={task.id} className="tasks-list__task" onClick={() => selectTask(task.id)}>{task.title}</div>
                ))}
                <div className="btn-container">
                    {!clickOnBtn ? (
                        <button className="btn-container__btn" onClick={toggleClickOnBtn }>
                            <img src={addBtnIcon} alt="Кнопка 'Добавить задачу'" />
                            <div>Add card</div>
                        </button>
                    ) : (
                        <div className="add-task-form" >
                            <input className="add-task-form__input" ref={inputRef} />
                            <button type="submit" className="add-task-form__btn" onClick={handleAddTask}>Submit</button>
                        </div>
                    )}
                </div>
            </div> 
            
                
          
        </div>
    );
}