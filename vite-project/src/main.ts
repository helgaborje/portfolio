import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="nav" id="myTopnav">
    <a href="#work">WORK</a>
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT</a>
    <a href="#" id="burgerIcon" class="icon" >
      <i class="fa-solid fa-burger fa-xl"></i>
    </a>
  </nav>
<header class="header-container">
<img src="src/images/header.webp" alt="header-image">
<div class="headertext">
  <h1>Hello
    <br>
    <span>I am Helga</span>
    <br>
    Frontend Developer
  </h1>
</div>
</header>

<!-- Work -->
<main>
<section class="work" id="work">
  <div class="gallery-container">
  <div class="row">

  <div class="col-12 col-md-6 col-lg-3">
  <div class="hover-container">
    <img src="src/images/sibel-shop.png" alt="Sibel Shop" class="image">
    <div class="hover-img">
      <div class="hover-text">
        <h3>Typescript, Angular</h3>
        <p>Individual school assignment on the education Frontend Developer</p>
      </div>
      <a href="https://sibel-shop.vercel.app/" title="Link to Sibel Shop" target="_blank" class="button">Visit
        site</a>
    </div>
  </div>
  </div>

    <div class="col-12 col-md-6 col-lg-3">
      <div class="hover-container">
        <img src="src/images/swapi.png" alt="Swapi" class="image">
        <div class="hover-img">
          <div class="hover-text">
            <h3>Typescript, React</h3>
            <p>Individual school assignment on the education Frontend Developer</p>
          </div>
          <a href="https://swapi-hb.netlify.app/" title="Link to Swapi" target="_blank" class="button">Visit
            site</a>
        </div>
      </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="hover-container">
          <img src="src/images/tmdb.png" alt="TMDB" class="image">
          <div class="hover-img">
            <div class="hover-text">
              <h3>TypeScript, React</h3>
              <p>Individual school assignment on the education Frontend Developer</p>
            </div>
            <a href="https://tmdb-hb.netlify.app/" title="Link to TMDB" target="_blank" class="button">Visit
              site</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="hover-container">
          <img src="src/images/bortakvall-700x500.png" alt="Mockup of Bortakvall Webshop" class="image">
          <div class="hover-img">
            <div class="hover-text">
              <h3>Typescript, HTML & CSS</h3>
              <p>Group school assignment on the education Frontend Developer</p>
            </div>
            <a href="https://bortakvallwebstore.netlify.app/" title="Link to Bortakvall webstore" target="_blank"
              class="button">Visit
              site</a>
            <a href="https://github.com/Mabi-xD/bortakvall-webstore" title="Link to page on Github" target="_blank"
              class="button">Visit
              GitHub</a>
          </div>
      </div>
    </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="hover-container" >
          <img src="src/images/quiz-700x500.png" alt="Mockup of Student quiz site" class="image">
          <div class="hover-img">
            <div class="hover-text">
              <h3>JavaScript, HTML & CSS</h3>
              <p>Individual school assignment on the education Frontend Developer</p>
            </div>
            <a href="https://student-quiz.netlify.app/" title="Link to Student Quiz page" target="_blank"
              class="button">Visit
              site</a>
            <a href="https://github.com/helgaborje/student-quiz" title="Link to Student Quiz page on Github"
              target="_blank" class="button">Visit
              GitHub</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="hover-container">
          <img src="src/images/portfolio-700x500.webp" alt="Mockup of portfolio site" class="image">
          <div class="hover-img">
            <div class="hover-text">
              <h3>HTML & CSS</h3>
              <p>Individual school assignment on the education Frontend Developer</p>
            </div>
            <a href="https://github.com/helgaborje/portfolio" title="Link to portfolio page on Github" target="_blank"
              class="button">Visit
              GitHub</a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="hover-container">
          <img src="src/images/barbershop-700x500.webp" alt="Mockup of Barbershop site" class="image">
          <div class="hover-img">
            <div class="hover-text">
              <h3>HTML & CSS</h3>
              <p>Individual school assignment on the education Frontend Developer</p>
            </div>
            <a href="https://mhelgaborje-barbershop.netlify.app/" title="Link to Barbershop fake homepage"
              target="_blank" class="button">Visit
              site</a>
            <a href="https://github.com/helgaborje/barbershop.github.io" title="Link to Barbershop page on Github"
              target="_blank" class="button">Visit
              GitHub</a>
          </div>
        </div>
      </div>

    <div class="col-12 col-md-6 col-lg-3">
      <div class="hover-container">
        <img src="src/images/ammarnas-700x500.webp" alt="Mockup of Ammarnas site" class="image">
        <div class="hover-img">
          <div class="hover-text">
            <h3>Web Design</h3>
            <p>Individual school assignment on the education Digital Content Designer (Link to external site)</p>
          </div>
          <a href="https://helgaborjesson.wixsite.com/portfolio/ammarnaes" title="Link to external portfolio site"
            target="_blank" class="button">Visit
            project</a>
        </div>
      </div>
    </div>

    <div class="col-12 col-md-6 col-lg-3">
      <div class="hover-container">
        <img src="src/images/thomas-cook-700x500.webp" alt="Mockup of work from Thomas Cook" class="image">
        <div class="hover-img">
          <div class="hover-text">
            <h3>Graphic Design</h3>
            <p>A selection of work from my time as a graphic designer at Thomas Cook/Ving (Link to external site)
            </p>
          </div>
          <a href="https://helgaborjesson.wixsite.com/portfolio/thomascook" title="Link to external portfolio site"
            target="_blank" class="button">Visit
            project</a>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<!-- About -->
