import React, { PropTypes } from 'react';

export default function Comment (props) {
	const { comment: {id, name, text} } = props;

	return (
		<li key={id}>
			<div>
				<b>{name}</b>
				<p>{text}</p>
				<hr/>
			</div>
		</li>
	);
}

Comment.propTypes = {
  comment: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired
};
