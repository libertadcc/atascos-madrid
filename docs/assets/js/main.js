"use strict";const btn=document.querySelector(".btn"),text=document.querySelector(".text"),copyBtn=document.querySelector(".copy"),emojis=["🚜","🚗","🛴","💨","🚕","🚙","🚌","🏎","🚓","🚒","🚚","🚛","🛵","🏍","🌫","🌫","🌫","🌫","💨","💨","💨","💨","🚍","🚘","🚖","🚔","🚗","🏎","🚗","🚚","🚙","🚒","🚛","💨","🛵","🛵"],atasco=()=>{let t="";for(let e=1;e<100;e++)t+=emojis[Math.floor(Math.random()*emojis.length)];return twitter.classList.remove("hidden"),copyBtn.classList.remove("hidden"),text.innerHTML=t};btn.addEventListener("click",atasco);const copied=document.querySelector(".copied"),twitter=document.querySelector(".twitter"),twitterLink="https://twitter.com/intent/tweet",hashtags="MadridCentral",content="@AlmeidaPP_",createTweet=()=>{const t=`${twitterLink}?text=${text.innerHTML};hashtags=${hashtags}%20${content}`;twitter.href=t};function copy(){let t=document.getElementById("mainText");var e=document.createElement("textarea");e.value=t.textContent,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.remove(),copied.classList.remove("hidden"),setTimeout(function(){copied.classList.add("hidden")},1500)}twitter.addEventListener("click",createTweet),copyBtn.addEventListener("click",copy);