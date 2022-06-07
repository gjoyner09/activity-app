import React, { useEffect, useState } from "react";
import Accessibility from "./Accessibility";
import Type from "./Type";
import Price from "./Price";
import Participants from "./Participants";
import GetActivity from "./GetActivity";

const Inputs = () => {
	// Accessibility
	const [accessibility, setAccessibility] = useState<string>("");
	function accessibilityChange(event: string): void {
		setAccessibility(event);
	}
	useEffect(() => {
		console.log(accessibility);
	}, [accessibility]);

	// Participants
	const [participants, setParticipants] = useState<number | undefined>(
		undefined
	);
	function participantsChange(event: number): void {
		setParticipants(event);
	}
	useEffect(() => {
		console.log(participants);
	}, [participants]);

	// Type
	const [type, setType] = useState<string>("");
	function typeChange(event: string): void {
		setType(event);
	}
	useEffect(() => {
		console.log(type);
	}, [type]);

	// Price
	const [price, setPrice] = useState<string>("");
	function priceChange(event: string): void {
		setPrice(event);
	}
	useEffect(() => {
		console.log(price);
	}, [price]);

	return (
		<>
			<div className="p-5 pb-0 text-xl font-extrabold">Activity Generator</div>
			<div className="flex flex-row p-5 items-end">
				<Type typeChange={typeChange} />
				<Participants participantsChange={participantsChange} />
				<Price priceChange={priceChange} />
				<Accessibility accessibilityChange={accessibilityChange} />
				<GetActivity
					type={type}
					participants={participants}
					price={price}
					accessibility={accessibility}
				/>
			</div>
		</>
	);
};

export default Inputs;
