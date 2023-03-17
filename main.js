const input = document.getElementById('input')
const btn = document.getElementById('btn')

input.addEventListener('keydown', (e)=>{
    if(e.keyCode== 13)
    document.body.style.background = `${input.value}`
})