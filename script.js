var btn = document.querySelector('.menu');
var container = document.querySelector('.barralateral');

btn.addEventListener('click', function(){
    if(container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display === 'none' 
        container.style.display = 'block';
    }
});