import LinkedList from '../linkedList.js';
import LocalStorageMock from './__Mocks__/LocalStorageMock.js';


describe('Add function works', () => {
  const newLinkedList = new LinkedList();
  newLinkedList.add({ description: 'Do my homework', completed: false, index: 1 });
  newLinkedList.add({ description: 'Clean my room', completed: false, index: 2 });
  newLinkedList.add({ description: 'Code', completed: false, index: 3 });

  const newStorage = new LocalStorageMock();

  test('LocalStorage storages succesfuly', () => {
    newStorage.setItem('toDoList', JSON.stringify(newLinkedList));
    expect(JSON.parse(newStorage.getItem('toDoList'))).toEqual(newLinkedList);
  });


});
