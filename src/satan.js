export async function handler() {
	return {
		statusCode: 200,
		headers: { "Content-Type": "text/html" },
		body: "<html><pre>           _<br>" +
"          | |<br>" + 
" ___  __ _| |_ __ _ _ ___<br>" +
"/ __|/ _` | __/ _` | '_  \\<br>" + 
"\\__ \\ (_| | || (_| | | | |<br>" +
"|___/\\__,_|\\__\\__,_|_| |_|<br>Nope. Not happening.</pre></html>"
	};
}

