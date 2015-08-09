import React from 'react';
require('../sass/layouts/footer.scss');

class Footer extends React.Component {
	render() {
		return (
			<div className="footer">
				<div className="footer__language">
					<a className="footer__link" href="#">ENG.</a>
					<a className="footer__link" href="#">NL.</a>
				</div>

				<div className="footer__details">
					<span className="footer__sep">&copy;{new Date().getFullYear()} Mind Set Act</span>
					<span className="footer__sep">All Rights Reserved</span>
					<span className="footer__sep"><a className="footer__credits-link" href="#">Credits</a></span>
				</div>

				<div className="footer__social">
					<a href="#" className="footer__link"><i className="fa fa-instagram fa-2x"></i></a>
					<a href="#" className="footer__link"><i className="fa fa-twitter fa-2x"></i></a>
					<a href="#" className="footer__link"><i className="fa fa-facebook fa-2x"></i></a>
				</div>
			</div>
		);
	}
};

export default Footer;