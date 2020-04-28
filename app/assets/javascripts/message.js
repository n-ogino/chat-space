$(function() {
  function buildHTML(message){
    if (message.image) {
      var html = 
        `<div class="main_chat__center__box">
          <div class="main_chat__center__box__info">
            <div class="main_chat__center__box__info__user_name">
              ${message.user_name}
            </div>
            <div class="main_chat__center__box__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="main_chat__center__box__message">
            <p class="lower-message__content">
              ${message.content}
            </p>
            <img src=${message.image.url} >
          </div>
        </div>`
      return html;
    } else {
      var html =
      `<div class="main_chat__center__box">
        <div class="main_chat__center__box__info">
          <div class="main_chat__center__box__info__user_name">
            ${message.user_name}
          </div>
          <div class="main_chat__center__box__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="main_chat__center__box__message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url, 
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_chat__center').append(html);
      $('.main_chat__center').animate({ scrollTop: $('.main_chat__center')[0].scrollHeight});
      $('form')[0].reset();
      $('.main_chat__bottom__send_btn').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.main_chat__bottom__send_btn').prop('disabled', false);
    })
    
  })
});
 