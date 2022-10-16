
let all_menu = $('.all-menu');
let all_list_cate_li = $('.all-list-cate > li');
let all_menu_detail_list = $('.all-menu-detail-list');
let all_menu_timer;
let all_menu_timer_delay = 100;
//nice스크롤
let all_menu_wrap = $('.all-menu-wrap');
all_menu_wrap.niceScroll({
    cursoropacitymax: 0.3,
    cursorwidth: "7px",
    cursorborderradius: "10px",
});

$.each(all_list_cate_li, function (index, item) {

    $(this).mouseenter(function () {
        clearTimeout(all_menu_timer);
        all_menu.addClass('all-menu-active');
        all_menu_detail_list.hide();
        all_menu_detail_list.eq(index).show();
    });

    $(this).mouseleave(function () {
        clearTimeout(all_menu_timer);
        all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
    });

});

// 상세 메뉴 영역을 감싸주는 div
let all_menu_detail = $('.all-menu-detail');

// 타이머 지우기
all_menu_detail.mouseenter(function () {
    clearTimeout(all_menu_timer);
});

// 상세 메뉴 영역 div 에서 롤 아웃을 하면 조금 기다렸다가 사라지는 타이머 생성
all_menu_detail.mouseleave(function () {
    clearTimeout(all_menu_timer);
    // 타이머 생성방법 setTimeout(할일, 대기시간)
    all_menu_timer = setTimeout(allMenuHide, all_menu_timer_delay);
});

// 상세 메뉴 사라지기
function allMenuHide() {
    clearTimeout(all_menu_timer);
    all_menu.removeClass('all-menu-active');
}

// 전체 메뉴 보기 
let all = $('#all');
let all_timer;
let all_timer_delay = 100;

all.mouseenter(function () {
    clearTimeout(all_timer);
    all_menu.css('visibility', 'visible');
});

all.mouseleave(function () {
    clearTimeout(all_timer);
    all_timer = setTimeout(hideMenu, all_timer_delay);
});

all_menu.mouseenter(function () {
    clearTimeout(all_timer);
});

all_menu.mouseleave(function () {
    clearTimeout(all_timer);
    all_timer = setTimeout(hideMenu, all_timer_delay);
});

function hideMenu() {
    all_menu.css('visibility', 'hidden');
}
// 전체메뉴의 높이는 웹브라우저의 높이를 기준으로 설정
all_menu.css('height', 'calc(100vh - 200px)');


// 조합원센터 버튼 클릭시 아래 ul 보여주기
let headerTopBtn = document.getElementById('header-top-btn');
console.log(headerTopBtn)
let headerTopDepth = document.getElementById('header-top-depth2');
console.log(headerTopDepth)

headerTopBtn.addEventListener('click', function(){
  if(headerTopDepth.style.display == "none"){
    headerTopDepth.style.display = "block"
  } else {
    headerTopDepth.style.display = "none"
  }
})

// jQuery toggle 
$('#header-top-btn').click(function(){
  $('#header-top-depth2').toggle()
  // show, hide
})

let attendBtn = $('.attend')
let moreBtn = $('.more')
let attendList = $('.attend-list')
let moreList = $('.more-list')

attendBtn.click(function(){
  attendList.toggle()
  moreBtn.removeClass('active')
  attendBtn.toggleClass('active')
  moreList.hide()
})
moreBtn.click(function(){
  moreList.toggle()
  attendBtn.removeClass('active')
  moreBtn.toggleClass('active')
  attendList.hide()
})

// function changeList(showIndex){
//   console.log(showIndex)
//   console.log(navButton.eq(showIndex))
//   if(navButton[showIndex]){
//     attendList.show()
//   } else {
//     moreList.show()
//   }
// }
// $.each(navButton, function(index){
//   $(this).click(function (){
//     console.log("인덱스",index)
    
//     showIndex = index;
//     changeList(showIndex) 
//   })
// })

// visual section 부분
let sw_visual = new Swiper('.sw-visual', {
  autoplay: {
      delay: 3000,
      // 스와이퍼 후, 자동재생 비활성화 되지 않음
      disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  navigation: {
      nextEl: '.sw-visual-next',
      prevEl: '.sw-visual-prev',
  },
  pagination: {
      el: '.sw-visual-pg',
      type: 'fraction',
  }
});

let sw_visual_pause = $('.sw-visual-pause');
sw_visual_pause.click(function () {
  let temp = $(this).hasClass('sw-visual-pause-active')
  if (temp != true) {
      // 적용이 안되었다. 그래서 적용
      $(this).addClass('sw-visual-pause-active')
      sw_visual.autoplay.stop();
  } else {
      // 적용이 되었다. 그래서 적용해제
      $(this).removeClass('sw-visual-pause-active')
      sw_visual.autoplay.start();
  }
});



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
