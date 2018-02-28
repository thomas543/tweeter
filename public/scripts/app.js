/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$('#document').ready(function(e) {
  /// DATA
  const data = [{
      "user": {
        "name": "Newton",
        "avatars": {
          "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];



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
    const $messageP = $("<p>" + content + "</p>").addClass("message");
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
    tweets.forEach((tweet) => {
      const $newTweet = createNewTweetElement(tweet);
      $('#tweets-container').append($newTweet);
    });
  }

  renderTweets(data);
});