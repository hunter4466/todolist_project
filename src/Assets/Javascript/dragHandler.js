export default function dragItems(toDrag) {

   toDrag.addEventListener('dragstart',(event)=>{
        event.target.style.opacity = 0.5;
    });
    toDrag.addEventListener('dragend',(event)=>{
        event.target.style.opacity = 1;
    });
    toDrag.addEventListener('dragover',(event)=>{
        event.target.style.opacity = 0.5;
    });
    toDrag.addEventListener('dragleave',(event)=>{
        event.target.style.opacity = 1;
    });
    toDrag.addEventListener('drop',(event)=>{
        event.target.style.opacity = 0.5;
    });
    
}