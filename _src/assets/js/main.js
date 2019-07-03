'use strict';

const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

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
  return (
    text.innerHTML = cars
  )
  }
btn.addEventListener('click', atasco);

const twitter = document.querySelector('.twitter');
const twitterLink = 'https://twitter.com/intent/tweet';
const hashtags = 'MadridCentral';
const content =  '@AlmeidaPP_';

const createTweet = () => {
  const tweet = `${twitterLink}?text=${text.innerHTML};hashtags=${hashtags}%20${content}`;
  twitter.href = tweet;
}

twitter.addEventListener('click', createTweet);
