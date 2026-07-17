async function gerarCodigo(){
	let promptTexto = document.querySelector("#prompt-usuario").value

	let resposta = await fetch(endereco, {
		method: "POST",
		headers: {
			"Content-Type" : "application/json",
			"Authorization" : `Bearer 
	},
		body: JSON.stringify({
			"model": "openai/gpt-oss-120b",
			"messages": [
				{
					"role": "user",
					"content" : prompt-usuario
				},
				{
					"role" : "system",
					"content" : "`Você é um designer web premiado e Programador. 
Crie uma landing page COMPLETA e VISUALMENTE IMPRESSIONANTE para o negócio descrito.

                    Regras de resposta:
                    - Responda SOMENTE com HTML e CSS puros
                    - Não use crases, markdown ou explicações
                    - Não use tags <img>

                    Identidade visual (capriche e surpreenda):
                    - Invente uma paleta de cores única que combine com a essência do negócio
                    - Escolha uma Google Font marcante via @import
                    - Use emojis grandes no lugar de imagens
                    - Use CSS moderno: gradientes, sombras, animações sutis, layout generoso, tipografia forte

                    Estrutura da página:
                    - Header com nome do negócio e menu
                    - Hero impactante com título, subtítulo e botão CTA
                    - Seção de diferenciais com emojis
                    - Depoimento de cliente
                    - Footer com contato

Todo o conteúdo em português, criativo e específico para o negócio.`"
				}
			],
		})
	})
let dados = await resposta.json()
let final = dados.choices[0].message.content
console.log(final)
console.log(dados)

document.getElementById("resultado").textContent = final
}


