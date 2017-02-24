import React from 'react';

import ToDoComponent from './ToDoComponent';

import {removeToDo} from './action-creators';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
	return {
		toDos: state.toDos
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromToDos: function(toDoId){
			dispatch(removeToDo(toDoId));
		}
	};
};

class ToDoListContainer extends React.Component {
	constructor(props){
		super(props);

	this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler (toDoId) {
		event.preventDefault();
		this.props.removeFromToDos(toDoId);
	}

	render (){

		return (
			<div className="to-do-list">
			{ this.props.toDos.map(toDo =>
				<ToDoComponent key={toDo.id} {...toDo} onClick={() => this.clickHandler(toDo.id)} />)
			}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);

