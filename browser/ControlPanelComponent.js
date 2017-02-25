import React from 'react';

const ControlPanelComponent = (props) => {

		return (
		<div className="control-panel">	
		<div>
			<input className="ctrl-btn" type="button" value="BORING" onClick={props.onClickBoring} />
		</div>
		<div>
			<input className="ctrl-btn" type="button" value="COOL" onClick={props.onClickCool} />
		</div>
		<div>
			<input className="ctrl-btn" type="button" value="COOLEST" onClick={props.onClickCoolest} />
		</div>
		</div>
		);

};

export default ControlPanelComponent;
