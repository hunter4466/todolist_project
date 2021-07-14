class newNode{
    constructor(value, nextNode = null){
      this.value = value;
      this.nextNode = nextNode;
    }
  }

export default class linkedList{
  add(number) {
    if(this.head){
      let newItem = new newNode(number,this.head)
      this.head = newItem
    }else{
      let newItem = new newNode(number)
      this.head = newItem
    }
  }
  
  pop() {
    if(this.head){
      if(this.head){
        let itemValue = this.head
        this.head = this.head.nextNode
        return itemValue.value
      }else{
        let itemValue = this.head
        this.head = null;
        return itemValue.value
      }
    }else{
      return false
    }
  }

  returnArray(){
    if(!this.head){
      return false
    }else{
      let allArray = []
      let currentNode = this.head
      allArray.push(currentNode.value)
      while(currentNode.nextNode){
        currentNode = currentNode.nextNode;
        allArray.push(currentNode.value)
      }
      return allArray
    }
  }

    remove(index=null){

    if(index){
        if(this.head){
            let valArray = []
            let activeValue = this.head
            valArray.push(activeValue.value)
                while(activeValue.nextNode){
                    activeValue = activeValue.nextNode
                    valArray.push(activeValue.value)
                }
                if(index>valArray.length){
                return false
                }else{
                    let newArray = []
                    for(let i = 0;i<valArray.length;i+=1){
                        if(i != index){
                        newArray.push(valArray[i])
                        }
                    }
                    let returnValue = valArray[index]
                    valArray = newArray.reverse()
                    if(newArray.length !== 0){
                        let onHold = new newNode(valArray[0])
                        for(let i = 1;i<valArray.length;i += 1){ 
                            onHold = new newNode(valArray[i],onHold)
                        }
                        this.head = onHold
                    }else{
                        this.head = null
                    }
                return returnValue
                }
            }else{
                    return false
                    }
    }else{
            if(!this.head){
                return -1
            }else{
                let valArray = []
                let activeValue = this.head
                
                valArray.push(activeValue.value)
                while(activeValue.nextNode){
                    activeValue = activeValue.nextNode
                    valArray.push(activeValue.value)
                }
                let subsArray = []
                for(let i =0;i<valArray.length;i+=1){
                    if(i != valArray.length-1){
                    subsArray.push(valArray[i])
                    }
                }
                let returnValue = valArray[valArray.length-1]
                valArray = subsArray.reverse()
                    if(subsArray.length !== 0){
                    let onHold = new newNode(valArray[0])
                    for(let i = 1;i<valArray.length;i += 1){ 
                        onHold = new newNode(valArray[i],onHold)
                    }
                    this.head = onHold
                    }else{
                    this.head = null
                    }
                return returnValue  
            }
        }
    }
}