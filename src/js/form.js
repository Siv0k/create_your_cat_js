import {hexToRgb} from "./utilities/utilities.js";
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.min.css';

const getTags = async (formElements) => {
	const response = await fetch('https://cataas.com/api/tags');
	const tags = await response.json();
	tags.forEach(tag => {
		const option = document.createElement('option');
		option.value = tag;
		option.text = tag;
		formElements.tagSelect.appendChild(option);
	});
	new Choices('#tag');
};

const getURL = (formElements) => {
	const gif = formElements.gifCheckbox.checked ? '/gif' : '';
	const tag = !formElements.gifCheckbox.checked && formElements.tagSelect.value ? `/${formElements.tagSelect.value}` : '';
	const textURL = formElements.textInput.value ? `/says/${formElements.textInput.value}` : '';

	const rgb = hexToRgb(formElements.colorInput.value);

	const parameters = {
		fontSize: formElements.textInput.value ? `fontSize=${formElements.fontSizeInput.value}` : '',
		textColor: formElements.textInput.value ? `fontColor=${formElements.textColorInput.value}` : ``,
		type: formElements.typeInput.value ? `type=${formElements.typeInput.value}` : '',
		filter: formElements.filterInput.value ? `filter=${formElements.filterInput.value}` : '',
		brightness: formElements.brightnessInput.value ? `brightness=${formElements.brightnessInput.value}` : '',
		lightness: formElements.lightnessInput.value ? `lightness=${formElements.lightnessInput.value}` : '',
		saturation: formElements.saturationInput.value ? `saturation=${formElements.saturationInput.value}` : '',
		hue: formElements.hueInput.value ? `hue=${formElements.hueInput.value}` : '',
		red: rgb.r ? `r=${rgb.r}` : '',
		green: rgb.g ? `g=${rgb.g}` : '',
		blue: rgb.b ? `b=${rgb.b}` : '',
		width: formElements.widthInput.value ? `width=${formElements.widthInput.value}` : '',
		height: formElements.heightInput.value ? `height=${formElements.heightInput.value}` : '',
	};

	let url = `https://cataas.com/cat${gif + tag + textURL}`;
	let isFirstParameter = true;

	for (let key in parameters) {
		if (parameters[key]) {
			if (isFirstParameter) {
				url += '?' + parameters[key];
				isFirstParameter = false;
			} else {
				url += '&' + parameters[key];
			}
		}
	}

	return url;
};

const handleFormSubmit = async (formElements) => {
	const url = getURL(formElements);
	const response = await fetch(url);
	const blob = await response.blob();
	const oldImg = document.getElementById('catImg');
	const img = document.createElement('img');

	if (oldImg) {
		oldImg.remove();
	}

	img.id = 'catImg'; //
	img.src = URL.createObjectURL(blob);
	document.body.appendChild(img);
}

const toggleCustomParameters = (filterInput) => {
	const customParametersDiv = document.getElementById('customParameters');
	const labelType = document.getElementById('labelType');

	if (filterInput.value === 'custom') {
		customParametersDiv.style.display = 'block';
		labelType.style.display = 'none'
	} else {
		customParametersDiv.style.display = 'none';
		labelType.style.display = 'block'
	}
}

export {handleFormSubmit, toggleCustomParameters, getTags}