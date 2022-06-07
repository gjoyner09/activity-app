import React from "react";
import { InputNumber } from "antd";

const Participants = ({ participantsChange }: any) => {
	return (
		<div className="basis-1/4 font-semibold">
			Participants
			<InputNumber
				min={1}
				max={10}
				onChange={participantsChange}
				style={{
					width: "90%",
				}}
			/>
		</div>
	);
};

export default Participants;
