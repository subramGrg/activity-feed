import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ActivityFeed from "./activity-feed.component";
import * as activityFeedActions from "./activity-feed.actions";

const mapDispatchToProps = (dispath) => ({
    ...bindActionCreators({
        ...activityFeedActions,
    }, dispath),
});

const mapStateToProps = (store) => {
    return {
		feeds: store.activityFeedReducer.feed,
		spinner: store.activityFeedReducer.spinner,
		hyperlink: store.activityFeedReducer.hyperlink,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityFeed);