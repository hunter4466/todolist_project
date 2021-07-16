import htmlBuilder from './Assets/Javascript/modules.js';
import LinkedList from './Assets/Javascript/linkedList.js';
import storageAvailable from './Assets/Javascript/dataHandler.js';
import './style.css';
import dragIcon from './Assets/Images/dragicon.png';
import refreshicon from './Assets/Images/refreshicon.png';
import dragItems from './Assets/Javascript/dragHandler.js'

const toDoList = document.getElementById('to_do_list');
const refreshIconImg = document.getElementById('refreshIcon');
refreshIconImg.src = refreshicon;
const newTaskInput = document.getElementById('newTaskInput');
const taskList = new LinkedList();
function build(linkList) {
  const removalItems = document.querySelectorAll('.taskItem');
  removalItems.forEach((elem) => {
    elem.remove();
  });
  const objectsArray = [];
  const localInfo = JSON.parse(localStorage.getItem('toDoList'));
  linkList.head = localInfo;
  const itemsArray = taskList.returnFromIndex();
  for (let i = 0; i < itemsArray.length; i += 1) {
    const newTaskObj = document.createElement('li');
    const newTaskObj2 = document.createElement('div')
    const checkBox = document.createElement('input');
    const taskText = document.createElement('p');
    const taskDragIcon = document.createElement('img');
    objectsArray.push([toDoList, newTaskObj,'dropbox']);
    objectsArray.push([newTaskObj, newTaskObj2, 'taskItem', null, `taskItem_${i}`]);
    objectsArray.push([newTaskObj2, checkBox, 'taskCheckBox']);
    objectsArray.push([newTaskObj2, taskText, 'taskText', `${itemsArray[i].description}`]);
    objectsArray.push([newTaskObj2, taskDragIcon, 'dragIcon']);
    checkBox.setAttribute('type', 'checkbox');
    newTaskObj.setAttribute('draggable', 'true');
    taskDragIcon.setAttribute('src', dragIcon);


    checkBox.addEventListener('change',(e)=>{
      if (checkBox.checked) {
        taskList.changeState(itemsArray[i].index,true)
        console.log('checked',taskList)
      } else {
        taskList.changeState(itemsArray[i].index,false)
        console.log('unchecked',taskList)
      }
    })


    dragItems(newTaskObj2)
  }
  htmlBuilder(objectsArray);
}
//tryal function
if (localStorage.getItem('toDoList')) {
  taskList.head = JSON.parse(localStorage.getItem('toDoList'));
  build(taskList);
}
//end of tryal function
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

let clearButton= document.getElementById('clearButton')
clearButton.addEventListener('click',(e)=>{
  e.preventDefault();
  taskList.removeState()
})