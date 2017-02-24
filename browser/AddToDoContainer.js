import React from 'react';

import AddToDoComponent from './AddToDoComponent';

import {addToDo} from './action-creators';
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch) => {
	return {
		addToToDos: function(toDo){
			dispatch(addToDo(toDo));
		}
	};
};


class AddToDoContainer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			toDo: '',
			toDoId: 0

		};

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		const value = event.target.value;
		this.setState({
			toDo: value,
			toDoId: this.state.toDoId + 1
		});
	}

	handleSubmit (event){
		event.preventDefault();
		console.log('STATE:', this.state);
		this.props.addToToDos(this.state);
		this.setState({
			toDo: '',
		});
	}


	render (){

		return (
			
		<div>
			<AddToDoComponent 
				initialValue={this.state.toDo}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit} 
				/>
		</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(AddToDoContainer);




