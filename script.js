const button = document.querySelector("button")
const body = document.querySelector("body")

const color = ['red','#fff','green','blue','yellow','pink','purple','Orange','Brown','IndianRed','#F08080','#FA8072','#FFDAB1','#00FF00'];
body.style.backgroundColor = 'violet'

button.addEventListener('click',changeB)

function changeB(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]

}
