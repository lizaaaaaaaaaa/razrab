const button = document.getElementById("back-button");
const p = document.getElementById("back-text");

button.addEventListener("click", async function() {
    try {
      const xhr = await fetch("https://lizaaaaaaaaaa.github.io/razrab/back");
      const data = await xhr.text();
      p.textContent = data;
    } 
    catch (error) {
      p.textContent = "Error: " + error.message;
    }
});

button.addEventListener("mousemove", function(){
    this.style.backgroundColor = '#372F22';
})

button.addEventListener("mouseout", function(){
    this.style.backgroundColor = '#ffffff';
})