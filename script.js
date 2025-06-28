document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.semestre-header');
  const content = document.getElementById('semestre-content');
  const toggle = document.getElementById('semestre-toggle');
  const dropdown = document.querySelector('.semestre-dropdown');
  const arrow = toggle.querySelector('.dropdown-arrow');

  // Material Symbols for arrow down and close
  const arrowDown = '<span class="material-symbols-outlined">keyboard_arrow_down</span>';
  const closeIcon = '<span class="material-symbols-outlined">close</span>';

  header.addEventListener('click', function() {
    dropdown.classList.toggle('open');
    if (dropdown.classList.contains('open')) {
      content.style.maxHeight = '60vw';
      content.style.opacity = '1';
      arrow.innerHTML = closeIcon;
    } else {
      content.style.maxHeight = '0';
      content.style.opacity = '0';
      arrow.innerHTML = arrowDown;
    }
  });

  // Custom Course Card Logic
  const form = document.getElementById('custom-course-form');
  const output = document.createElement('div');
  output.id = 'custom-course-output';
  // Insert output at the end of the semestre-content
  if (content) {
    content.appendChild(output);
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('custom-course-name').value;
      const credits = document.getElementById('custom-course-credits').value;
      const duration = document.getElementById('custom-course-duration').value;
      const color = document.getElementById('custom-course-color').value;
      const colorClass = `course-card-color-${color}`;
      const cardHTML = `
        <div class="course-card ${colorClass}">
          <div class="course-card-inner">
            <div class="course-card-title-block">
              <span class="course-card-title">${name}</span>
              <span class="course-card-credits-block">
                <span class="course-card-credits">${credits}</span>
                <span class="course-card-cr">CR</span>
              </span>
            </div>
            <span class="course-card-duration">${duration} SEMANAS</span>
          </div>
        </div>
      `;
      output.insertAdjacentHTML('beforeend', cardHTML);
      form.reset();
    });
  }
});
