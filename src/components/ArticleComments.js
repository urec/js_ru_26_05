import React, { PropTypes, Component } from 'react';
import Comment from './comment';

export default class ArticleComments extends Component {

  state = {
    openComment: false
  }

	render () {
		const { comments } = this.props;
		const { openComment } = this.state;

		if (!comments) return <hr></hr>

		if (comments) {
			let commentItems;

			if (openComment) {
				commentItems = comments.map((comment) => {
					return <Comment comment = {comment} />
				});

				if (comments.length >= 5) {
					return (

						<section>
							<br></br>
							<button onClick = {this.toggleOpen}> Скрыть комментарии </button>
							<br></br>

							<ul>{commentItems}</ul>

							<br></br>
							<button onClick = {this.toggleOpen}> Скрыть комментарии </button>
							<br></br>
						</section>

					);

				} else {
					return (
						<section>
							<br></br>
							<button onClick = {this.toggleOpen}> Скрыть комментарии </button>
							<br></br>

							<ul>{commentItems}</ul>
						</section>
					);
				}

			} else {

				return (

					<p>
						<span>Комментариев: {comments.length} </span>
						<button onClick = {this.toggleOpen}>Показать комментарии</button>
					</p>
				);
			}

		}

	}

  toggleOpen = (ev) => {
      this.setState({
          openComment: !this.state.openComment
      })
  }
}
