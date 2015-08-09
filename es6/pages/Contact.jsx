import React from 'react';
import Footer from '../Footer.jsx';

class Contact extends React.Component {
	render() {
		return (
			<div className="page--extend">
				<div className="page__center">
					<div className="page__head">
						<h1 className="page__heading">Contact Us.</h1>
					</div>

					<div className="page__body">
						<p>Fancy a chat? please call - +31 [0] 758 559 147 or email - <a className="page__link" href="mailto:hello@mindsetact.nl">hello@mindsetact.nl</a>
						<br /><br />
						If you’d prefer to leave a message please use the contact form below and we will get back to you.
						</p>
					</div>

					<div className="page__form">
						<input type="text" className="page__input" placeholder="Name." />
						<input type="text" className="page__input" placeholder="Telephone." />
						<input type="text" className="page__input" placeholder="Company." />
						<textarea className="page__input--textarea" placeholder="Message."></textarea>
						
						<div className="page__submit-wrapper">
							<input type="submit" className="page__submit" value="Send." />					
						</div>
					</div>
				</div>

				<Footer />
			</div>
		);
	}
};

export default Contact;