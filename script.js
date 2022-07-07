function display_input(){
  let input = document.getElementById('input');
  input.style.display = "flex";
  let overlay = document.getElementById('overlay');
  overlay.style.display = "block";
}


function new_note(){
  let note = document.createElement('div');
  note.id = "note" ;
  let title = document.createElement('p');
  title.id = "title";
  let title_content = document.getElementById("title1").value;
  title.innerHTML = title_content;
  note.appendChild(title);
  document.getElementById("output").appendChild(note);
  document.getElementById("input").style.display ="none";
  document.getElementById("overlay").style.display = "none";
  let note_reader = document.createElement('div');
  note_reader.id = "note-reader";
  let header = document.createElement('div');
  header.id = "header";
  let title2 = document.createElement('h1');
  title2.id = "title2" ; 
  title2.innerHTML = title_content;
  let exit = document.createElement('button');
  exit.id = "exit";
  exit.innerHTML = "&#10006;";
  header.appendChild(title2);
  header.appendChild(exit);
  note_reader.appendChild(header);
  let note_content = document.createElement('p');
  note_content.id = "note-content";
  let text = document.getElementById('text').value;
  note_content.innerHTML = text;
  note_reader.appendChild(note_content);
  document.body.appendChild(note_reader);
  note.addEventListener('click', ()=>{
       note_reader.style.display = "flex";
       let overlay = document.getElementById('overlay');
       overlay.style.display = "block";
       exit.addEventListener('click', ()=>{
              note_reader.style.display = "none" ;
              overlay.style.display  = "none";
       })
  })
}