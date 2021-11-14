const header = document.getElementById('cHeader')
const title = document.getElementById('titulo')
const excerpt = document.getElementById('cExp')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('nome')
const date = document.getElementById('data')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="./img/pc_old.jpg" alt="fundo" />'
  title.innerHTML = 
  ' <a class="copyR" href="https://hugoresende27.github.io/portfolio/" target="blank"> Portefolio </a> | <a class="copyR" href="https://www.linkedin.com/in/hugo-resende-781ab1111/" target="blank"> LinkedIn </a> | <a  class="copyR" href="https://github.com/hugoresende27" target="blank"> GitHub </a>'
  excerpt.innerHTML =
    'Junior Software Developer, student of programming and web developer'
  profile_img.innerHTML =
    '<img src="./img/eu.jpg"  alt="eu" />'
  name.innerHTML = 'Hugo Resende'
  date.innerHTML = 'Oct 02, 1988'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}