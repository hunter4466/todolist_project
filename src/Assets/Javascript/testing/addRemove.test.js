import LinkedList from '../linkedList.js';
import LocalStorageMock from './__Mocks__/LocalStorageMock.js';
import CreateElement from './__Mocks__/htmlObjCreatorMock.js';
import htmlBuilder from '../modules.js';

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

  test('Html builds correctly after adding', () => {
    const objsArray = newLinkedList.returnArray();
    const mainParent = new CreateElement('ul');
    const containersArray = [];
    for (let i = 0; i < objsArray.length; i += 1) {
      const tempObj = new CreateElement('li');
      containersArray.push(tempObj);
    }
    const materialArray = [];

    for (let i = 0; i < containersArray.length; i += 1) {
      const child1 = new CreateElement('input', objsArray[i].description);
      const child2 = new CreateElement('input', objsArray[i].completed);
      const child3 = new CreateElement('input', objsArray[i].index);
      materialArray.push([containersArray[i], child1]);
      materialArray.push([containersArray[i], child2]);
      materialArray.push([containersArray[i], child3]);
    }
    for (let i = 0; i < containersArray.length; i += 1) {
      materialArray.push([mainParent, containersArray[i]]);
    }

    htmlBuilder(materialArray);
    const arrayToStringify = [];
    arrayToStringify.push(`<${mainParent.type}>\n`);
    for (let i = 0; i < mainParent.childs.length; i += 1) {
      arrayToStringify.push(`    <${mainParent.childs[i].type}>\n`);
      for (let a = 0; a < mainParent.childs[i].childs.length; a += 1) {
        arrayToStringify.push(`        <${mainParent.childs[i].childs[a].type} value=${mainParent.childs[i].childs[a].value}></${mainParent.childs[i].childs[a].type}>\n`);
      }
      arrayToStringify.push(`    </${mainParent.childs[i].type}>\n`);
    }
    arrayToStringify.push(`</${mainParent.type}>`);

    const resultString = arrayToStringify.reduce((a, b) => a + b);
    expect(resultString).toEqual(
      '<ul>\n    <li>\n        <input value=Code></input>\n        <input value=false></input>\n        <input value=3></input>\n    </li>\n    <li>\n        <input value=Clean my room></input>\n        <input value=false></input>\n        <input value=2></input>\n    </li>\n    <li>\n        <input value=Do my homework></input>\n        <input value=false></input>\n        <input value=1></input>\n    </li>\n</ul>',
    );
  });

  test('Html builds correctly after removing', () => {
    newLinkedList.remove(0);
    const objsArray = newLinkedList.returnArray();
    const mainParent = new CreateElement('ul');
    const containersArray = [];
    for (let i = 0; i < objsArray.length; i += 1) {
      const tempObj = new CreateElement('li');
      containersArray.push(tempObj);
    }
    const materialArray = [];

    for (let i = 0; i < containersArray.length; i += 1) {
      const child1 = new CreateElement('input', objsArray[i].description);
      const child2 = new CreateElement('input', objsArray[i].completed);
      const child3 = new CreateElement('input', objsArray[i].index);
      materialArray.push([containersArray[i], child1]);
      materialArray.push([containersArray[i], child2]);
      materialArray.push([containersArray[i], child3]);
    }
    for (let i = 0; i < containersArray.length; i += 1) {
      materialArray.push([mainParent, containersArray[i]]);
    }

    htmlBuilder(materialArray);
    const arrayToStringify = [];
    arrayToStringify.push(`<${mainParent.type}>\n`);
    for (let i = 0; i < mainParent.childs.length; i += 1) {
      arrayToStringify.push(`    <${mainParent.childs[i].type}>\n`);
      for (let a = 0; a < mainParent.childs[i].childs.length; a += 1) {
        arrayToStringify.push(`        <${mainParent.childs[i].childs[a].type} value=${mainParent.childs[i].childs[a].value}></${mainParent.childs[i].childs[a].type}>\n`);
      }
      arrayToStringify.push(`    </${mainParent.childs[i].type}>\n`);
    }
    arrayToStringify.push(`</${mainParent.type}>`);

    const resultString = arrayToStringify.reduce((a, b) => a + b);
    expect(resultString).toEqual(
      '<ul>\n    <li>\n        <input value=Clean my room></input>\n        <input value=false></input>\n        <input value=2></input>\n    </li>\n    <li>\n        <input value=Do my homework></input>\n        <input value=false></input>\n        <input value=1></input>\n    </li>\n</ul>',
    );
  });
});
