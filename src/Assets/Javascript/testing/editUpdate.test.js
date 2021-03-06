/**
 * @jest-environment jsdom
 */

import LinkedList from '../linkedList.js';
import LocalStorageMock from './__Mocks__/LocalStorageMock.js';
import simHtml from './__Mocks__/htmlSimulator.js';
import updateInput from '../updateInput.js';
import simClearHtml from './__Mocks__/htmlClearBuilder.js';

describe('Udpate function works', () => {
  const simStorage = new LocalStorageMock();
  const linkList = new LinkedList();
  linkList.add({ description: 'Do my homework', completed: false, index: 1 });
  linkList.add({ description: 'Clean my room', completed: false, index: 2 });
  linkList.add({ description: 'Code', completed: false, index: 3 });
  const toStore = linkList.returnArray();
  simStorage.setItem('toDoList', JSON.stringify(toStore));
  const toBuild1 = JSON.parse(simStorage.getItem('toDoList'));
  simHtml(toBuild1);
  test('Input save changes on local storage succesfully', () => {
    const toChange = document.getElementById('task_1');
    toChange.value = 'Train my dog';
    const tasksArray = document.querySelectorAll('.taskObj');
    const checkboxArray = document.querySelectorAll('.checkboxObj');
    const newData = updateInput(tasksArray, checkboxArray, LinkedList);
    const toStore2 = newData.returnArray();
    simStorage.setItem('toDoList', JSON.stringify(toStore2));
    const toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
    const returnedHtml = simHtml(toBuild2);
    expect(returnedHtml).toEqual('<ul id="todolist"><li><input id="checkbox_0" class="checkboxObj" value="false"><input id="task_0" class="taskObj" value="Code"><input id="index_0" class="indexObj" value="1"></li><li><input id="checkbox_1" class="checkboxObj" value="false"><input id="task_1" class="taskObj" value="Train my dog"><input id="index_1" class="indexObj" value="2"></li><li><input id="checkbox_2" class="checkboxObj" value="false"><input id="task_2" class="taskObj" value="Do my homework"><input id="index_2" class="indexObj" value="3"></li></ul>');
  });

  test('Input save check status on local storage succesfully', () => {
    const toChange = document.getElementById('checkbox_1');
    toChange.value = 'true';
    const tasksArray = document.querySelectorAll('.taskObj');
    const checkboxArray = document.querySelectorAll('.checkboxObj');
    const newData2 = updateInput(tasksArray, checkboxArray, LinkedList);
    const toStore2 = newData2.returnArray();
    simStorage.setItem('toDoList', JSON.stringify(toStore2));
    const toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
    const returnedHtml = simHtml(toBuild2);
    expect(returnedHtml).toEqual('<ul id="todolist"><li><input id="checkbox_0" class="checkboxObj" value="false"><input id="task_0" class="taskObj" value="Code"><input id="index_0" class="indexObj" value="1"></li><li><input id="checkbox_1" class="checkboxObj" value="true"><input id="task_1" class="taskObj" value="Train my dog"><input id="index_1" class="indexObj" value="2"></li><li><input id="checkbox_2" class="checkboxObj" value="false"><input id="task_2" class="taskObj" value="Do my homework"><input id="index_2" class="indexObj" value="3"></li></ul>');
  });

  test('Drag and drop works correctly and stores changes on local storage', () => {
    linkList.replaceIndex(1, 2);
    linkList.indexify();
    const toStore3 = linkList.returnArray();
    simStorage.setItem('toDoList', JSON.stringify(toStore3));
    const toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
    const returnedHtml = simHtml(toBuild2);
    expect(returnedHtml).toEqual('<ul id="todolist"><li><input id="checkbox_0" class="checkboxObj" value="false"><input id="task_0" class="taskObj" value="Clean my room"><input id="index_0" class="indexObj" value="1"></li><li><input id="checkbox_1" class="checkboxObj" value="false"><input id="task_1" class="taskObj" value="Code"><input id="index_1" class="indexObj" value="2"></li><li><input id="checkbox_2" class="checkboxObj" value="false"><input id="task_2" class="taskObj" value="Do my homework"><input id="index_2" class="indexObj" value="3"></li></ul>');
  });

  test('Clear button clears succesfully the checked html objects', () => {
    const toChange = document.getElementById('checkbox_1');
    toChange.value = 'true';
    const tasksArray = document.querySelectorAll('.taskObj');
    const checkboxArray = document.querySelectorAll('.checkboxObj');
    const newData2 = updateInput(tasksArray, checkboxArray, LinkedList);
    const toStore2 = newData2.returnArray();
    simStorage.setItem('toDoList', JSON.stringify(toStore2));
    const toBuild2 = JSON.parse(simStorage.getItem('toDoList'));
    const returnedHtml = simClearHtml(toBuild2);
    expect(returnedHtml).toEqual('<ul id="todolist"><li><input id="checkbox_0" class="checkboxObj" value="false"><input id="task_0" class="taskObj" value="Clean my room"><input id="index_0" class="indexObj" value="1"></li><li><input id="checkbox_2" class="checkboxObj" value="false"><input id="task_2" class="taskObj" value="Do my homework"><input id="index_2" class="indexObj" value="3"></li></ul>');
  });
});
