import React from 'react';
require('../sass/layouts/header.scss');

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="header__logo">
					<img src="/images/logo.png" />
				</div>

				<div className="header__menu">
					<span className="header__link">Menu</span>
					<div className="header__hamburger">
						<div className="header__line"></div>
						<div className="header__line"></div>
						<div className="header__line"></div>
					</div>
				</div>
			</div>
		);
	}
};

export default Header;