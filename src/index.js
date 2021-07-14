import htmlBuilder from './Assets/Javascript/modules.js';
import './style.css';

const toDoList = document.getElementById('to_do_list')
let newTaskInput = document.createElement('newTaskInput')
let taskList = []



function build(){
    let itemsArray = []
    




    htmlBuilder(itemsArray)
}



newTaskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      build()
    }
});
