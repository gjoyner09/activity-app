const Output = ({ activity }: any) => {
	const description = activity?.data?.activity;
	return <h1>{description}</h1>;
};

export default Output;
