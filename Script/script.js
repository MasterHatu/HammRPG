// Scrolls to 100 px above the referenced section so that the title of the referenced section
// ends up in the current view even if there is an overlapping element at the top
function scrolltoSection(sectionId) {
	let element = document.getElementById(sectionId);
	let offset = 60;
	window.scrollTo({
		top: element.offsetTop - offset,
		behavior: 'smooth'
	});
}