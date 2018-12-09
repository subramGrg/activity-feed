import React from "react";

import FeedItems from "./sub-components";
import "./activity-feed.scss";

class ActivityFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * @property {Function} getFeed in activity-feed.actions
     * @memberof ActivityFeed
     */
    componentDidMount() {
        const {
            getFeed,
        } = this.props;
		
        // get feeds
        getFeed();
    }

    /**
	 * formulate feed list
	 * @property {Object} feeds
	 * @memberof ActivityFeed
	 */
	getFeedList() {
        const {
            feeds,
        } = this.props;

        if(feeds.length < 1) {
            return "no activities";
        }

        return <FeedItems
					feeds={feeds} />;
    }
    
    render() {
        const {
			spinner,
			hyperlink,
        } = this.props;

        const feedList = (spinner) ?
            <div styleName="spinner">
                Loading
            </div> : 
            this.getFeedList();

        return(
			<div styleName="wrapper">
				<div styleName="results">
					{feedList}
				</div>

				<div styleName="hyperlink">
					{hyperlink}
				</div>

			</div>
        );
    }
}

export default ActivityFeed;