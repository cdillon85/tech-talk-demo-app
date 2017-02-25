export const initialState = {toDos: [], render: 'boring'};

export default function(state = initialState, action){

switch (action.type) {

		case 'ADD_TODO': 
		return Object.assign({}, state, {toDos: state.toDos.concat(action.toDo)});


		case 'REMOVE_TODO':
		return Object.assign({}, state, {toDos: state.toDos.filter(el => el.id !== action.toDoId)});

		case 'SET_RENDER':
		return Object.assign({}, state, {render: action.renderType});

		default:
		return state;

	}
}
