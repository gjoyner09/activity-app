import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

function Accesibility({ accessibilityChange }: any) {
	const options = ["", "High", "Medium", "Low"];

	return (
		<div className="basis-1/4 font-semibold">
			Accessibility
			<Input.Group compact>
				<Select
					defaultValue=""
					style={{
						width: "90%",
					}}
					onChange={accessibilityChange}
				>
					{options.map((type, i) => (
						<Option key={i} value={type}>
							{type}
						</Option>
					))}
				</Select>
			</Input.Group>
		</div>
	);
}

export default Accesibility;
