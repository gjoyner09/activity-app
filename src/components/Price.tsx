import React from "react";
import { Input, Select } from "antd";

const { Option } = Select;

const Price = ({ priceChange }: any) => {
	const options = ["", "Free", "Low", "Medium", "High"];

	return (
		<div className="basis-1/4 font-semibold">
			Price
			<Input.Group compact>
				<Select
					defaultValue=""
					style={{
						width: "90%",
					}}
					onChange={priceChange}
				>
					{options.map((type) => (
						<Option value={type}>{type}</Option>
					))}
				</Select>
			</Input.Group>
		</div>
	);
};

export default Price;
