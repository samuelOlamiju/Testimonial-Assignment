'use strict'

const reviews = [
  {
    author: "Samuel Olamiju",
    job: "FullStack Developer",
    img: "./assets/Emrys.jpeg",
    info: "Samuel is a fullstack developer with 3 years experience."
  },
  {
    author: "Susan Smith",
    job: "Web Developer",
    img: "./assets/Emrys.jpeg",
    info: "Susan is a frontend developer with 3 years experience."
  },
  {
      author: "John Doe",
    job: "Designer",
    img: "./assets/Emrys.jpeg",
    info: "John is a UI/UX designer who loves minimal layouts."
  },
  {
    author: "Peter Jones",
    job: "Intern",
    img: "./assets/Emrys.jpeg",
    info: "Peter is an intern learning JavaScript and React."
  }
];

const img = document.querySelector("#person-img")
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")

img.src = reviews[0].img;
author.textContent = reviews[0].author;
job.textContent = reviews[0].job;
info.textContent = reviews[0].info;
