
const Output = document.getElementById("output")
const FORM = document.getElementById("Form")



function BeginWorkout() {

    FORM.addEventListener( 'submit', function(e) {
    e.preventDefault()
    const exercises = FORM.exercises.value
    const Reps = FORM.Reps.value
    const Time = FORM.Time.value
    
  
    const Start = document.createElement("p")
    Start.textContent = `your exercise is: ${exercises} and your reps are: ${Reps}, for ${Time} minute`;
    Output.appendChild(Start)
        
    setTimeout(() => {
        const Stop = document.createElement("p")
        Stop.textContent = `STOP!`;
        Output.appendChild(Stop)
    }, parseInt(Time) * 60 * 1000)
})
}

BeginWorkout()
