
simplyCountdown('.simply-countdown', {

    year: 2023, // required
    month: 10, // required
    day: 26, // required
    hours: 10, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'Hari', plural: 'Hari' },
        hours: { singular: 'Jam', plural: 'Jam' },
        minutes: { singular: 'Menit', plural: 'Menit' },
        seconds: { singular: 'Detik', plural: 'Detik' }
    },
});




// const hamberger = document.querySelector('.navbar-toggler');
const stickyTop = document.querySelector('.sticky-top')
const offcanvas = document.querySelector('.offcanvas');

stickyTop.addEventListener('show.bs.offcanvas', function()
{
stickyTop.style.overflow = 'visible';
});

offcanvas.addEventListener('hidden.bs.offcanvas', function ()
{
stickyTop.style.overflow = 'hidden';
});


const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

function disableScroll()
{
const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
const scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

window.onscroll = function()
{
  window.scrollTo(scrollTop, scrollLeft);
}

rootElement.style.scrollBehavior = "auto";
}

function enableScroll()
{
window.onscroll = function()
{

}

rootElement.style.scrollBehavior = "smooth";
// localStorage.setItem('opened', 'true');
playAudio();
}

function playAudio()
{
song.volume = 0.1;
audioIconWrapper.style.display = 'flex';
song.play();
isPlaying = true;
}

audioIconWrapper.onclick = function ()
{
if (isPlaying)
{
  song.pause();
  audioIcon.classList.remove('bi-disc');
  audioIcon.classList.add('bi-pause-circle');
}
else
{
  song.play();
  audioIcon.classList.add('bi-disc');
  audioIcon.classList.remove('bi-pause-circle');
}

isPlaying = !isPlaying;
}
// if (!localStorage.getItem('opened'))
// {
//   disableScroll();
// }
disableScroll();

window.addEventListener("load", function() {
const form = document.getElementById('my-form');
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(form);
  const action = e.target.action;
  fetch(action, {
    method: 'POST',
    body: data,
  })
  .then(() => {
    alert("Konfirmasi kehadiran berhasil terkirim!");
  })
});
});


const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';

const namaContainer = document.querySelector('.hero h4 span');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ',');

document.querySelector('#nama').value = nama;

/**
                    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
                    /*
                    var disqus_config = function () {
                    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                    };
                    */
                    (function() { // DON'T EDIT BELOW THIS LINE
                      var d = document, s = d.createElement('script');
                      s.src = 'https://aryu-wedding.disqus.com/embed.js';
                      s.setAttribute('data-timestamp', +new Date());
                      (d.head || d.body).appendChild(s);
                      })();