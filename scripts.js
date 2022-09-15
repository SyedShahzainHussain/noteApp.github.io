
const add =document.querySelector('.add')



const notes = JSON.parse(localStorage.getItem('notes'))

if(notes){
    notes.forEach((n)=>{
        addnote(n)
    })
}




add.addEventListener('click',()=>{
    addnote()
})



function addnote(t = ""){
    
    const note = document.createElement('div');
    note.classList.add("notes");
    note.innerHTML = `
    
    <div class="note" >
            <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash"></i></button>
                </div>
                <div class="main ${t ? "" : "hidden"} "></div>
            <textarea class="${t ? "hidden" : ""}"></textarea>
            
            </div>
    
    
            `;
            
            const edit = note.querySelector('.edit')
            const del = note.querySelector('.delete')
            const main = note.querySelector('.main')
            const textarea = note.querySelector('textarea')
    
            textarea.value = t;
            main.innerHTML = marked(t)
    
    del.addEventListener('click',()=>{
        note.remove()
        updateLS()
    })
    
    
    edit.addEventListener('click',()=>{
      
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
        updateLS();
    })
    
    textarea.addEventListener('input',(e)=>{
        const {value} = e.target;
        main.innerHTML = marked(value)

        updateLS();
    })

    document.body.appendChild(note)
}    


function updateLS(){
    const noteText = document.querySelectorAll('textarea')

    const notes =[]
    
    noteText.forEach((n)=>{
        notes.push(n.value)});
         localStorage.setItem('notes',JSON.stringify(notes))
        
}















