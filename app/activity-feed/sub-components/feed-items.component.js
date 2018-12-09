import React from "react";
import reactStringReplace from "react-string-replace";

import "./feed-item.scss";

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	/**
	 * handles mouse enter event 
	 * @memberof Items
	 */
	handleMouseEnter(e) {
		this.props.setHyperLink(
			e.target.dataset.link
		);
	}

	/**
	 * handles mouse leave event 
	 * @memberof Items
	 */
	handleMouseLeave() {
		this.props.setHyperLink(
			"Mouse over a user or task to get their path."
		);
	}

	/**
	 * @param {String} key create pattern with key
	 * @memberof Items
	 */
	generateRegExFor(key) {
		return new RegExp(`({*\\s${key}:[^}]*\\s})`, 'i');
	}

	/**
	 * Replaces activity feeds template
	 * @param {Object} task
	 * @param {Array} feedProfiles
	 * @returns
	 * @memberof Items
	 */
	replaceTemplate({
		profile_ids,
		template
	}, task, feedProfiles) {
		let msg = template;

		// replace task id
		const expression = this.generateRegExFor("task");
		msg = reactStringReplace(
				msg, 
				expression, 
				(match, index) =>
					<a key={index} 
						href={`/tasks/${task.slug}`}
						data-link={`/tasks/${task.slug}`}
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}>
						
						{task.name}
					</a>
		);

		// replace profile id
		profile_ids.forEach(() => {
			const expression = this.generateRegExFor("profiles");
			
			msg = reactStringReplace(
					msg, 
					expression, 
					(value) => {
						const num = value.match(/(\d+)/g).join();
						const profile = feedProfiles.find(profile =>
							parseInt(num) === profile.id
						);

						return <a key={profile.id}
									href={`/users/${profile.slug}`}
									data-link={`/users/${profile.slug}`}
									onMouseEnter={this.handleMouseEnter}
									onMouseLeave={this.handleMouseLeave}>

								{profile.abbreviated_name}
						</a>;
			});
		});

		return msg;
	}

	/**
	 * Create activity feed item
	 * @param {Integer} index
	 * @param {Object} feedItem
	 * @param {Object} feeds
	 * @returns
	 * @memberof Items
	 */
	renderCard(index, feedItem, feeds) {
		const task = feeds.tasks.find(task =>
			task.id === feedItem.task_id
		);

		return <div key = {index}
					styleName="item"> 
			{this.replaceTemplate(feedItem, task, feeds.profiles)}
		</div>
	}

	render() {
		const {
			feeds,
		} = this.props;
		const activity = [];

		feeds.activity_feed.forEach((feedItem, index) => {
			activity.push(
				this.renderCard(index, feedItem, feeds)
			);
		});

		return activity;
	}
}

export default Items;