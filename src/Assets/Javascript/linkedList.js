function NewNode(value, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

export default class LinkedList {
  add(number) {
    if (this.head) {
      const newItem = new NewNode(number, this.head);
      this.head = newItem;
    } else {
      const newItem = new NewNode(number);
      this.head = newItem;
    }
  }

  pop() {
    if (this.head) {
      if (this.head) {
        const itemValue = this.head;
        this.head = this.head.nextNode;
        return itemValue.value;
      }
      const itemValue = this.head;
      this.head = null;
      return itemValue.value;
    }
    return false;
  }

  replaceIndex(first, second) {
    if (!this.head) {
      return [];
    }
    const allArray = [];
    let currentNode = this.head;
    allArray.push(currentNode.value.index);
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      allArray.push(currentNode.value.index);
    }
    const newArray = [];
    for (let i = 0; i < allArray.length; i += 1) {
      if (i === first) {
        newArray.push(allArray[second]);
      } else if (i === second) {
        newArray.push(allArray[first]);
      } else {
        newArray.push(allArray[i]);
      }
      let currentNode2 = this.head;
      let count = 0;
      currentNode2.value.index = newArray[count];
      while (currentNode2.nextNode) {
        count += 1;
        currentNode2 = currentNode2.nextNode;
        currentNode2.value.index = newArray[count];
      }
    }
    return true;
  }

  indexify() {
    if (!this.head) {
      return false;
    }
    let currentNode = this.head;
    let count = 1;
    currentNode.value.index = count;
    while (currentNode.nextNode) {
      count += 1;
      currentNode = currentNode.nextNode;
      currentNode.value.index = count;
    }
    return true;
  }

  returnArray() {
    if (!this.head) {
      return [];
    }
    const allArray = [];
    let currentNode = this.head;
    allArray.push(currentNode.value);
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      allArray.push(currentNode.value);
    }
    return allArray;
  }

  returnArrayFromIndex() {
    if (!this.head) {
      return [];
    }

    const allArray = [];
    let currentNode = this.head;
    allArray.push(currentNode.value);
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      allArray.push(currentNode.value);
    }

    return allArray;
  }

  remove(index = null) {
    if (index) {
      if (this.head) {
        let valArray = [];
        let activeValue = this.head;
        valArray.push(activeValue.value);
        while (activeValue.nextNode) {
          activeValue = activeValue.nextNode;
          valArray.push(activeValue.value);
        }
        if (index > valArray.length) {
          return false;
        }
        const newArray = [];
        for (let i = 0; i < valArray.length; i += 1) {
          if (i !== index) {
            newArray.push(valArray[i]);
          }
        }
        const returnValue = valArray[index];
        valArray = newArray.reverse();
        if (newArray.length !== 0) {
          let onHold = new NewNode(valArray[0]);
          for (let i = 1; i < valArray.length; i += 1) {
            onHold = new NewNode(valArray[i], onHold);
          }
          this.head = onHold;
        } else {
          this.head = null;
        }
        return returnValue;
      }
      return false;
    }
    if (!this.head) {
      return -1;
    }
    let valArray = [];
    let activeValue = this.head;

    valArray.push(activeValue.value);
    while (activeValue.nextNode) {
      activeValue = activeValue.nextNode;
      valArray.push(activeValue.value);
    }
    const subsArray = [];
    for (let i = 0; i < valArray.length; i += 1) {
      if (i !== valArray.length - 1) {
        subsArray.push(valArray[i]);
      }
    }
    const returnValue = valArray[valArray.length - 1];
    valArray = subsArray.reverse();
    if (subsArray.length !== 0) {
      let onHold = new NewNode(valArray[0]);
      for (let i = 1; i < valArray.length; i += 1) {
        onHold = new NewNode(valArray[i], onHold);
      }
      this.head = onHold;
    } else {
      this.head = null;
    }
    return returnValue;
  }
}