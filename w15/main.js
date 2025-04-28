/* https://picsum.photos/seed/${img.id}/150 */
const URL = "https://jsonplaceholder.typicode.com/posts"

async function getPhotos() {
    try {
        const response = await fetch(URL)
        const photos = await response.json()
       if (photos.length) {
        onSuccess(photos)
       } else {
        console.log('error on return value')
       }
    } catch(error) {
        onError(error)
    }
   
}

const displayPhotos = posts => {
    const filterPostArr = posts.filter(post =>  post.userId === 1 && post.title.length > 10)
    console.log(filterPostArr)
}



function onError(err) {
    console.log(`Error, ${err}`)
}

function onSuccess(posts) {
    displayPhotos(posts)
}

function start() {
    getPhotos()
}

getPhotos();