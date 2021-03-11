var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트를 가져온다
typingTxt = typingTxt.split(""); // 한글자씩 자른다.
if (typingBool == false) { // 타이핑이 진행되지 않았다면
  typingBool = true;

  var tyInt = setInterval(typing, 100); // 반복동작
}

function typing() {
  if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복
    $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    clearInterval(tyInt); //끝나면 반복종료
  }
}

$(".chart").hide();

var skillsOffset = $('.education').offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() > skillsOffset.top) {
          $(".chart").show()
          $('.chart').easyPieChart({
            barColor: '#72C7C5', //차트가 그려질 색
            trackColor: '#4F5A6D', // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
            scaleColor: '#87ADB9', // 차트 테두리에 그려지는 기준선 (chart2	의 테두리 선)
            lineCap: 'round', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
            lineWidth: 15, // 차트 선의 두께
            size: 120, // 차트크기
            animate: 1000, // 그려지는 시간
            onStart: $.noop,
            onStop: $.noop
          });
        }
    });


$('.bxslider').bxSlider({
  auto: true, // 자동 슬라이드
  autoControls: false, // 시작, 정지버튼 노출 여부
  controls: false, // prev/next 버튼 노출 여부
});

$('#HOME').click(function() {
  $('body,html').animate({
    scrollTop: 0
  }, 300);
  return false;
});

var menuLinks = document.querySelectorAll('.header-li-a');

function clickMenuHandler() {   // onclickMenu와 같은 on____ , _____listener, _____handler들은 이벤트 리스너들이라고 할 수 있고, 보통 이런 이름들을 가짐
     for (var i = 0; i < menuLinks.length; i++){
         menuLinks[i].classList.remove('menu');
     }
     this.classList.add('menu');
 }

 for (var i = 0; i < menuLinks.length; i++){
     menuLinks[i].addEventListener('click', clickMenuHandler);
 }
