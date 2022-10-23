const input = document.getElementById('input')
const button = document.getElementById('add')
const arrText = []

 button.onclick = () => {
    if (input.value === '') {
        return
    } else  {
        arrText.push((input.value.trim() === ''))}
    input.value = ''
     console.log(arrText)
 }
