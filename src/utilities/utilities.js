const hexToRgb = (hex) => {
	hex = hex.replace(/^#/, '');
	return {
		r: parseInt(hex.substring(0, 2), 16),
		g: parseInt(hex.substring(2, 4), 16),
		b: parseInt(hex.substring(4, 6), 16)
	};
};

const saveImg = () => {
	const catImg = document.getElementById('catImg');
	const link = document.createElement('a');
	link.href = catImg.src;
	link.download = 'cat_image.png';
	link.click();
}

const removeOldImg = () => {
	const oldImg = document.getElementById('catImg');
	if (oldImg) {
		oldImg.remove();
	}
}

export {hexToRgb, saveImg, removeOldImg}