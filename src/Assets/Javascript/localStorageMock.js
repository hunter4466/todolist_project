export default class localStorageMock{
    constructor(){
        this.list = {}
    }
    setItem(index,value){
        this.list[index] = value
    }
    getItem(index){
        let tempVal = this.list[index]
       return tempVal
    }
}