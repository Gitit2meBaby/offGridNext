//OBSERVERS FOR SLIDE IN AND UP ELEMENTS
function handleListItemIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-left');
            console.log('observed')

            observer.unobserve(entry.target);
        }
    });
}
// Initialize Intersection Observers for each class
const bydListItems = document.querySelectorAll('.bydListItem')

const slideLeftObserver = new IntersectionObserver(handleListItemIntersection, {
    threshold: 1,
});
bydListItems.forEach((element) => {
    slideLeftObserver.observe(element);
});
