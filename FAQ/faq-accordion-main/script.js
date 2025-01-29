document.querySelectorAll('.common-questions > div').forEach(questions => {
    questions.addEventListener('click', function() {
        let results = this.nextElementSibling;
        let plusIcon = this.querySelector('.common-plus-icon');
        let minusIcon = this.querySelector('.common-minus-icon');


        if(results.style.display === 'block') {
            results.style.display = 'none';
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            results.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }

    })
})