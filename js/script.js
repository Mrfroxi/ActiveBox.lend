document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle("lock");
  })
  document.querySelector('.menu').classList.toggle("animate");