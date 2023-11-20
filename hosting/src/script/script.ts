// Scrolls to 60 px above the referenced section so that the title of the referenced section
// ends up in the current view even if there is an overlapping element at the top
function scrolltoSection(sectionId: string): void {
	const element = document.getElementById(sectionId);
  
	if (element) {
		const offset = 60;

		window.scrollTo({
		top: element.offsetTop - offset,
		behavior: 'smooth'
		});
	} else {
		console.error(`Element with ID ${sectionId} not found.`);
	}
}

// Scrolls to 100 px above the referenced section so that the title of the referenced section
// ends up in the current view even if there is an overlapping element at the top
function scrollUp(): void {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
