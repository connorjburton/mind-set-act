import React from 'react';
require('../../sass/layouts/page.scss');

class Welcome extends React.Component {
	render() {
		return (
			<div className="page">
				<div className="page__center">
					<div className="page__head">
						<h1 className="page__heading">Welcome.</h1>
					</div>

					<div className="page__body">
						<p>Mind Set Act is a result driven training and coaching company for individuals but also for the B2B market. An organization is only a success when individual employess perform beyond expections. Bad results leads to unsatisfied customers and loss of profits. Teamwork, mutual adaption between co-workers and joint effort make for a happy customer.
						<br /><br />
						Mind Set Act can play a crucial role in the realization of these goals through training, coaching and organizational advisory. Mind Set Act can also be contacted for outplacement and reintegration into working life.</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Welcome;