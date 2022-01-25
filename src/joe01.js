export async function handler(event) {
	return {
	  statusCode: 200,
	  headers: { "Content-Type": "text/html" },
	  body: Hello, World! Cody made this change. Your request was received at ${event.requestContext.time}.\n +
	  displayProperties(event)
	};
  }
  
  function displayProperties(o) {
	return '<ul>' +
	(typeof(o) != 'object' ? o : Object.getOwnPropertyNames(o).map(p => '<li>' + p + displayProperties(o[p]) + '</li>').join('')) +
	'</ul>';
  }