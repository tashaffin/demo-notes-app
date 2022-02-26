import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../lib/contextLib";
import { useHistory } from "react-router-dom";

export default function Login() {
	const { userHasAuthenticated } = useAppContext();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setIsLoading(true);
		try {
			await Auth.signIn(email, password);
			userHasAuthenticated(true);
			history.push("/");
		} catch (e) {
			alert(e.message);
			setIsLoading(false);
		}
	}

	return (
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<Form.Group size="lg" ControlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						autoFocus
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size="lg" ControlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<LoaderButton
					block
					size="lg"
					type="submit"
					isLoading={isLoading}
					disabled={!validateForm()}
				>
					Login
				</LoaderButton>
			</Form>
		</div >
	);
}