/* eslint no-param-reassign: "error" */

const btnAddtime = document.querySelector('#add-time');

function cloneField() {
  const scheduleItemEl = document.querySelector('.schedule-item');
  const scheduleItemClone = scheduleItemEl.cloneNode(true);

  function clearValuesOfInput(element) {
    element.querySelectorAll('input').forEach((item) => {
      item.value = '';
    });
  }

  clearValuesOfInput(scheduleItemClone);

  const fieldsetScheduleItemsEl = document.querySelector('#schedule-items');
  fieldsetScheduleItemsEl.appendChild(scheduleItemClone);
}

btnAddtime.addEventListener('click', () => {
  cloneField();
});
