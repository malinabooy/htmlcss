document.addEventListener('DOMContentLoaded', function() {
    const descriptions = document.querySelectorAll('.description');
    const rands = document.querySelectorAll('.rang');

    descriptions.forEach((description, index) => {
        description.addEventListener('mouseover', () => {
            rands[index].style.display = 'none'; // Скрыть блок .rang, соответствующий данному .description
        });

        description.addEventListener('mouseout', () => {
            rands[index].style.display = ''; // Показать блок .rang, соответствующий данному .description
        });
    });
});