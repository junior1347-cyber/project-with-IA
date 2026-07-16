const apiKey = "";
if (!apiKey){
	console.error("Erro:GROQ_API_KEY não foi encontrada!")
}

let endereco = "https://api.groq.com/openai/v1/chat/completions"

async function gerarCodigo(){
	let promptTexto = document.querySelector("#prompt-usuario").value

	let A = await fetch(endereco, {
		method: "POST",
		headers: {
			"Content-Type" : "application/json",
			"Authorization" :'Bearer ${apiKey}'
	},
		body: JSON.stringify({
			"model": "openai/gpt-oss-120b",
			"messages": [
				{
					"role": "user",
					"content" : "promptTexto"
				},
				{
					"role" : "system",
					"content" : ""
				}
			],
		})
	})
}

