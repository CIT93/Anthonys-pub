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
    // filter
    const filterPostArr = posts.filter(post =>  post.userId === 1 && post.title.length > 17)
    console.log(filterPostArr)

    // map
    const mappedPostArr = filterPostArr.map(post => {
        return post.body.length
    })
    console.log(mappedPostArr)

    // reduce
    /* const total = mappedPostArr.reduce((sum, len) => sum + len, 0) */
    
    // average, ended up gatting isNAN, ran it threw devtools and i still couldn't find the error as to whats
    // causing it.
    const total = mappedPostArr.reduce((sum, len) => sum + len, 0) 
    const average = total / mappedPostArr
    console.log(average)
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