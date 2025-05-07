// Sample timeline data
const timelineData = [
    { year: '2021', event: 'Graduated University' },
    { year: '2022', event: 'Joined Tek Experts as Technical Support Engineer' },
    { year: '2023', event: 'AWS Certified Solutions Architect – Associate' },
    { year: '2024', event: 'First Cloud Migration Project' },
    { year: '2025', event: 'Promoted to Cloud Engineer' }
  ];
  
  function buildTimeline() {
    const container = document.getElementById('timeline');
    timelineData.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<h3>${item.year}</h3><p>${item.event}</p>`;
      container.appendChild(div);
    });
  }
  
  document.addEventListener('DOMContentLoaded', buildTimeline);