const hexList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const info_span = document.querySelector('.info');
const clickBtn = document.querySelector('.click-btn');

clickBtn.addEventListener('click', () => {
    let color = '#';
    for(let i=0; i<6; i++){
        color = color + hexList[randomColor()];
    }
    info_span.innerHTML = color;
    document.querySelector('body').style.backgroundColor = color;
})

let randomColor = () => {
    let randomNum = Math.floor(Math.random() * hexList.length);
    return randomNum; 
}
