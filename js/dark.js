(function() {

    var word = ['Fullstack', 'Frontend', 'Backend'];
    var element = document.getElementById('job-head');
    var wordIndex = 1;

    var resetAnimation = function() {
      element.classList.remove('flip');
    }

    setInterval(function(){
        switch (wordIndex) {
          case 0:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 1;
            setTimeout(resetAnimation, 1000);
          break;

          case 1:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 2;
            setTimeout(resetAnimation, 1000);
          break;

          case 2:
            element.classList.add('flip');
            element.textContent = word[wordIndex];
            wordIndex = 0;
            setTimeout(resetAnimation, 1000);
          break;
        }
    },3000)
}());

const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')

const itemWidth = 150
const padding = 10

prev.addEventListener('click',()=>{
  list.scrollLeft -= itemWidth + padding
})

next.addEventListener('click',()=>{
  list.scrollLeft += itemWidth + padding
})
