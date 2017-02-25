import React from 'react';

import ToDoComponent from './ToDoComponent';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {removeToDo} from './action-creators';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
	return {
		toDos: state.toDos,
		render: state.render
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
		if (this.props.render === 'boring'){

			return (
				<div className="to-do-list">
				{ this.props.toDos.map(toDo =>
					<ToDoComponent key={toDo.id} {...toDo} onClick={() => this.clickHandler(toDo.id)} />)
				}
				</div>
				);

		} else if (this.props.render === 'cool') {
			
			return (
			<div className="to-do-list-cool">
				<ReactCSSTransitionGroup
		          transitionName="cool-list-item"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
		          { this.props.toDos.map(toDo =>
						<ToDoComponent key={toDo.id} {...toDo} onClick={() => this.clickHandler(toDo.id)} />)
					}
		        </ReactCSSTransitionGroup>
	        </div>
	        );
		} else if (this.props.render === 'coolest') {
			return (
			<div className="to-do-list-coolest">
				<ReactCSSTransitionGroup
		          transitionName="coolest-list-item"
		          transitionEnterTimeout={600}
		          transitionLeaveTimeout={600}>
		          { this.props.toDos.map(toDo =>
						<ToDoComponent key={toDo.id} {...toDo}  onClick={() => this.clickHandler(toDo.id)} />)
					}
		        </ReactCSSTransitionGroup>
	        </div>
	        );
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);

