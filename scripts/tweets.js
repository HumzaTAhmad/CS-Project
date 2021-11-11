
import Twit from "Twit"
import * as notifier from "node-notifier";
import * as open from "open";


const apikey = 'IvdNOSp1Ml8qkqsDCqk20pXEE'
const apiSecretKey = 'FpWTMv2HUkEgaA13hDuqA9UzPALaWcOduvRQB3OhpT3H6WR2kd'
const accessToken = '1436136720895037442-lNI4BvcpqlFZTpAkQkmaiuAPkmzHSy'
const accessTokenSecret = 'hxvQhKkJSwbsVIFxFcVgHFe7IbqzXA23amKMfbLFssrtd'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {
    // 1. GET RECENT TWEETS
      T.get('search/tweets', { q: '#FDtunes since:2021-04-15', count: 10 }, function(err, data, response) {
        const tweets = data.statuses
        .map(tweet => tweet.created_at)
        console.log(tweets);
      })
    
    //2. REAL TIME MONITORING USING STREAM (HASHTAG)
    //  var stream = T.stream('statuses/filter', { track: '#FDtunes' })
    //    stream.on('tweet', function (tweet) {
    //    console.log('Text: ' + tweet.text);
    //    console.log('Date: ' + tweet.date);
    //    console.log('------');
    //  })
})();

