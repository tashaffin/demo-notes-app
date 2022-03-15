import React, { cloneElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

export default function UnauthenticatedRoute(props) {
	const { children, ...rest } = props;
	const { isAuthenticated } = useAppContext();
	
	return (
		<Route {...rest}>
			{!isAuthenticated ? (
				cloneElement(children, props)
			) : (
				<Redirect to="/" />
			)}
		</Route>
	);
}