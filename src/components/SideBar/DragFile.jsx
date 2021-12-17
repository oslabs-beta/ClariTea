import React  from 'react';

export default function Drag(){
document.addEventListener('drop', (e) => {
  e.preventDefault();
  e.stopPropagation();

  for (const f of e.dataTransfer.files) {
    if (f.path.includes('.zip')) {
    //if path.extname = zip, 
        console.log('File(s) you dragged here: ', f.path);
        // post f.path to server, append file sync to models for connection pool start

        fetch('/api/fileUpload', {

            method: "POST",
            headers: { 'Content-Type': 'application-json' },
            body: JSON.stringify({ 'filePath': f.path }),
        })

            .then(res => alert('Upload success!'))
            .catch(error => console.log(error));
    }
    else {throw new Error('Upload must be a zip bundle file. Please check documentation or demo and try again.')}
    //else return error -- must upload zip bundle file. Please check demo for more.
  }
});
document.addEventListener('dragover', (e) => {
  e.preventDefault();
  e.stopPropagation();
});
    return(
        <div id='holder'>Drag your bundle here</div>
    )
}