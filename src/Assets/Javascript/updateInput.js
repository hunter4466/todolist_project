export default function updateInput(htmlTasks, htmlCompleted, LinkedList) {
  const htmlObjects = [];
  for (let i = 0; i < htmlTasks.length; i += 1) {
    htmlObjects.push({
      description: htmlTasks[htmlTasks.length - (i + 1)].value,
      completed: htmlCompleted[htmlTasks.length - (i + 1)].value,
      index: htmlTasks.length - i,
    });
  }
  const tempList = new LinkedList();
  for (let i = 0; i < htmlObjects.length; i += 1) {
    tempList.add({
      description: htmlObjects[i].description,
      completed: htmlObjects[i].completed,
      index: htmlObjects[i].index,
    });
  }
  return tempList;
}