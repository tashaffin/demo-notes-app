import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";

export default function Satan() {
	const [message, setMessage] = useState("...Loading");
	const [count, setCount] = useState(0);

	useEffect(() => {
		async function fetchPage() {
			try {
				const response = await API.get("joesCrap", "/satan");
				setMessage(response);
			} catch (e) {
				onError(e);
			}
		}

		fetchPage();
	}, [count]);

	function sumCount(newMessage) {
		setCount(count + 1);
		setMessage(newMessage);
	}
	return (
		<>
		I have a count of {count}
		<div dangerouslySetInnerHTML={{ __html: message }} />
		<button onClick={() => sumCount(count)}>Press Me</button>
		</>
	);
}