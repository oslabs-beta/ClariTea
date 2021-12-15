import React  from 'react';

export default function Drag(){
document.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();

  for (const f of e.dataTransfer.files) {
    console.log('File(s) you dragged here: ', f.path);
    // post f.path to server, append file sync to models for connection pool start
    alert('Success!');
  }
});
document.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
    return(
        <div id='holder'>Drag your file here</div>
    )
}
