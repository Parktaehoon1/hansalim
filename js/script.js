
// 조합원센터 버튼 클릭시 아래 ul 보여주기
// let headerTopBtn = document.getElementById('header-top-btn');
// console.log(headerTopBtn)
// let headerTopDepth = document.getElementById('header-top-depth2');
// console.log(headerTopDepth)

// headerTopBtn.addEventListener('click', function(){
//   if(headerTopDepth.style.display == "none"){
//     headerTopDepth.style.display = "block"
//   } else {
//     headerTopDepth.style.display = "none"
//   }
// })

// jQuery toggle 
$('#header-top-btn').click(function(){
  $('#header-top-depth2').toggle()
  // show, hide
})

let navButton = $('.nav button')
console.log($('.nav button'))
let toggleList = $('.toggle-list')
console.log("toggle-list",toggleList)
function changeList(showIndex){
  console.log("showindex",showIndex)// 인덱스가 넘어온다
  toggleList.hide()
  if(toggleList.eq(showIndex)){
    toggleList.eq(showIndex).toggle()
  } 


}

$.each(navButton, function(index){
  $(this).click(function (){
    console.log("인덱스",index)
    
    showIndex = index;
    changeList(showIndex) 
  })
})


// 추천상품 데이터
var purposeData;
purposeData = [
  {
    id: "good010203",
    img: "good_1.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_2.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_3.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_4.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_5.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_6.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_7.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_8.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
];

// 목록 html 을 생성해 주는 함수
function makeList(_data, _tag, _col) {
  // 물품 출력 코드
  let dataTotal = _data.length;
  // 항목당 보여줄 개수
  let col = _col;
  //  만들어질 가로 수
  let row = Math.ceil(dataTotal / col);

  let html = "";
  for (let i = 0, index = 0; i < row; i++) {
    html += `<div class="good-wrap">`;

    for (let j = 0; j < col; j++) {
      if (index < dataTotal) {
        let goodObj = _data[index];
        html += `
    <div class="good-box">
      <a href="${goodObj.link}" class="img-link">
        <img src="images/${goodObj.img}" alt="${goodObj.title}" />
      </a>
      <ul class="good-info">
        <li>`;

        // option 출력하기
        let optArr = goodObj.option.split(",");
        for (let k = 0; k < optArr.length; k++) {
          html += `<span class="good-info-option">${optArr[k]}</span>`;
        }
        html += `</li>
        <li>
          <p class="good-info-title">${goodObj.title}(<em>${goodObj.unit}</em>)</p>
        </li>
        <li>
          <p class="good-info-price"><b>${goodObj.price}</b>원</p>
          <button class="good-cart-add">장바구니</button>
        </li>
      </ul>
    </div>
  `;
        index++;
      }
    }

    html += `</div>`;
  }

  let div = document.querySelector(_tag);
  div.innerHTML = html;
}
// 추천상품출력
makeList(purposeData, ".purpose-wrap", 4);

// 레시피 가격 계산
let recipeCheck = $(".recipe-check");
let recipeTotal = $(".recipe-total");
let recipeBtAll = $(".recipe-bt-all");

$.each(recipeCheck, function (index, item) {
  $(this).attr("check", "use");
  $(this).click(function () {
    let check = $(this).attr("check");
    if (check === "use") {
      $(this).attr("check", "no");
    } else {
      $(this).attr("check", "check");
    }
    recipeCalc();
  });
});

recipeBtAll.click(function () {
  // 전체가 선택되었는가?
  let allCheck = true;
  $.each(recipeCheck, function () {
    let check = $(this).attr("check");
    if (check !== "use") {
      allCheck = false;
    }
  });
  if (allCheck) {
    recipeCheck.attr("check", "no");
    recipeBtAll.html("전체선택");
  } else {
    recipeCheck.attr("check", "use");
    recipeBtAll.html("전체해제");
  }
  recipeCalc();
});

function recipeCalc() {
  let money = 0;
  $.each(recipeCheck, function () {
    let check = $(this).attr("check");
    let price = $(this).attr("data-price");
    console.log(check);
    if (check === "use") {
      money += parseInt(price);
    }
  });
  recipeTotal.html(money);
}

recipeCalc();
