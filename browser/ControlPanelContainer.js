import React from 'react';

import ControlPanelComponent from './ControlPanelComponent';

import {setRenderBoring, setRenderCool, setRenderCoolest} from './action-creators';
import {connect} from 'react-redux';


const mapDispatchToProps = (dispatch) => {
	return {
		setRenderToBoring: function(){
			dispatch(setRenderBoring());
		},
		setRenderToCool: function(){
			dispatch(setRenderCool());
		},
		setRenderToCoolest: function(){
			dispatch(setRenderCoolest());
		}
	};
};


class ControlPanelContainer extends React.Component {
	constructor(props){
		super(props)

	this.clickHandlerBoring = this.clickHandlerBoring.bind(this);
	this.clickHandlerCool = this.clickHandlerCool.bind(this);
	this.clickHandlerCoolest = this.clickHandlerCoolest.bind(this);

	}

	clickHandlerBoring () {
		this.props.setRenderToBoring();
	}

	clickHandlerCool () {
		this.props.setRenderToCool();
	}

	clickHandlerCoolest() {
		this.props.setRenderToCoolest();
	}


	render (){

		return (
			
		<div>
			<ControlPanelComponent 
				onClickBoring={() => this.clickHandlerBoring()}
				onClickCool={() => this.clickHandlerCool()}
				onClickCoolest={() => this.clickHandlerCoolest()}
				/>
		</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(ControlPanelContainer);
