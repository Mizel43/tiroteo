window.addEventListener("DOMContentLoaded", () => {
  var buttons = document.querySelectorAll(".like_box"); // получаем все элементы с классом "like_box"
  var clicked = {}; // объект, хранящий флаги для каждой кнопки

  for (var i = 0; i < buttons.length; i++) {
    clicked[i] = false; // устанавливаем флаг для каждой кнопки в false
    buttons[i].addEventListener("click", function () {
      var index = Array.prototype.indexOf.call(buttons, this); // получаем индекс текущей кнопки
      if (!clicked[index]) { // если клик еще не был сделан
        var span = this.nextElementSibling; // получаем следующий элемент span
        var number = parseInt(span.innerHTML); // получаем число из элемента span
        span.innerHTML = number + 1; // увеличиваем число на 1
        clicked[index] = true; // устанавливаем флаг для текущей кнопки в true
      }
    });
  }

  // Получаем ссылку на кнопку "btn_send"
  var btnSend = document.querySelector('.btn_send');

  // Добавляем обработчик события "click" на кнопку "btn_send"
  btnSend.addEventListener('click', function () {
    // Получаем текст из поля инпута "text_a_i"
    var commentText = document.querySelector('.text_a_i').value;

    // Создаем HTML-код для нового комментария
    var newComment = '<div class="_3-8y _5nz1 clearfix" direction="left">' +
      '<div class="_ohe lfloat"><a href="https://www.facebook.com/people/Guadalupe-Macias/100069248682229/" src="https://scontent-fra5-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=rGkB-rS9ckMAX-Q0x3Q&amp;_nc_ht=scontent-fra5-1.xx&amp;edm=ADI6gjAEAAAA&amp;oh=00_AfDMBU4j_CtbdOK9DGN_pH6wPoQrQAmgVE3DJ6mHg6xIKw&amp;oe=64833D78" target="_blank" class="img _8o _8s UFIImageBlockImage"><img class="_1ci img" src="https://scontent-fra5-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p48x48&amp;_nc_cat=1&amp;ccb=1-7&amp;_nc_sid=dbb9e7&amp;_nc_ohc=rGkB-rS9ckMAX-Q0x3Q&amp;_nc_ht=scontent-fra5-1.xx&amp;edm=ADI6gjAEAAAA&amp;oh=00_AfDMBU4j_CtbdOK9DGN_pH6wPoQrQAmgVE3DJ6mHg6xIKw&amp;oe=64833D78" alt=""></a></div>' +
      '<div class=""><div class="UFIImageBlockContent _42ef clearfix" direction="right">' +
      '<div class="_ohf rfloat"><div></div></div>' +
      '<div class=""><div><span><a target="_blank" class=" UFICommentActorName" dir="ltr" href="https://www.facebook.com/people/Guadalupe-Macias/100069248682229/">You</a></span>' +
      '<div class="_3-8m"><div class="_30o4"><span><span class="_5mdd"><span>' + commentText + '</span></span></span><span></span></div></div>' +
      '<div class="_2vq9 fsm fwn fcg"><a href="#">Me gusta</a><span aria-hidden="true"> · </span><a href="#">Responder</a><span aria-hidden="true"> · </span><i class="like_box2 _3-8_ _4iy4 img sp_Ip2XZyfUSLx sx_dada87" alt="" data-visualcompletion="css-img"></i><span>0</span><span><span aria-hidden="true"> · </span><a class="uiLinkSubtle" href="https://www.unotv.com/internacional/tiroteo-en-un-centro-comercial-de-texas-hay-heridos/?fb_comment_id=752043309802649" data-ft="{&quot;tn&quot;:&quot;N&quot;}" target="_blank"><abbr aria-label="Hace 3 días" minimize="true" class="UFISutroCommentTimestamp livetimestamp" data-utime="1683442431" data-minimize="true" data-shorten="true">0 min</abbr></a></span></div>' +
      '</div></div></div></div></div>';

    // Создаем новый элемент "div" и добавляем в него HTML-код для нового комментария
    var newCommentDiv = document.createElement('div');
    newCommentDiv.innerHTML = newComment;

    // Получаем ссылку на элемент "_4k-6"
    var element4k6 = document.querySelector('._4k-6');

    // Добавляем новый элемент "div" в конец элемента "_4k-6"
    element4k6.appendChild(newCommentDiv.firstChild);
    // добавляем обработчик события клика на новую кнопку
    var newButton = element4k6.querySelector(".like_box2");
    var newSpan = newButton.nextElementSibling;
    var newIndex = buttons.length; // индекс новой кнопки
    clicked[newIndex] = false; // устанавливаем флаг для новой кнопки в false
    newButton.addEventListener("click", function () {
      var index = Array.prototype.indexOf.call(buttons, this); // получаем индекс текущей кнопки
      if (!clicked[index]) { // если клик еще не был сделан
        var span = this.nextElementSibling; // получаем следующий элемент span
        var number = parseInt(span.innerHTML); // получаем число из элемента span
        span.innerHTML = number + 1; // увеличиваем число на 1
        clicked[index] = true; // устанавливаем флаг для текущей кнопки в true
      }
    });
    // очищаем поле ввода
    document.querySelector(".text_a_i").value = "";

  });

  // создаем новый экземпляр MutationObserver
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // проверяем, появился ли элемент с классом move-i
      var moveElement = mutation.target.querySelector('.like_box2');
      if (moveElement) {
        moveElement.scrollIntoView({ behavior: 'smooth' });
        // останавливаем наблюдение, если элемент найден
        observer.disconnect();
      }
    });
  });
  
  // настраиваем наблюдение за изменениями в DOM
  var config = { childList: true, subtree: true };
  observer.observe(document.body, config);
  
  
  // Получаем ссылку на элемент, к которому нужно переместить вьюпорт
const element = document.getElementById('pic_scroll');
// Выбираем все кнопки с классом scroll-btn
const scrollBtns = document.querySelectorAll('.scroll-btn');

// Для каждой кнопки добавляем обработчик клика
scrollBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Перемещаем вьюпорт к элементу
    element.scrollIntoView({ behavior: 'smooth' });
  });
});

});