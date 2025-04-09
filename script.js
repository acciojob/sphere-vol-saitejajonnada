function volume_sphere() {
	 const radius = parseFloat(document.getElementById("radius").value);
      if (!isNaN(radius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        document.getElementById("volume").value = volume.toFixed(2);
      } else {
        alert("Please enter a valid number for the radius.");
      }
	
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
