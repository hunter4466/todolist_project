export function deleteItem(linkList,index){
    linkList.remove(index)

  };

export function removeSelected(linkList,array){
    for(let i = 0;i<array.length;i+=1){
        linkList.remove((array[array.length-(i+1)])-1)
    }

  };