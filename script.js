document.getElementById("MyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from refreshing the page

  const radius = parseFloat(document.getElementById("radius").value);

  if (!isNaN(radius)) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(2);
  } else {
     document.getElementById("volume").value = "";
  }
});
