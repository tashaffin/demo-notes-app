import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { onError } from "../lib/errorLib";

export default function Satan() {
	const [message, setMessage] = useState("...Loading");

	useEffect(() => {
		async function fetchPage() {
			try {
				const response = await API.get("notes", "/satan");
				setMessage(response);
			} catch (e) {
				onError(e);
			}
		}

		fetchPage();
	}, []);

	return (
		<div dangerouslySetInnerHTML={{ __html: message }} />
	);
}