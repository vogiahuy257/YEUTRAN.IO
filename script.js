//display: inline-flex;


function btnClick(){
    const bgBody = document.querySelector('body');
    bgBody.style.backgroundColor = "rgb(255, 250, 211)";
    bgBody.style.display = 'flex';
    activer();
    runText();
};

function activer(){
    var btn = document.querySelector('button.btn');
    var allText = document.querySelectorAll('.text');

    btn.style.display = 'none';

    allText[0].style.display = 'block';
    allText[1].style.display = 'inline-block';
};

function runText() {

    for(let i=0; i<8; i++){
    setTimeout(()=>{
        const textNode = document.querySelectorAll('span');
       textNode[i].style.display = 'inline-block';
    },(i*300));
    }
  }


