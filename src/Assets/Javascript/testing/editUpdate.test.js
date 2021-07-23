/**
 * @jest-environment jsdom
 */

import LinkedList from '../linkedList.js';
import LocalStorageMock from './__Mocks__/LocalStorageMock.js';
import simHtml from './__Mocks__/htmlSimulator.js';
import updateInput from '../updateInput.js'

describe('Udpate function works', () => {
   let simStorage = new LocalStorageMock()
   let linkList = new LinkedList();
   linkList.add({ description: 'Do my homework', completed: false, index: 1 });
   linkList.add({ description: 'Clean my room', completed: false, index: 2 });
   linkList.add({ description: 'Code', completed: false, index: 3 });
   let toStore = linkList.returnArray();
   simStorage.setItem('toDoList', JSON.stringify(toStore));
   let toBuild1 = JSON.parse(simStorage.getItem('toDoList'))
   simHtml(toBuild1);
  test('Input save changes on local storage succesfully', () => {
      let toChange = document.getElementById('task_1')
      toChange.value = 'Train my dog'
      let tasksArray = document.querySelectorAll('.taskObj')
      let checkboxArray = document.querySelectorAll('.checkboxObj')
      let newData = updateInput(tasksArray,checkboxArray,LinkedList);
      let toStore2 = newData.returnArray();
      simStorage.setItem('toDoList', JSON.stringify(toStore2));
      let toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
      let returnedHtml = simHtml(toBuild2);
    expect(returnedHtml).toEqual("<ul id=\"todolist\"><li><input id=\"checkbox_0\" class=\"checkboxObj\" value=\"false\"><input id=\"task_0\" class=\"taskObj\" value=\"Code\"><input id=\"index_0\" class=\"indexObj\" value=\"1\"></li><li><input id=\"checkbox_1\" class=\"checkboxObj\" value=\"false\"><input id=\"task_1\" class=\"taskObj\" value=\"Train my dog\"><input id=\"index_1\" class=\"indexObj\" value=\"2\"></li><li><input id=\"checkbox_2\" class=\"checkboxObj\" value=\"false\"><input id=\"task_2\" class=\"taskObj\" value=\"Do my homework\"><input id=\"index_2\" class=\"indexObj\" value=\"3\"></li></ul>");
  });

  test('Input save check status on local storage succesfully', () => {
    let toChange = document.getElementById('checkbox_1')
    toChange.value = 'true'
    let tasksArray = document.querySelectorAll('.taskObj')
    let checkboxArray = document.querySelectorAll('.checkboxObj')
    let newData2 = updateInput(tasksArray,checkboxArray,LinkedList);
    let toStore2 = newData2.returnArray();
    simStorage.setItem('toDoList', JSON.stringify(toStore2));
    let toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
    let returnedHtml = simHtml(toBuild2);
  expect(returnedHtml).toEqual("<ul id=\"todolist\"><li><input id=\"checkbox_0\" class=\"checkboxObj\" value=\"false\"><input id=\"task_0\" class=\"taskObj\" value=\"Code\"><input id=\"index_0\" class=\"indexObj\" value=\"1\"></li><li><input id=\"checkbox_1\" class=\"checkboxObj\" value=\"true\"><input id=\"task_1\" class=\"taskObj\" value=\"Train my dog\"><input id=\"index_1\" class=\"indexObj\" value=\"2\"></li><li><input id=\"checkbox_2\" class=\"checkboxObj\" value=\"false\"><input id=\"task_2\" class=\"taskObj\" value=\"Do my homework\"><input id=\"index_2\" class=\"indexObj\" value=\"3\"></li></ul>");
});



});
