const hamburger = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const { body } = document;
const closeMenu = document.getElementById('close-mobile-menu');
const moreBtn = document.getElementById('more-speakers');

function showMoreSpeakers() {
  moreBtn.style.display = 'none';
  const speakerSection = document.getElementsByClassName('speakers')[0];
  const speakersSec = document.querySelector('.speakers');

  speakersSec.style.height = '60vh';
  const speakers = [
    {
      name: 'Zinedine Zidane',
      image: 'images/zizou.jpg',
      state: 'Real Madrid',
      repute: 'Only manager to win UCL 3-Peat',
    },
    {
      name: 'Antonio Conte',
      image: 'images/conte.jpg',
      state: 'Juventus',
      repute: 'Started and ended Juves Italian dominance',
    },
    {
      name: 'Roberto Mancini',
      image: 'images/mancini.jpg',
      state: 'Manchester City',
      repute: 'Ended Alex Fergusons red paint in Manchester',
    },
    {
      name: 'Jurgen Klopp',
      image: 'images/jurgen.jpg',
      state: 'Dortmund',
      repute: 'Defied the odds to win the league in Germany',
    },
  ];

  speakers.forEach((speaker) => {
    const template = `<div class="speaker-row">
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
    speakerSection.innerHTML += template;
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

if (moreBtn != null) {
  moreBtn.addEventListener('click', showMoreSpeakers);
}

(function fillSpeakers() {
  const footer = document.getElementById('bottom-content');
  const speakers = [
    {
      name: 'Carlo Ancelotti',
      image: 'images/carlo.jpg',
      state: 'Real Madrid',
      repute: 'Only manager to win all 5 leagues',
    },
    {
      name: 'Pep Guardiola',
      image: 'images/pepGuardiola.jpg',
      state: 'Barcelona',
      repute: 'Won 8 League titles as manager',
    },
    {
      name: 'Zinedine Zidane',
      image: 'images/zizou.jpg',
      state: 'Real Madrid',
      repute: 'Only manager to win UCL 3-Peat',
    },
    {
      name: 'Antonio Conte',
      image: 'images/conte.jpg',
      state: 'Juventus',
      repute: 'Started and ended Juves Italian dominance',
    },
    {
      name: 'Roberto Mancini',
      image: 'images/mancini.jpg',
      state: 'Manchester City',
      repute: 'Ended Alex Fergusons red paint in Manchester',
    },
    {
      name: 'Jurgen Klopp',
      image: 'images/jurgen.jpg',
      state: 'Dortmund',
      repute: 'Defied the odds to win the league in Germany',
    },
  ];
  const speakersSection = document.getElementsByClassName('speakers')[0];

  for (let i = 0; i < speakers.length; i += 2) {
    const speakerMarkUp = `
            <div class="speakers-container">
                <div class="speaker-row">
                    <div class="speaker-avatar">
                        <img src="${speakers[i]?.image}" alt="Football manager">
                    </div>
                    <div class="speaker-details">
                        <p class="name">${speakers[i]?.name}</p>
                        <p class="state">${speakers[i]?.state}</p>
                        <div class="break"></div>
                        <p class="repute">${speakers[i]?.repute}</p>
                    </div>
                </div>
                <div class="speaker-row">
                    <div class="speaker-avatar">
                        <img src="${speakers[i + 1]?.image}" alt="Football manager">
                    </div>
                    <div class="speaker-details">
                        <p class="name">${speakers[i + 1]?.name}</p>
                        <p class="state">${speakers[i + 1]?.state}</p>
                        <div class="break"></div>
                        <p class="repute">${speakers[i + 1]?.repute}</p>
                    </div>
                </div>
            </div>`;

    speakersSection.innerHTML += speakerMarkUp;
  }

  const content = `
                <section class="mobile-partners part-home">
                    <hr>
                    <h2>Partners</h2>
                    <div class="underline"></div>
                    <div class="partners-wrap">
                      <img src="images/mozilla-logo.PNG" alt="Google logo">
                      <img src="images/google-logo.PNG" alt="Kakao logo">
                      <img src="images/daum-logo.PNG" alt="lumen logo">
                    </div>
                    <div class="partners-sub">
                      <img src="images/naver-logo.PNG" alt="reho logo">
                      <img src="images/air-logo.PNG" alt="mozilla logo">
                    </div>
                </section>
        
                <section class="partners">
                    <h2>Partners</h2>
                    <div class="underline"></div>
                    <div class="part-cont">
                        <img src="images/mozilla-logo.PNG" alt="Google logo">
                        <img src="images/google-logo.PNG" alt="Kakao logo">
                        <img src="images/daum-logo.PNG" alt="lumen logo">
                        <img src="images/naver-logo.PNG" alt="reho logo">
                        <img src="images/air-logo.PNG" alt="mozilla logo">
                    </div>
                </section>
        
                <section class="footer part-home">
                    <div class="container">
                        <img src="images/cckfoot.PNG" alt="soccer summit logo">
                        <p>2023 Global soccer summit<br> Kisumu International
                        sports zone Arena. </p>
                    </div>
                </section>
            </div> `;

  footer.innerHTML += content;
}());

(function moreSpeakers() {
  const speakersSec = document.querySelector('.speakers');
  const bottomCont = document.getElementById('bottom-content');
  speakersSec.style.height = '5vh';
  speakersSec.style.transform = 'translateY(60px)';
  bottomCont.style.transform = 'translateY(-100px)';

  const speakers = document.querySelectorAll('.speaker-row');
  const numberS = 2;

  const fragment = document.createDocumentFragment();

  if (window.innerWidth <= 768) {
    for (let i = 0; i < numberS; i += 1) {
      if (speakers[i] !== null && speakers[i] !== undefined) {
        fragment.appendChild(speakers[i].cloneNode(true));
      }
    }
    while (speakersSec.firstChild) {
      speakersSec.firstChild.remove();
    }
    speakersSec.appendChild(fragment);
  }
}());
