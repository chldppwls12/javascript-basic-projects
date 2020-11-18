const colorList = ['red', 'blue','green', 'orange', 'gray', 'tomato', 'skyblue', 'black', 'pink', 'yellow'];
const info_span = document.querySelector('.info');
const clickBtn = document.querySelector('.click-btn');

clickBtn.addEventListener('click', () => {
    color = randomColor();
    info_span.innerHTML = color;
    document.querySelector('body').style.backgroundColor = color;
})

let randomColor = () => {
    let randomNum = Math.floor(Math.random() * colorList.length);
    return colorList[randomNum];
}