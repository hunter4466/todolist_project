import htmlBuilder from './Assets/Javascript/modules.js';
import linkedList from './Assets/Javascript/linkedList.js';
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
        objectsArray.push([toDoList,newTaskObj,'taskItem',`${itemsArray[i]}`])
    }
    htmlBuilder(objectsArray)
}

newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        taskList.add(newTaskInput.value)
      build()
    }
});
