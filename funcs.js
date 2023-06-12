document.addEventListener('DOMContentLoaded', function() {
    const currentMonthElem = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const daysContainer = document.querySelector('.days');
    
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();

    function updateCalendar() {
      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);

      currentMonthElem.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${currentYear}`;
      
      // Clear existing days
      daysContainer.innerHTML = '';

      // Create day elements for each day in the month
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElem = document.createElement('div');
        dayElem.classList.add('day');
        dayElem.textContent = i;
        daysContainer.appendChild(dayElem);
      }
    }

    prevMonthBtn.addEventListener('click', function() {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });

    updateCalendar();
  });
