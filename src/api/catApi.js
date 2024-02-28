const URLForTags = 'https://cataas.com/api/tags';

const getTags = async () => {
	const response = await fetch(URLForTags);
	return await response.json();
};

const getCatImage = async (url) => {
	const response = await fetch(url);
	return await response.blob();
}

export {getTags, getCatImage};