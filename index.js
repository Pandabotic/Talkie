var titles = {
  0: {
    title: "Inside Out 2",
    description: "Joy, Sadness, Anger, Fear and Disgust have been running a successful operation by all accounts. However, when Anxiety shows up, they aren't sure how to feel."
  },
  1: {
    title: "Monsters University",
    description: "A look at the relationship between Mike Wazowski and James P. Sullivan during their days at Monsters University, when they weren't necessarily the best of friends."
  },
  2: {
    title: "Finding Nemo",
    description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home."
  },
  3: {
    title: "Turning Red",
    description: "A thirteen-year-old girl named Mei Lee is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not enough, whenever she gets overly excited she transforms into a giant red panda."
  },
  4: {
    title: "Soul",
    description: "Joe is a middle-school band teacher whose life hasn't quite gone the way he expected. His true passion is jazz. But when he travels to another realm to help someone find their passion, he soon discovers what it means to have soul."
  },
  5: {
    title: "Ratatoullie",
    description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant."
  },
};






//Thumbs Swiper
var thumbsSwiper = new Swiper('.thumbsSwiper',{
  spaceBetween: 10,
  slidesPerView: 5,
  breakpoints:{
    200:{
      slidesPerView: 2
    },
    400:{
      slidesPerView: 3
    },
    600:{
      slidesPerView: 4
    },
    1100:{
      slidesPerView: 6
    },
  },
  freeMode: true,
  watchSlidesProgress: true,
});

//Swiper
const swiper = new Swiper('.homeSwiper', {
  // Optional parameters
  spaceBetween: 0,
  effect:"fade",

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Connect Thumbnail Slider to Banner Slider
  thumbs:{
    swiper: thumbsSwiper
  }
});

//Change Title & Description Names
var changeTitle = (index)=>{
  var title = document.querySelector('#title');
  var description = document.querySelector('#description');
  title.innerHTML = `<h1>${titles[index].title}</h1>`;
  description.innerHTML = `<p>${titles[index].description}</p>`;
};

//activeIndexChange is a swiper event
swiper.on('activeIndexChange', function(){
  changeTitle(swiper.activeIndex);
});

const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('.navbar')

menuIcon.onclick = function() {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle('active');
};

