/*!
 * Quickstart Youtube API Module / Modified from API docs - https://developers.google.com/youtube/iframe_api_reference
 *
 * | Markup:
 * | include the api source in the document head: <script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>
 * | looks for div #player
 * | <div id="player"></div>
 *
 */

(function( window ) {

  'use strict';

  /*------------------------------------*\
  $ Register Youtube Player
  \*------------------------------------*/

  var player;
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: '900',
      height: '506',
      videoId: '***********',
      playerVars: {
        showinfo: 0,
        rel: 0,
        modestbranding: 0
      },
      events: {
        'onReady': videoPlay,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  /*------------------------------------*\
  $ Play Video
  \*------------------------------------*/

  function videoPlay () { 
    player.playVideo()
  }

  /*------------------------------------*\
  $ Video State Change
  \*------------------------------------*/

  // Create cmElement Tags on player state change
  function onPlayerStateChange(event) {
    
    if (event.data == YT.PlayerState.PLAYING) {
      // playing stuff here
    }
    if (event.data == YT.PlayerState.PAUSED) {
      // pause stuff here
    }
    if (event.data == YT.PlayerState.ENDED) {
      // ending stuff here
    }
  }

  // API Control
  function videoPlay () {
    player.playVideo()
  }

  function videoPause () {
    player.pauseVideo()
  }

  function videoStop () {
    player.stopVideo()
  }

  // TRANSPORT
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  window.videoPlay  = videoPlay;
  window.videoPause = videoPause;
  window.videoStop  = videoStop;

})( window );
