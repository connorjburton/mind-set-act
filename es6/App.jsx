import React from 'react';
import Header from './Header.jsx';
import Welcome from './pages/Welcome.jsx';
import About from './pages/About.jsx';
require('../sass/base.scss');

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Welcome />
				<About />
			</div>
		);
	}
};

React.render(<App />, document.body);