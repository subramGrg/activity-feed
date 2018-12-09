import axios from "axios";
import {
	setFeed,
	setSpinner
} from "./activity-feed.actions";

const middleware = ({
	dispatch,
}) => (next) => (action) => {
	if (action.type === "GET_FEED") {
		axios({
				method: 'GET',
				url: '/tasks',
			})
			.then(({
				data,
			}) => {
				dispatch(
					setFeed(data)
				);

				dispatch(
					setSpinner(false)
				);
			});
	}

	next(action);
};

export default middleware;