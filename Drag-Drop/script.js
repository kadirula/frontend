const dragAndDropItems = document.getElementById('users');

new Sortable(dragAndDropItems, {
    animation: 350,
    chosenClass: 'user-card--chosen',
    dragClass: 'user-card--drag'
});