/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('#document').ready(function(e) {
  /// DATA
  function escape(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createNewTweetElement = (tweetObj) => {

    const username = tweetObj.user.name;
    const handle = tweetObj.user.handle;
    const smAvatar = tweetObj.user.avatars.small;
    const mdAvatar = tweetObj.user.avatars.regular;
    const lgAvatar = tweetObj.user.avatars.large;
    const content = tweetObj.content.text;
    const time = tweetObj.created_at / 1000;
    const $tweet = $("<article>").addClass("tweet");
    const $header = $("<header>").addClass("header");
    const $content = $("<p>").addClass("message");
    const $footer = $("<footer>").addClass("footer");
    const $headerH1 = $("<h1>" + username + "</h1>").addClass("username");
    const $headerP = $("<p>" + handle + "</p>").addClass("shorthand");
    const $headerImg = $("<img>").addClass("icon").attr("src", mdAvatar);
    const $messageP = $("<p>" + escape(content) + "</p>").addClass("message");
    const $footerP = $(`<p data-livestamp=` + time + `></p>`).addClass("timeStamp");
    const $footerUl = $(`<ul><li><i class="fas fa-flag"></i></li>
                        <li><i class="fas fa-retweet"></i></li>
                        <li><i class="fas fa-heart"></i></li></ul>`).addClass("miniIcons");
    //Build header
    $header.append($headerImg).append($headerH1).append($headerP);
    $tweet.append($header);
    //Build content
    $tweet.append($messageP);
    //Build footer
    $footer.append($footerP).append($footerUl);
    $tweet.append($footer);

    return $tweet;
  }

  function renderTweets(tweets) {
    $('#tweets-container').empty();
    tweets.forEach((tweet) => {
      const $newTweet = createNewTweetElement(tweet);
      $('#tweets-container').prepend($newTweet);
    });
  }

  const loadTweets = () => {
    $.get('/tweets').done((tweets) => {
      renderTweets(tweets);
    });
  }

  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    const userInput = $(this).find("textArea").val();
    if (!userInput.trim().length) {
      alert('you cannot send empty tweet!');
    } else if (userInput.length > 140) {
      alert('tweet must be with in 140 characters');
    } else {
      const data = { text: userInput };
      $.post('/tweets', data).done(() => {
        loadTweets();
      });
    }
  });
  loadTweets();

  //toggle compose by button
  $('#composeButton').on('click', (event) => {
    $('.new-tweet').slideToggle("slow");
    $('.new-tweet form textArea').focus();
  });
});