// JavaScript source code
d3.selectAll('click-me')
    .on('click', () => {
        if (this.style.backgroundColor) {
            this.style.backgroundColor = '';
        } else {
            this.style.backgroundColor = 'red';
        }

    });

d3.selectAll('.hover-me')
    .on('mouseover', () => {
        this.style.backgroundColor = 'yellow';
    })
    .on('mouseleave', function () {
        this.style.backgroundColor = '';
    });





