const queryParams = {
	getTypeQueryParam: (type: string) => {
		return type === "" ? "" : "type=".concat(type.toLowerCase(), "&");
	},

	getParticipantsQueryParam: (participants: number | undefined) => {
		return participants
			? "participants=".concat(String(participants), "&")
			: "";
	},

	// opportunity: make the cases dynamic
	getPriceQueryParam: (price: string) => {
		switch (price) {
			case "Free":
				return "price=0.0&";
			case "Low":
				return "minprice=0.01&maxprice=0.3&";
			case "Medium":
				return "minprice=0.31&maxprice=0.7&";
			case "High":
				return "minprice=0.71&maxprice=1.0&";
			default:
				return "";
		}
	},

	getAccessibilityQueryParam: (accessibility: string) => {
		switch (accessibility) {
			case "Low":
				return "minaccessibility=0.0&maxaccessibility=0.3&";
			case "Medium":
				return "minaccessibility=0.31&maxaccessibility=0.7&";
			case "High":
				return "minaccessibility=0.71&maxaccessibility=1.0&";
			default:
				return "";
		}
	},
};

export default queryParams;
