import {hexToRgb} from "/src/utilities/utilities.js";

const URL = 'https://cataas.com/cat';

const getURL = (formElements) => {
	const gif = formElements.gifCheckbox.checked ? '/gif' : '';
	const tag = !formElements.gifCheckbox.checked && formElements.tagSelect.value ? `/${formElements.tagSelect.value}` : '';
	const textURL = formElements.textInput.value ? `/says/${formElements.textInput.value}` : '';

	const rgb = hexToRgb(formElements.colorInput.value);

	const parameters = new URLSearchParams();
	const fields = [
		{input: formElements.fontSizeInput, param: 'fontSize'},
		{input: formElements.textColorInput, param: 'fontColor'},
		{input: formElements.typeInput, param: 'type'},
		{input: formElements.filterInput, param: 'filter'},
		{input: formElements.brightnessInput, param: 'brightness'},
		{input: formElements.lightnessInput, param: 'lightness'},
		{input: formElements.saturationInput, param: 'saturation'},
		{input: formElements.hueInput, param: 'hue'},
		{input: {value: rgb.r}, param: 'r'},
		{input: {value: rgb.g}, param: 'g'},
		{input: {value: rgb.b}, param: 'b'},
		{input: formElements.widthInput, param: 'width'},
		{input: formElements.heightInput, param: 'height'}
	];

	fields.forEach(({input, param}) => {
		if (input.value) {
			parameters.append(param, input.value);
		}
	});

	const newUrl = URL + gif + tag + textURL;

	return newUrl + '?' + parameters.toString();
};

export {getURL};