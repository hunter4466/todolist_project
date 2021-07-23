import LinkedList from '../linkedList.js';
import localStorageMock from '../localStorageMock.js';

describe('Add function works',()=>{
    
    it('LocalStorage storages succesfuly',()=>{
        let newLinkedList = new LinkedList()
        newLinkedList.add({ description: 'Do my homework', completed: false, index: 1})
        newLinkedList.add({ description: 'Clean my room', completed: false, index: 2})
        newLinkedList.add({ description: 'Code', completed: false, index: 3})
        let newStorage = new localStorageMock()
        newStorage.setItem('toDoList',JSON.stringify(newLinkedList))
        expect(JSON.parse(newStorage.getItem('toDoList'))).toEqual(newLinkedList)
    })
})

