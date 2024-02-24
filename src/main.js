import './styles/style.css';
import {handleFormSubmit, toggleCustomParameters, getTags} from './js/form.js';
import {saveImg} from "./js/utilities/utilities.js";

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
};

await getTags(formElements);

formElements.filterInput.addEventListener('change', function () {
	toggleCustomParameters(this);
});

formElements.submitButton.addEventListener("click", async () => {
	await handleFormSubmit(formElements);
	formElements.saveButton.disabled = false;
});

formElements.saveButton.addEventListener("click", () => {
	saveImg();
});
