import constants from "../constants";
import queryParams from "./queryParams";

const getURL = (
	type: string,
	participants: number | undefined,
	price: string,
	accessibility: string
) => {
	const {
		getTypeQueryParam,
		getParticipantsQueryParam,
		getPriceQueryParam,
		getAccessibilityQueryParam,
	} = queryParams;
	return constants.baseURL
		.concat(
			getTypeQueryParam(type),
			getParticipantsQueryParam(participants),
			getPriceQueryParam(price),
			getAccessibilityQueryParam(accessibility)
		)
		.slice(0, -1);
};

export default getURL;
