import htmlBuilder from './Assets/Javascript/modules.js';
import linkedList from './Assets/Javascript/linkedList.js';
import storageAvailable from './Assets/Javascript/dataHandler.js';
import './style.css';
import { create } from 'lodash';

const toDoList = document.getElementById('to_do_list')
let newTaskInput = document.getElementById('newTaskInput')
let taskList = new linkedList();



function build(){
    let removalItems = document.querySelectorAll('.taskItem')
    removalItems.forEach((elem)=>{
        elem.remove()
    })
    let objectsArray = []
    let itemsArray = taskList.returnArray();
    for(let i = 0;i<itemsArray.length;i+=1){
        let newTaskObj = document.createElement('li')
        objectsArray.push([toDoList,newTaskObj,'taskItem',`${itemsArray[i].description}`,`taskItem_${i}`])
    }
    htmlBuilder(objectsArray)
    let toDrag = document.querySelectorAll('.taskItem')
    function handleDragStart(e) {
        this.style.opacity = '0.4';
      }
    function handleDragEnd(e) {
        this.style.opacity = '1';
      }
    toDrag.forEach((elem)=>{
        elem.setAttribute('draggable','true')
        elem.addEventListener('dragstart', handleDragStart, false);
        elem.addEventListener('dragend', handleDragEnd, false);
    })

}

newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        taskList.add({description : newTaskInput.value, completed : false, index : null})
        taskList.indexify();
        build()
        newTaskInput.value = ""
        
    }
});
