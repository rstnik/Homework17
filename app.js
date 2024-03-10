let title = document.querySelector("#title");
let input = document.querySelector("#input");
input.addEventListener("focus", function () {
  title.style.display = "block";
});
input.addEventListener('blur', function(){
    title.style.display = 'none';
})