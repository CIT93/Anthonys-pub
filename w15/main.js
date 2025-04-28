/* https://picsum.photos/seed/${img.id}/150 */

function renderPhotos(photos) {
    photos.forEach((img) => { 
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", `https://picsum.photos/seed/${img.id}/150`)
        document.getElementById("Output").appendChild(imgEl);
   })
}   

async function getPhotos() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const photos = await response.json()
       if (!photos.length) {
        console.log('error on return value')
       } else {
        onSuccess(photos)
       }
    } catch(error) {
        onError(error)
    }
   
}


function onSuccess(photos) {
    renderPhotos(photos)
}

function onError(err) {
    console.log(`Error, ${err}`)
}

function start() {
    getPhotos()
}

getPhotos();