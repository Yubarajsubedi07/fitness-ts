document.addEventListener('DOMContentLoaded', function() {
    const trackerForm = document.getElementById('trackerForm');
    const entriesContainer = document.getElementById('entries');
    const totalDuration = document.getElementById('totalDuration');
    let total = 0;
  
    trackerForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const exercise = document.getElementById('exercise').value;
      const duration = parseInt(document.getElementById('duration').value);
  
      if (isNaN(duration)) {
        alert('Please enter a valid duration.');
        return;
      }
  
      const entry = document.createElement('div');
      entry.classList.add('entry');
      entry.innerHTML = `
        <p><strong>${exercise}</strong>: ${duration} minutes</p>
      `;
      entriesContainer.appendChild(entry);
  
      total += duration;
      totalDuration.textContent = `Total Duration: ${total} minutes`;
  
      trackerForm.reset();
    });
  });
  