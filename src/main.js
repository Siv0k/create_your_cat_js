const submitButton = document.getElementById('submit')

submitButton.addEventListener("click", () => {
	const tag = document.getElementById('tag').value;
	const text = document.getElementById('text').value;
	const url = `https://cataas.com/cat/${tag}/says/${text}`;

	fetch(url)
		.then(response => response.blob())
		.then(blob => {
			const img = document.createElement('img')
			img.src = URL.createObjectURL(blob)
			document.body.appendChild(img)
		})
})
