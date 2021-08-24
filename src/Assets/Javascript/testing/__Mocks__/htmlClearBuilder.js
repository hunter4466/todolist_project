/**
 * @jest-environment jsdom
 */

export default function simClearHtml(array) {
  document.body.innerHTML = '<ul id="todolist"></ul>';
  const mainContainer = document.getElementById('todolist');
  const tempArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].completed !== 'true') {
      tempArray.push('<li>');
      tempArray.push(`<input id='checkbox_${i}' class='checkboxObj' value='${array[i].completed}'>`);
      tempArray.push(`<input id='task_${i}' class='taskObj' value='${array[i].description}'>`);
      tempArray.push(`<input id='index_${i}' class='indexObj' value='${array[i].index}'>`);
      tempArray.push('</li>');
    }
  }
  const finishedHtml = tempArray.reduce((a, b) => a + b);
  mainContainer.innerHTML = finishedHtml;
  return document.body.innerHTML;
}