$(document).ready(() => {
  // notify when document is ready
  console.log('this document is ready!');
  const tweetMaxLength = 140;

  $('.new-tweet textarea').on('keyup', function(event) {
    let $userInputCount = $(this).val().length;
    let $counter = $(this).parent().find('.counter');
    const charactersRemaining = tweetMaxLength - $userInputCount;
    $counter.text(charactersRemaining);

    if (charactersRemaining < 0) {
      $counter.addClass("error");
    } else {
      $counter.removeClass("error");
    }
  });

    $('.tweet').on('mouseover', function(event) {
      console.log("hovering");
      $('.username,.icon,.shorthand,.message,.tweet .footer').removeClass("onHover");
      $('.username,.icon,.shorthand,.message,.tweet .footer').addClass("onHover");
      $('.miniIcons').css("display","inline");
    });

});