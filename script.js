// Typing effect
new Typed("#ketik",{
  strings:["Najma Afida Najih","Web Lover","Creative Girl"],
  typeSpeed:80,
  backSpeed:50,
  loop:true
});

// LIGHTBOX
function lihat(img){
  lightbox.style.display="flex";
  view.src = img.src;
}

// FORM
function kirim(){

  if(nama.value=="" || email.value=="" || pesan.value==""){
    alert("Please complete all fields");
    return;
  }

  hasil.innerHTML =
  "Thank you, " + nama.value +
  ". Your message has been received.";
}

// COUNTER
let p=0,k=0,c=0;

setInterval(()=>{
  if(p<15) projek.innerHTML = p++;
  if(k<100) kopi.innerHTML = k++;
  if(c<4000) kode.innerHTML = c+=25;
},60);

window.addEventListener("load", ()=>{
  document.querySelector(".intro").style.opacity = 1;
});

const fsBtn = document.getElementById("fullscreenBtn");

fsBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fsBtn.innerText = "❌ Exit Fullscreen";
  } else {
    document.exitFullscreen();
    fsBtn.innerText = "⛶ Fullscreen";
  }
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.4; // volume lembut

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

  const percent = scrollY / docHeight;

  // warna pink → hitam (soft)
  const pink = [255, 95, 162];
  const dark = [20, 20, 20];

  const r = Math.round(pink[0] + (dark[0] - pink[0]) * percent);
  const g = Math.round(pink[1] + (dark[1] - pink[1]) * percent);
  const b = Math.round(pink[2] + (dark[2] - pink[2]) * percent);

  document.body.style.background = 
    `linear-gradient(135deg, rgb(${r}, ${g}, ${b}), #000000)`;
});
