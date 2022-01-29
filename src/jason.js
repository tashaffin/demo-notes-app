


export async function main(event) {
    // Request body is passed in as a JSON encoded string in 'event.body'
    const data = JSON.parse(event.body);
    
	

	

        return {
            statusCode: 200,
            body: JSON.stringify(`Hello ${data.name}, stop asking me for stuff!`)
        
		} 
		
}