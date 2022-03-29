import * as Sentry from "@sentry/browser";
import config from "../config";

const isLocal = process.env.NODE_ENV === "development";
export function initSentry() {
	if (isLocal) {
		return;
	}
	Sentry.init({ dsn: config.SENTRY_DSN });
}
export function logError(error, errorInfo = null) {
	if (isLocal) {
		return;
	}
	Sentry.withScope((scope) => {
		errorInfo && scope.setExtras(errorInfo);
		Sentry.captureException(error);
	});
}

export function onError(error) {
	let message = error.toString();
	// Auth errors
	if (!(error instanceof Error) && error.message) {
		message = error.message;
	}
	alert(message);
}