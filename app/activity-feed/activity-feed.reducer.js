const initialState = {
	feed: [],
	spinner: true,
	hyperlink: "Mouse over a user or task to get their path."
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "SET_FEED":
			return {
				...state,
				feed: action.payload,
			};
		
		case "SET_SPINNER":
			return {
				...state,
				spinner: action.payload,
			};
		
		case "SET_HYPERLINK":
			return {
				...state,
				hyperlink: action.payload,
			}
		default:
			return state;
	}
};