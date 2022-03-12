import React, { useState } from "react";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { onError } from "../lib/errorLib";
import config from "../config";
import { loadStripe } from "@stripe/stripe-js";

export default function Settings() {
	const history = useHistory();
	const [isLoading, setIsLoading] = useState(false);
	const stripePromise = loadStripe(config.STRIPE_KEY);
	function billUser(details) {
		return API.post("notes", "/billing", {
			body: details
		});
	}
	return (
		<div className="Settings">
		</div>
	);
}