export default function flash(element) {
	requestAnimationFrame(() => {
		element.style.transition = 'none';
		element.style.color = '#5598D0';
		element.style.backgroundColor = '##f0f0f0;';

		setTimeout(() => {
			element.style.transition = 'color 1s, background 1s';
			element.style.color = '';
			element.style.backgroundColor = '';
		});
	});
}