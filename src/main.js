import './styles/style.css';
import {handleFormSubmit, toggleCustomParameters, tagOptions} from './js/form.js';
import {saveImg, removeOldImg} from "./utilities/utilities.js";

const formElements = {
	submitButton: document.getElementById('submit'),
	saveButton: document.getElementById('save'),
	tagSelect: document.getElementById('tag'),
	gifCheckbox: document.getElementById('gif'),
	textInput: document.getElementById('text'),
	fontSizeInput: document.getElementById('fontSize'),
	textColorInput: document.getElementById('textColor'),
	typeInput: document.getElementById('type'),
	filterInput: document.getElementById('filter'),
	brightnessInput: document.getElementById('brightness'),
	lightnessInput: document.getElementById('lightness'),
	saturationInput: document.getElementById('saturation'),
	hueInput: document.getElementById('hue'),
	colorInput: document.getElementById('RGB'),
	widthInput: document.getElementById('width'),
	heightInput: document.getElementById('height'),
	loader: document.getElementById('loader')
};

tagOptions(formElements).then(() => {
	formElements.submitButton.addEventListener("click", async () => {
		removeOldImg();
		formElements.loader.style.display = 'block';

		await handleFormSubmit(formElements);

		formElements.loader.style.display = 'none';
		formElements.saveButton.disabled = false;
	});
});

formElements.filterInput.addEventListener('change', function () {
	toggleCustomParameters(this);
});

formElements.saveButton.addEventListener("click", () => {
	saveImg();
});
