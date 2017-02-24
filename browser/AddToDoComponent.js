import React from 'react';

const AddToDoComponent = (props) => {

	return (

	<div className="add-to-do">
		<form onSubmit={props.handleSubmit}>
			<input 
				type="text" 
				value={props.initialValue} 
				className="add-to-do-input" 
				onChange={props.handleChange} 
				   /> 
			<br />
			<button 
			    className="add-to-do-submit" 
			>Add New To Do!
			</button>
		</form>
	</div>

	);
}

export default AddToDoComponent;
