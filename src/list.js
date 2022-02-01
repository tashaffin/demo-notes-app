import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async () => {
	const params = {
		TableName: process.env.TABLE_NAME,
		// 'KeyConditionExpression' defines the condition for the query
		// - 'userId = :userId': only return items with matching 'userId'
		// partition key
		KeyConditionExpression: "userId = :userid",
		// 'ExpressionAttributeValues' defines the value in the condition
		// - ':userId': defines 'userId' to be the id of the author
		ExpressionAttributeValues: {
			":userid": "123",
		},
	};
	const result = await dynamoDb.query(params);
	// Return the matching list of items in response body
	return result.Items;
});