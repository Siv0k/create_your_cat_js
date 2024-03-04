import {prepareUrl} from '../utilities/url.js';
import {getCatImage} from "../api/api.js";

const toggleTypeParameters = (typeInput) => {
	const textBlock = document.getElementById('textBlock');

	if (typeInput.value === 'square' || typeInput.value === '') {
		textBlock.style.display = 'block';
	} else {
		textBlock.style.display = 'none';
	}

}

const toggleCustomParameters = (filterInput) => {
	const customParametersBlock = document.getElementById('customParameters');
	const labelType = document.getElementById('labelType');
	const typeInput = document.getElementById('type');
	const customParameterInputs = customParametersBlock.getElementsByClassName('customParamInput');

	if (filterInput.value === 'custom') {
		customParametersBlock.style.display = 'block';
		labelType.style.display = 'none'
		typeInput.value = '';
	} else {
		customParametersBlock.style.display = 'none';
		labelType.style.display = 'block'

		for (let input of customParameterInputs) {
			input.value = '';
		}
	}
}

const handleFormSubmit = async (formElements) => {
	const url = prepareUrl(formElements);
	const blob = await getCatImage(url);
	const img = document.createElement('img');

	img.id = 'catImg';
	img.src = URL.createObjectURL(blob);
	formElements.imageBlock.appendChild(img);
}

export {handleFormSubmit, toggleCustomParameters, toggleTypeParameters}
