const allToggleButtons = document.querySelectorAll('.toggleButton')
allToggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.hasAttribute('expandSelf')) { btn.classList.toggle('expanded') }
    document.querySelector(`.${btn.getAttribute('for')}`).classList.toggle('expanded')
  })
})

let coll = document.getElementsByClassName("custom_collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// carousel start
const carouselButtons = document.querySelectorAll('.carousel-1 .control-buttons button')
const carousel = document.querySelector('.carousel-1 .carousel-container')
var scrollParams = {
  top: 0,
  left: 0,
  behavior: "smooth",
}

function getItemsWidth() {
  let itemsWidth = document.querySelector('.carousel-1 .carousel-container .card').clientWidth
  return itemsWidth ? itemsWidth : 0
}

carouselButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let itemWidth = getItemsWidth()
    if (btn.getAttribute('to') == 'left') {
      scrollParams.left = carousel.scrollLeft - itemWidth
    } else if (btn.getAttribute('to') == 'right') {
      scrollToRight(itemWidth)
    }
    carousel.scroll(scrollParams);
    SetCarouselInterval()
  })
})

function scrollToRight(item) {
  if (Math.round(carousel.scrollWidth) - Math.round(carousel.clientWidth) == Math.round(carousel.scrollLeft)) {
    scrollParams.left = 0
  } else {
    scrollParams.left = carousel.scrollLeft + item
  }
}

if (carousel) {
  SetCarouselInterval()
}

var carouselInterval
function SetCarouselInterval() {
  clearInterval(carouselInterval)
  carouselInterval = setInterval(() => {
    let itemWidth = getItemsWidth()
    scrollToRight(itemWidth)
    carousel.scroll(scrollParams);
  }, 4000);
}

if (carousel) {

  carousel.addEventListener('mousemove', () => {
    clearInterval(carouselInterval)
  })

  carousel.addEventListener('mouseout', () => {
    if (carouselInterval) {
      SetCarouselInterval()
    }
  })
}

// carousel end

// profile image preview start

function previewImage(inp) {
  let previewDiv = document.querySelector(`#${inp.getAttribute('prevdiv')}`)
  let file = inp.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      if (previewDiv.nodeName == 'IMG') {
        previewDiv.src = this.result;
        previewDiv.style.border = '1px solid rgb(0,0,0,0.1)';
      } else {
        previewDiv.style.backgroundSize = 'cover'
        previewDiv.style.backgroundImage = `url(${this.result})`;
      }
    });

    reader.readAsDataURL(file);
  }
}


// profile image preview end


// animatedNumbers start 

const counters = document.querySelectorAll('h2.animatedNumbers');
const speed = 200;

counters.forEach(counter => {
  const animate = () => {
    const value = +counter.getAttribute('number');
    const data = +counter.innerText;

    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }

  }

  animate();
});


// animatedNumbers end

// experts 

function ShowExpertData(props) {
  const expertImg = document.querySelector('.expertInfo .teacher-img').src = props.imgUrl
  const expertPostion = document.querySelector('.expertInfo .status').innerHTML = props.position
  const fullName = document.querySelector('.expertInfo .full-name').innerHTML = props.name + ' ' + props.surename
  const biography = document.querySelector('.expertInfo .about-teacher').innerHTML = props.biography

  // if (window.innerWidth <= 560) {
  //   const divider = document.querySelector('.expertInfo').getBoundingClientRect()
  //   const scrollTO = window.scrollY + divider.top - 30
  //   window.scroll({ top: scrollTO, left: 0, behavior: 'smooth' })
  // }
}

const expertsCards = document.querySelectorAll('.experts .images div')
expertsCards.forEach(obj => {
  obj.addEventListener('mouseover', () => {

    const data = {
      name: obj.getAttribute('name'),
      surename: obj.getAttribute('surename'),
      position: obj.getAttribute('position'),
      imgUrl: obj.querySelector('img').src,
      biography: obj.getAttribute('biography')
    }

    console.log(data.biography)
    ShowExpertData(data)
  }, false)
})