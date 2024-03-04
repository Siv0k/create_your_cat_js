const getCatImage = async (url) => {
	const response = await fetch(url);
	return await response.blob();
}

export {getCatImage};