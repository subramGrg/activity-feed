export const getFeed = () => ({
	type: "GET_FEED",
});

export const setFeed = (payload) => ({
	type: "SET_FEED",
	payload,
});

export const setSpinner = (payload) => ({
	type: "SET_SPINNER",
	payload,	
});