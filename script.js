//No.1
function check() {
  if (window.confirm('送信してよろしいですか？')) {
    return true;
  }
  else {
    window.alert('キャンセルされました');
    return false;
  }
}


// N0.2
function onClick() {
  var hiddenContent = document.getElementById("hidden_content");
  hiddenContent.style.display = "grid";
  document.body.style.backgroundImage = "linear-gradient(90deg, rgb(22, 135, 237), rgb(20, 55, 90))";
}


// No.3
function changeText() {
  document.getElementById("text").innerHTML = "My name is Kouki Komori. I was born on March 23th, 2003, so I am currently 19 years old. I am a sophomore studying Information and Technology at Tokai University. My hobby is listening to music, particularly vocaloids. My dream for the future is to become engineer.";
}


// No.4
function SeeMore() {
  const container = document.querySelector('.grid-container');

  const item1 = document.createElement('div');
  item1.classList.add('item1');
  item1.innerHTML = `
    <img src="https://img.icons8.com/ios/100/null/robot.png" alt="新しいスキル1アイコン">
    <h3>Robot Control</h3>
    <p>I have experience in programming and controlling robots using languages such as C.</p>
  `;

  const item2 = document.createElement('div');
  item2.classList.add('item2');
  item2.innerHTML = `
    <img src="https://img.icons8.com/ios/100/null/iris-scan.png" alt="新しいスキル2アイコン">
    <h3>Computer Vision</h3>
    <p>I have experience with computer vision using tools such as OpenCV and Python.</p>
  `;

  const item3 = document.createElement('div');
  item3.classList.add('item3');
  item3.innerHTML = `
    <img src="https://img.icons8.com/ios/100/null/arduino-uno-board.png" alt="新しいスキル3アイコン">
    <h3>Electronics Circuit</h3>
    <p>I have experience in electronic circuit analysis using operational amplifiers.</p>
  `;

  container.appendChild(item1);
  container.appendChild(item2);
  container.appendChild(item3);
  document.getElementById("SeeMorebutton").style.display = "none";
}


// No.5
document.getElementById("myBtn").addEventListener("click", function(){
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    var size = Math.floor(Math.random() * 100);
    var color = getRandomColor();

    var circle = document.createElement("div");
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.background = color;
    circle.style.borderRadius = "50%";
    circle.style.position = "absolute";

    document.body.appendChild(circle);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

