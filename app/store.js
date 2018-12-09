import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import activityFeedMiddleware from 
		"activity-feed/activity-feed.middleware";
import activityFeedReducer from "activity-feed/activity-feed.reducer";

const middlewares = [activityFeedMiddleware];

if (process.env.NODE_ENV !== "production") {
    middlewares.push(
        createLogger({
            collapsed: true,
        })
    );
}

const reducers = combineReducers({
    activityFeedReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, ...middlewares));

export default store;