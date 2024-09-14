import React  from "react";
import './footer.css'; 
export function FooterNode( {tasks}) {  
     
    return (
        <footer>
            <div className={"status-tasks"}>
                <h3 className={"active-tasks"}>Active tasks: {tasks.backlog.length} </h3>
                <h3 className={"finished-tasks"}>Finished tasks: {tasks.finished.length}  </h3> 
            </div>
            <h2 className={"footer-title"}>Kanban board by Jzxdx, 2024</h2>
        </footer>
    )
}