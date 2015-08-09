import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Welcome from './pages/Welcome.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
require('../sass/base.scss');

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Header />
				<Nav />
				<Welcome />
				<About />
				<Contact />
			</div>
		);
	}
};

React.render(<App />, document.body);