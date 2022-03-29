const config = {
	STRIPE_KEY: "pk_test_51KPqGGFQHvmaE9AwoDILueEKOJhn9SXnp1WyyTvacqJ1NuvB2JlWWIY5ox01TrrpqmGVyaZScfdWV8YsRtQqiBpy00vVnNNUm9",
	MAX_ATTACHMENT_SIZE: 5000000,
	SENTRY_DSN: "https://09cc72f1d18b428ea55a42178d2329f7@o1181035.ingest.sentry.io/6294122",
	// Backend config
	s3: {
		REGION: process.env.REACT_APP_REGION,
		BUCKET: process.env.REACT_APP_BUCKET,
	},
	apiGateway: {
		REGION: process.env.REACT_APP_REGION,
		URL: process.env.REACT_APP_API_URL,
	},
	altApiGateway: {
		REGION: process.env.REACT_APP_REGION,
		URL: process.env.REACT_APP_ALT_API_URL,
	},
	cognito: {
		REGION: process.env.REACT_APP_REGION,
		USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
		APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
		IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
	},
};

export default config;
