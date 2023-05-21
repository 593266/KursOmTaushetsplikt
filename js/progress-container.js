const currentPage = window.location.pathname.split('/').pop();
const circles = document.querySelectorAll('.circle');
const pageNum = parseInt(currentPage.replace('slide', ''), 10);
let maxPage = pageNum;

for (let i = 0; i < pageNum; i++) {
  circles[i].classList.add('active');
}

let currentActive = pageNum;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > maxPage) currentActive = maxPage;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === maxPage) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};

// Add a click event listener to each circle
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    const pageNumber = parseInt(circle.textContent, 10);
    if (pageNumber < currentActive) {
      window.location.href = `slide${pageNumber}.html`;
    }
  });
});

const container = document.querySelector('.slides-tematekst');
const paragraph = container.querySelector('p');
container.style.height = `${paragraph.offsetHeight + 20}px`;