<div class="about-container">
</div>
<div class="about" id="about">
  <img src="src/images/profilbild.webp" alt="helga" class="about-img">
  <div class="about-text">
    <p>Frontend developer student based in Malmö, Sweden.
      A background in graphic design, both print and digital.
      A problem solver and a team player.
      With roots in Swedish Lapland makes me a calm, not very stressful person and a really good snow mobile driver.
    </p>
  </div>
</div>
<!-- Skills -->
<div class="skills">
  <i class="fa-brands fa-angular"></i>
  <i class="fa-brands fa-react"></i>
  <i class="fa-brands fa-square-js"></i>
  <i class="fa-brands fa-html5"></i>
  <i class="fa-brands fa-css3-alt"></i>
  <i class="fa-brands fa-figma"></i>
  <img src="src/icons/vs-code.png" alt="">
  <img src="src/icons/after-effects.png" alt="">
  <img src="src/icons/illustrator.png" alt="">
  <img src="src/icons/indesign.png" alt="">
  <img src="src/icons/photoshop.png" alt="">
  <img src="src/icons/premiere-pro.png" alt="">
</div>
</main>

<!-- Contact -->
<footer class=" contact" id="contact">
<ul>
  <li><a href="https://www.linkedin.com/in/helga-b%C3%B6rjesson-8342a8128/" target="_blank" aria-label="linkedin">
      <i class="fa-brands fa-linkedin"></i></a></li>
  <li><a href="https://github.com/helgaborje" target="_blank" aria-label="github">
      <i class="fa-brands fa-github"></i></a></li>
  <li><a href="mailto:helgaborjesson@gmail.com" target="_blank" aria-label="e-mail">
      <i class="fa-solid fa-envelope fa-2x"></i></a></li>
</ul>
</footer>
<div class="copy">© 2023 Helga Börjesson</div>
`


// document.addEventListener('DOMContentLoaded', () => {
//   const burgerIcon = document.getElementById('burgerIcon');
//   if (burgerIcon) {
//     burgerIcon.addEventListener('click', (event) => {
//       event.preventDefault(); // Prevent default behavior
//       navbar();
//     });
//   }
// });


// export const navbar = () => {
//   const x = document.getElementById("myTopnav");
//   if (x?.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x!.className = "nav";
//   }
// };

// export const navbar = () => {
//   console.log('navbar');
//   const x = document.getElementById("myTopnav");
//   if (x?.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x!.className = "nav";
//   }
// };

// // Attach the navbar function to the global scope
// (window as any).navbar = navbar;

// main.ts

// export const navbar = () => {
//   const x = document.getElementById("myTopnav");
//   if (x?.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x!.className = "nav";
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {
//   const burgerIcon = document.querySelector('.icon');
//   if (burgerIcon) {
//     burgerIcon.addEventListener('click', () => {
//       navbar();
//     });
//   }
// });


// function navbar() {
//   const x = document.getElementById("myTopnav");
//   if (x.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x.className = "nav";
//   }
// }

// main.ts

document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.getElementById('burgerIcon');
  if (burgerIcon) {
    burgerIcon.addEventListener('click', () => {
      const x: any = document.getElementById("myTopnav");
      if (x.className === "nav") {
        x.className += " responsive";
      } else {
        x.className = "nav";
      }
    });
  }
});
