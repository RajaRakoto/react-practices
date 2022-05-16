import React from 'react';

// ===============================================

// TODO: useEffect exemple (class to func component) [**]

/**
 * @feat - state | setState() | date | setInterval() | clearInterval() | toLocaleTimeString() | component life cycle
 */
export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
	}

	// state update
	tick() {
		this.setState({
			date: new Date(),
		});
	}

	// timer
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	// liberation de ressource
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return <div>{this.state.date.toLocaleTimeString()}</div>;
	}
}
