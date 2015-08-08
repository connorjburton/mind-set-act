import React from 'react';

class About extends React.Component {
	render() {
		return (
			<div className="page welcome">
				<div className="page__center">
					<div className="page__heading">
						<h1 className="page__heading__text">About Us.</h1>
					</div>

					<div className="page__body">
						<p>We believe it all happens in the mind of individuals, motivation, ambition, satisfaction commitment but also feelings of neglect, disconnection and disappointment. When people are motivated great things happens at work or tasks getting done at liest. When there not several problems occur. The big question is what do people need to achieve their goals and the goals of the organization and staying happy and focused in teams and on individual basis.
						<br /><br />
						Sometimes individuals need some help by their way in their career. The questions that often rise are : Where am I? and where do I want to be at this point in my career? Sometimes characteristics should be inhanced en some not so much. It could be case that employee and employer have to part ways due to several reasons. 
						<br /><br />
						Often its forced departure and an emotional process. A new mind set is required and employees have to ask themselves how do I go about this new situation. Mind. Set. Act. Is able to guide employer and employee in this outplacement process. Involvement means an efficient approach to a new situation and a great new job. 
						</p>
					</div>

					<div className="page__boxes">
						<div className="page__boxes__box">
							<div className="page__boxes__edge"></div>
							<span className="page__boxes__box__text">Mind.</span>
						</div>
						<div className="page__boxes__box">
							<div className="page__boxes__edge"></div>
							<span className="page__boxes__box__text">Set.</span>
						</div>
						<div className="page__boxes__box">
							<div className="page__boxes__edge"></div>
							<span className="page__boxes__box__text">Act.</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default About;