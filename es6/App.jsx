import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Welcome from './pages/Welcome.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
require('../sass/base.scss');

class App extends React.Component {
	_bind(...methods) {
		methods.forEach((method) => this[method] = this[method].bind(this));
	}
	constructor() {
		super();
		this.state = {
			navOpen: false
		}

		this._bind('handleMenuClick');
	}
	render() {
		return (
			<div className="app">
				<Header handleMenuClick={this.handleMenuClick} />
				{this.state.navOpen ? <Nav handleMenuClick={this.handleMenuClick} /> : null}
				<Welcome />
				<About />
				<Contact />
			</div>
		);
	}
	handleMenuClick(isOpen) {
		this.setState({
			navOpen: isOpen
		});
	}
};

React.render(<App />, document.body);