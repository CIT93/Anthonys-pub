
const Output = document.getElementById("output")
const FORM = document.getElementById("Form")

function timeStop(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const stop = document.createElement("p")
            stop.textContent = `STOP!`;
            Output.appendChild(stop)
            FORM.reset()
            reject()
        }, parseInt(time) * 60 * 1000)
    })

}  


function onError() {
    const error = document.createElement("p")
    error.textContent = `⚠️ Error!`;
    Output.appendChild(error)
    FORM.reset()
}

FORM.addEventListener('submit', function (e) {
    e.preventDefault()
    const exercises = FORM.exercises.value
    const reps = FORM.reps.value
    const time = FORM.time.value

    Output.innerHTML = '';

    const start = document.createElement("p")
    start.textContent = `your exercise is: ${exercises} and your reps are: ${reps}, for ${time} minute/s`;
    Output.appendChild(start)

    timeStop(time)
        .catch(onError)
})
