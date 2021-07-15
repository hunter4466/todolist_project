import htmlBuilder from './Assets/Javascript/modules.js';
import LinkedList from './Assets/Javascript/linkedList.js';
import storageAvailable from './Assets/Javascript/dataHandler.js';
import './style.css';
import dragIcon from './Assets/Images/dragicon.png';
import refreshicon from './Assets/Images/refreshicon.png';

const toDoList = document.getElementById('to_do_list');
const refreshIconImg = document.getElementById('refreshIcon');
refreshIconImg.src = refreshicon;
const newTaskInput = document.getElementById('newTaskInput');
const taskList = new LinkedList();
function tryalPopulate(){
taskList.add({ description: "Clean my room", completed: false, index: null });
taskList.add({ description: "Do my homework", completed: false, index: null });
taskList.add({ description: "Take the trash out", completed: false, index: null });
taskList.indexify();
if (storageAvailable) {
    localStorage.setItem('toDoList', JSON.stringify(taskList.head));
  }
}
tryalPopulate();

function build(linkList) {
  const removalItems = document.querySelectorAll('.taskItem');
  removalItems.forEach((elem) => {
    elem.remove();
  });
  const objectsArray = [];
  const localInfo = JSON.parse(localStorage.getItem('toDoList'));
  linkList.head = localInfo;
  const itemsArray = taskList.returnArray();
  for (let i = 0; i < itemsArray.length; i += 1) {
    const newTaskObj = document.createElement('li');
    const checkBox = document.createElement('input');
    const taskText = document.createElement('p');
    const taskDragIcon = document.createElement('img');
    objectsArray.push([toDoList, newTaskObj, 'taskItem', null, `taskItem_${i}`]);
    objectsArray.push([newTaskObj, checkBox, 'taskCheckBox']);
    objectsArray.push([newTaskObj, taskText, 'taskText', `${itemsArray[i].description}`]);
    objectsArray.push([newTaskObj, taskDragIcon, 'dragIcon']);
    checkBox.setAttribute('type', 'checkbox');
    taskDragIcon.setAttribute('src', dragIcon);
  }
  htmlBuilder(objectsArray);
  const toDrag = document.querySelectorAll('.taskItem');
  function handleDragStart(e) {
    e.style.opacity = '0.4';
  }
  function handleDragEnd(e) {
    e.style.opacity = '1';
  }
  toDrag.forEach((elem) => {
    elem.setAttribute('draggable', 'true');
    elem.addEventListener('dragstart', handleDragStart, false);
    elem.addEventListener('dragend', handleDragEnd, false);
  });
}
if (localStorage.getItem('toDoList')) {
  taskList.head = JSON.parse(localStorage.getItem('toDoList'));
  build(taskList);
}
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    taskList.add({ description: newTaskInput.value, completed: false, index: null });
    taskList.indexify();
    if (storageAvailable) {
      localStorage.setItem('toDoList', JSON.stringify(taskList.head));
    }

    build(taskList);
    newTaskInput.value = '';
  }
});
