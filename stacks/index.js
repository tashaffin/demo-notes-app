import ApiStack from "./ApiStack";
import JoesStack from "./JoesStack";
import StorageStack from "./StorageStack";
import AuthStack from "./AuthStack";
import FrontendStack from "./FrontendStack";

export default function main(app) {
	const storageStack = new StorageStack(app, "storage");
	const apiStack = new ApiStack(app, "api", {
		table: storageStack.table,
	});
	const joesStack = new JoesStack(app, "altApi", {
	});
	const authStack = new AuthStack(app, "auth", {
//		altApi: joesStack.api,
		api: apiStack.api,
		bucket: storageStack.bucket,
	});
	new FrontendStack(app, "frontend", {
		altApi: joesStack.api,
		api: apiStack.api,
		auth: authStack.auth,
		bucket: storageStack.bucket,
	});
}