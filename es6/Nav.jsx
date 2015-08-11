import React from 'react';
require('../sass/layouts/nav.scss');

class Nav extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="header header--absolute">
					<div className="header__menu">
						<span className="header__link"  onClick={this.props.handleMenuClick.bind(null, false)}>Close</span>

						<div className="header__hamburger">
							<div className="header__line"></div>
							<div className="header__line"></div>
							<div className="header__line"></div>
						</div>
					</div>
				</div>

				<div className="nav__list">
					<ul className="nav__level">
						<li><a href="#" className="nav__link">Home</a></li>
						<li><a href="#" className="nav__link">About</a></li>
						<li>
							<a href="#" className="nav__link">Training</a>
							<ul>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
							</ul>
						</li>
						<li>
							<a href="#" className="nav__link">Coaching</a>
							<ul>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Sub Category</a></li>
							</ul>
						</li>
						<li><a href="#" className="nav__link">News</a></li>
						<li>
							<a href="#" className="nav__link">Contact</a>
							<ul>
								<li><a href="#" className="nav__link nav__link--sub">Instagram</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Facebook</a></li>
								<li><a href="#" className="nav__link nav__link--sub">Twitter</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
};

export default Nav;

