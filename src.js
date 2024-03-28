let slider = document.getElementById("myRange")

slider.oninput = function() {
  slider.innerHTML = this.value
  document.getElementById("joe").style.transform = `rotate(${this.value}deg)`
  balls = this.value / 2
  document.getElementById("donal").style.transform = `rotate(-${balls}deg)`
  console.log(this.value);
}

