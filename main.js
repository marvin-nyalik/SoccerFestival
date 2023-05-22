const hamburger = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;
const closeMenu = document.getElementById('close-mobile-menu');
const moreBtn = document.getElementById('more-speakers');

function showMoreSpeakers(){
  moreBtn.style.display = 'none';
  const speaker_section = document.getElementsByClassName('speakers')[0]; 
  const speakers = [
    { name:'Zinedine Zidane',
      image:'images/zizou.jpg',
      state:'Real Madrid',
      repute:'Only manager to win UCL 3-Peat',
    } ,
    { name:'Antonio Conte',
      image:'images/conte.jpg',
      state:'Juventus and Inter Milan',
      repute:'Started and ended Juves Italian dominance',
    } ,
    { name:'Roberto Mancini',
      image:'images/mancini.jpg',
      state:'Manchester City',
      repute:'Ended Alex Fergusons red paint in Manchester',
    } ,
    { name:'Jurgen Klopp',
      image:'images/jurgen.jpg',
      state:'Liverpool and Dortmund',
      repute:'Defied the odds to win the league in Germany and England',
    } ,
  ];

  speakers.forEach(function(speaker){
   const template = 
   `<div class="speaker-row">
    <div class="speaker-avatar">
       <img src="${speaker.image}" alt="Football manager">
    </div>
    <div class="speaker-details">
       <p class="name">${speaker.name}</p>
       <p class="state">${speaker.state}</p>
       <div class="break"></div>
       <p class="repute">${speaker.repute}</p>
    </div>
    </div>`;
    speaker_section.innerHTML += template;
  });
}

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    body.style.overflow = 'scroll';
});

moreBtn.addEventListener('click', showMoreSpeakers);
