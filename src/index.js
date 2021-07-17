import htmlBuilder from './Assets/Javascript/modules.js';
import LinkedList from './Assets/Javascript/linkedList.js';
import storageAvailable from './Assets/Javascript/dataHandler.js';
import './style.css';
import dragIcon from './Assets/Images/dragicon.png';
import refreshicon from './Assets/Images/refreshicon.png';
import {dragStart, dragEnd, dragOver, dragDrop,} from './Assets/Javascript/dragHandler.js'

const toDoList = document.getElementById('to_do_list');
const refreshIconImg = document.getElementById('refreshIcon');
refreshIconImg.src = refreshicon;
const newTaskInput = document.getElementById('newTaskInput');
const taskList = new LinkedList();
export default function build(linkList){
console.log('build, have been called')
  const removalItems = document.querySelectorAll('.taskItem');
  removalItems.forEach((elem) => {
    elem.remove(0);
  });
  const objArray = [];
  
  const localInfo = JSON.parse(localStorage.getItem('toDoList'));
  linkList.head = localInfo;
  const itemsArray = taskList.returnFromIndex();
  console.log(itemsArray)
  for (let i = 0; i < itemsArray.length; i += 1) {
    const newTaskObj = document.createElement('li');
    const newTaskObj2 = document.createElement('div')
    const checkBox = document.createElement('input');
    const taskText = document.createElement('input');
    const taskCompleted = document.createElement('input');

    const taskDragIcon = document.createElement('img');
    objArray.push([toDoList, newTaskObj, 'taskItem', null, `taskItem_${i}`]);
    objArray.push([newTaskObj, checkBox, 'taskCheckBox']);
    objArray.push([newTaskObj, taskText, 'taskText']);
    objArray.push([newTaskObj, taskCompleted,'taskCompleted']);
    objArray.push([newTaskObj, taskDragIcon, 'dragIcon']);
    if(itemsArray[i].completed === true){
      checkBox.checked = true;
    }
    checkBox.setAttribute('type', 'checkbox');
    taskText.setAttribute('type','text')
    taskCompleted.setAttribute('type','hidden')
    taskCompleted.setAttribute('value',itemsArray[i].completed)
    newTaskObj2.setAttribute('draggable', 'true');
    taskText.setAttribute('value',itemsArray[i].description);
    taskDragIcon.setAttribute('src', dragIcon);


    checkBox.addEventListener('change',(e)=>{
      if (checkBox.checked) {
        taskList.changeState(itemsArray[i].index,true)
        if (storageAvailable) {
          localStorage.setItem('toDoList', JSON.stringify(taskList.head));
        }
        
      } else {
        taskList.changeState(itemsArray[i].index,false)
        if (storageAvailable) {
          localStorage.setItem('toDoList', JSON.stringify(taskList.head));
        }
      }
    })

    newTaskObj.addEventListener('dragstart', dragStart);
    newTaskObj.addEventListener('dragend', dragEnd);
    newTaskObj.addEventListener('dragover', dragOver);
    newTaskObj.addEventListener('drop', (e) => {
      dragDrop(e);
      console.log(taskList)
      let htmlTasks = document.querySelectorAll('.taskText')
      let htmlCompleted = document.querySelectorAll('.taskCompleted')
      let htmlObjects = []
      for(let i = 0;i<htmlTasks.length;i+=1){
        htmlObjects.push({description: htmlTasks[htmlTasks.length-(i+1)].value, completed: htmlCompleted[htmlTasks.length-(i+1)].value, index: htmlTasks.length-i})
      }
      console.log(htmlObjects)
      let tempList = new LinkedList();
      for(let i = 0;i<htmlObjects.length;i+=1){
        tempList.add({description: htmlObjects[i].description, completed: htmlObjects[i].completed, index: htmlObjects[i].index})
      }
      if (storageAvailable) {
        localStorage.setItem('toDoList', JSON.stringify(tempList.head));
      }
      build(taskList)
      console.log('templist',tempList)

      });

  }
  htmlBuilder(objectsArray);
}
if (localStorage.getItem('toDoList')) {
  taskList.head = JSON.parse(localStorage.getItem('toDoList'));
  build(taskList);
}
newTaskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    taskList.add({ description: newTaskInput.value, completed: false, index: null });
    taskList.indexify();
    console.log(taskList)
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
window.onstorage = ()=>{
  console.log('this was triggered')
  build(taskList);
}