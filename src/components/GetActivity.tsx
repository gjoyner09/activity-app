import React from "react";
import { Button } from "antd";
import axios from "axios";
import getURL from "../helpers/getURL";

const GetActivity = ({
	type,
	participants,
	price,
	accessibility,
	changeActivity,
}: any) => {
	const handleClick = () => {
		axios(getURL(type, participants, price, accessibility)).then((response) =>
			changeActivity(response)
		);
	};
	return (
		<Button type="primary" onClick={handleClick}>
			Get activity!
		</Button>
	);
};

export default GetActivity;
