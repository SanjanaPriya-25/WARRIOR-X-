document.getElementById("trackerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const symptom = document.getElementById("symptom").value;
    if (symptom) {
      alert(`You tracked the symptom: ${symptom}`);
    }
  });
  