// Sample schedule data
const scheduleData = [
    { time: '09:00 AM', Monday: 'Class A', Tuesday: 'Class B', Wednesday: '', Thursday: '', Friday: 'Class C' },
    { time: '10:00 AM', Monday: '', Tuesday: 'Class D', Wednesday: 'Class E', Thursday: 'Class F', Friday: 'Class G' },
    // Add more schedule data as needed
  ];
  
  // Generate schedule table dynamically
  const scheduleTable = document.getElementById('schedule-table');
  const tbody = scheduleTable.querySelector('tbody');
  
  scheduleData.forEach(schedule => {
    const row = document.createElement('tr');
    
    // Add time slot
    const timeCell = document.createElement('td');
    timeCell.textContent = schedule.time;
    row.appendChild(timeCell);
  
    // Add class schedule for each day
    for (const day in schedule) {
      if (day !== 'time') {
        const classCell = document.createElement('td');
        classCell.textContent = schedule[day];
        row.appendChild(classCell);
      }
    }
  
    tbody.appendChild(row);
  });
  