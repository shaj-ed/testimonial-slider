// Testimonials //
const testimonials = [
  {
    id: 01,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    paragraph: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
    media: "./images/image-tanya.jpg",
  },

  {
    id: 02,
    name: "John Tarkpor",
    job: "Junior Front-end Developer ",
    paragraph: `“ If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    media: "./images/image-john.jpg",
  },
];

// Set All
function testimonialsInit() {
  // Select DOM //
  const testi = document.querySelector(".testimonial");
  const image = document.querySelector(".testimonial__image img");
  const name = document.querySelector(".testimonial__person");
  const job = document.querySelector(".testimonial__job");
  const paragraph = document.querySelector(".testimonial__paragraph");
  const prevButton = document.querySelector(".button--prev");
  const nextButton = document.querySelector(".button--next");

  let position = 0;

  // Set items
  function setItems() {
    image.src = testimonials[position].media;
    name.innerText = testimonials[position].name;
    job.innerText = testimonials[position].job;
    paragraph.innerText = testimonials[position].paragraph;
    setTimeout(() => {
      testi.classList.add("show");
    }, 200);
  }

  prevButton.addEventListener("click", () => {
    testi.classList.remove("show");
    position--;
    if (position < 0) {
      position = testimonials.length - 1;
    }
    setItems();
  });

  nextButton.addEventListener("click", () => {
    testi.classList.remove("show");
    position++;
    if (position > testimonials.length - 1) {
      position = 0;
    }
    setItems();
  });

  setItems();
}

testimonialsInit();
