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
        // daysContainer.appendChild(dayElem);


        if (isDayAvailable(currentYear, currentMonth, i)) { // here test
            dayElem.classList.add('available');
          } else {
            dayElem.classList.add('unavailable');
          }

          daysContainer.appendChild(dayElem)
      }
    }

    



    function isDayAvailable(year, month, day) {
        const unavailableRanges = [
            [new Date(2023, 5, 14), new Date(2023, 6, 31)], // June 14th - July 31st, 2023
            [new Date(2023, 11, 4), new Date(2024, 2, 31)] // Dec 4th, 2023 - March 31st, 2024
          ];

          const currentDate = new Date(year, month, day);

          // Check if the current date falls within any of the unavailable ranges
          for (const [startDate, endDate] of unavailableRanges) {
              if (currentDate >= startDate && currentDate <= endDate) {
                return false; // Date is unavailable
              }
          }

        return true; // Date is available
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
