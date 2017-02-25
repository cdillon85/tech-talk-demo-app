import React from 'react';

const ToDoComponent = (props) => {

		return (
		<li className="list-item">
			<input className="check-box" type="checkbox" onClick={props.onClick} />
			<span className="list-item-span" >{props.toDo}</span>
		</li>
		);

};

export default ToDoComponent;
