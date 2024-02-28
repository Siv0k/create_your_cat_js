import {getURL} from '../utilities/url.js';
import {getCatImage} from "../api/catApi.js";
import {getTags} from "../api/catApi.js";

const tagOptions = async (formElements) => {
	const tags = await getTags()
	tags.forEach(tag => {
		const option = document.createElement('option');
		option.value = tag;
		option.text = tag;
		formElements.tagSelect.appendChild(option);
	});
};


const toggleCustomParameters = (filterInput) => {
	const customParametersDiv = document.getElementById('customParameters');
	const labelType = document.getElementById('labelType');
	const typeInput = document.getElementById('type');

	if (filterInput.value === 'custom') {
		customParametersDiv.style.display = 'block';
		labelType.style.display = 'none'
		typeInput.value = '';
	} else {
		customParametersDiv.style.display = 'none';
		labelType.style.display = 'block'
	}
}

const handleFormSubmit = async (formElements) => {
	const url = getURL(formElements);
	console.log(url);
	const blob = await getCatImage(url);
	const img = document.createElement('img');

	img.id = 'catImg';
	const objectURL = URL.createObjectURL(blob);
	img.src = objectURL;
	img.onload = () => URL.revokeObjectURL(objectURL);
	document.body.appendChild(img);
}

export {handleFormSubmit, toggleCustomParameters, tagOptions}
