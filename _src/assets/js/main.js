'use strict';

const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const copyBtn = document.querySelector('.copy');

const emojis = [
  '🚜', '🚗', '🛴', '💨',
  '🚕', '🚙', '🚌', '🏎',
  '🚓', '🚒', '🚚', '🚛',
  '🛵', '🏍', '🌫', '🌫',
  '🌫', '🌫', '💨', '💨',
  '💨', '💨', '🚍', '🚘',
  '🚖', '🚔', '🚗', '🏎',
  '🚗', '🚚', '🚙', '🚒',
  '🚛', '💨', '🛵', '🛵'
];

const atasco = () => {
  let cars='';
  for (let i = 1; i<100; i++) {
    cars += emojis[Math.floor(Math.random() *  emojis.length)]
  }
  twitter.classList.remove('hidden');
  copyBtn.classList.remove('hidden');
  return (
    text.innerHTML = cars
  )
}
btn.addEventListener('click', atasco);

const copied = document.querySelector('.copied');
const twitter = document.querySelector('.twitter');
const twitterLink = 'https://twitter.com/intent/tweet';
const hashtags = 'MadridCentral';
const content =  '@AlmeidaPP_';

const createTweet = () => {
  const tweet = `${twitterLink}?text=${text.innerHTML}%20${content}%20#MadridCentral`;
  twitter.href = tweet;
}

function copy() {
  let copyText = document.getElementById("mainText");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  copied.classList.remove('hidden');
  setTimeout(function(){
    copied.classList.add('hidden')
  }, 1500);
}

twitter.addEventListener('click', createTweet);
copyBtn.addEventListener('click', copy);
