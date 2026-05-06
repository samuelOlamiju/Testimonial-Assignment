'use strict'

const reviews = [
  {
    author: "Samuel OLAMIJU",
    job: "FullStack Developer",
    img: "./assets/Samuel.jpg",
    info: "Samuel is a fullstack developer with 2 years of experience, known for building efficient and well-structured web applications. He’s also a Doctor of Pharmacy and a deep thinker who approaches every project with precision and creativity."
  },
  {
    author: "Chidera Eze",
    job: "Frontend Engineer",
    img: "./assets/Chidera.jpg",
    info: "Chidera is a frontend developer with 3 years of experience, skilled at building clean, responsive, and user-friendly web interfaces. She’s detail-oriented, creative, and consistently delivers quality work with a strong focus on user experience."
  },
  {
    author: "Shade Mary",
    job: "Designer",
    img: "./assets/Suad.jpg",
    info: "Shade is a talented UI/UX designer with a strong eye for minimal and elegant layouts. She consistently creates clean, user-friendly interfaces that balance aesthetics with functionality, making every design feel simple yet impactful."
  },
  {
    author: "Tunde Peter",
    job: "Intern",
    img: "./assets/Peter.png",
    info: "Tunde is an intern currently learning JavaScript and React, with a strong passion for growth and improvement. He’s curious, hardworking, and always eager to learn new concepts while building his skills step by step."
  },
  {
    author: "Joshua OLAMIJU",
    job: "Medical Writer",
    img: "./assets/Joshua.jpg",
    info: "Joshua is a dedicated medical doctor and writer with experience in clinical practice and healthcare communication. He combines strong clinical grounding with a passion for clear, impactful medical writing. Over the years, he has contributed to research, content strategy, and freelance medical communication projects, consistently showing excellence, discipline, and attention to detail. Driven by a clear pursuit of excellence, Joshua stands out as a thoughtful professional committed to growth and meaningful impact in healthcare."
  },
  {
    author: "Faith Ezekiel",
    job: "Fullstack Engineer",
    img: "./assets/Faith.jpg",
    info: "Faith is a self-taught full-stack developer passionate about building digital solutions that improve everyday life, especially in healthcare accessibility. She has a strong foundation in modern web technologies and consistently works on projects that reflect both creativity and problem-solving ability. With multiple repositories ranging from utility apps to full-stack systems, Faith shows consistency, adaptability, and a clear drive to grow. She is also active in sharing knowledge through tech content, making her not just a builder but also a learner who contributes meaningfully to the developer community."
  }
];

const img = document.querySelector("#person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
let index = 0;

const showReview = function(itemIndex){
    img.src = reviews[itemIndex].img;
    author.textContent = reviews[itemIndex].author;
    job.textContent = reviews[itemIndex].job;
    info.textContent = reviews[itemIndex].info;
}

window.addEventListener('DOMContentLoaded', function(){
    showReview(index)
});

nextBtn.addEventListener('click', function(){
    index++;
    if (index > reviews.length - 1){
        index = 0;
    }
    showReview(index);
})
prevBtn.addEventListener('click', function(){
    index--;
    if (index < 0){
        index = reviews.length - 1;
    }
    showReview(index);
})
randomBtn.addEventListener('click', function(){
    let randomNum = Math.trunc(Math.random() * reviews.length);
    if(randomNum === index){
        randomNum = Math.trunc(Math.random() * reviews.length);
    };
    index = randomNum;
    showReview(index);
})




