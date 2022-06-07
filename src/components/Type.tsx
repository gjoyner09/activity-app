import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Type = ({ typeChange }: any) => {
	const options = [
		"",
		"Busywork",
		"Charity",
		"Cooking",
		"DIY",
		"Education",
		"Music",
		"Recreational",
		"Relaxation",
		"Social",
	];

	return (
		<div className="basis-1/4 font-semibold">
			Type
			<Input.Group compact>
				<Select
					defaultValue=" "
					style={{
						width: "90%",
					}}
					onChange={typeChange}
				>
					{options.map((type) => (
						<Option value={type}>{type}</Option>
					))}
				</Select>
			</Input.Group>
		</div>
	);
};

export default Type;
