/* =========================================
HERO SLIDESHOW
========================================= */

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

function showNextSlide() {

if (slides.length === 0) {
return;
}

slides[currentSlide].classList.remove("active");

currentSlide++;

if (currentSlide >= slides.length) {
currentSlide = 0;
}

slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);

/* =========================================
SHARE BUTTON
========================================= */

const shareButton = document.getElementById("shareButton");

if (shareButton) {

shareButton.addEventListener("click", async () => {

```
const shareData = {
  title: "Maria Santos | Automotive Sales Consultant",
  text: "Connect with Maria Santos for your next vehicle.",
  url: window.location.href
};

try {

  if (navigator.share) {

    await navigator.share(shareData);

  } else {

    await navigator.clipboard.writeText(
      window.location.href
    );

    const originalText =
      shareButton.textContent;

    shareButton.textContent =
      "✓ Link Copied";

    setTimeout(() => {

      shareButton.textContent =
        originalText;

    }, 2000);
  }

} catch (error) {

  console.log(
    "Share cancelled or unavailable."
  );

}
```

});

}
