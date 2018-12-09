import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store";
import ActivityFeed from "activity-feed/activity-feed.container";

ReactDOM.render(
    <Provider store={store}>
        <ActivityFeed />
    </Provider>,
    document.getElementById("root")
);