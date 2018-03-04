$(document).ready(() => {
  const tweetMaxLength = 140;

  $('.new-tweet textarea').on('keyup', function(event) {
    const $userInputCount = $(this).val().length;
    const $counter = $(this).parent().find('.counter');
    const charactersRemaining = tweetMaxLength - $userInputCount;
    $counter.text(charactersRemaining);

    if (charactersRemaining < 0) {
      $counter.addClass("error");
    } else {
      $counter.removeClass("error");
    }
  });

});