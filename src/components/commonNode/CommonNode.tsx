import React from "react";

interface CommonNodeProps {
	data: string
}
const CommonNode = ({ data }: CommonNodeProps) => {

	return (
		<h1>{`this is ${data} page`}</h1>
	)
}

export default CommonNode;