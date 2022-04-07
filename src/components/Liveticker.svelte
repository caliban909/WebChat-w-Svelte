<div class="ticker-wrap">
  <div class="ticker">
    <div class="ticker__item" style="color: red; font-weight: bold;">
      Good Day, 'Ahlan W Sahlan, أهلا و سهلان, Breaking News:
      https://www.metro.pe/
    </div>
    <div class="ticker__item">Genesise one Verse one</div>
    <div class="ticker__item">in the beninging</div>
    <div class="ticker__item">in the</div>
    <div class="ticker__item">in the benii</div>
    <div class="ticker__item">in the beninging</div>
    <div class="ticker__item">yeah</div>
    <div class="ticker__item">in the</div>
    <div class="ticker__item">i-in</div>
    <div class="ticker__item">ah</div>
    <div class="ticker__item">in the</div>
    <div class="ticker__item">(listen proper)</div>
    <div class="ticker__item">in</div>
    <div class="ticker__item">inne the beninging</div>
    <div class="ticker__item">yee</div>
    <div class="ticker__item">in in</div>
    <div class="ticker__item">inne the beninging</div>
    <div class="ticker__item">inne the beniiingii</div>
    <div class="ticker__item">inne</div>
    <div class="ticker__item">iin in</div>
    <div class="ticker__item">ingi the</div>
    <div class="ticker__item">inne the beninging</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">Why are you RUNNING?</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">Ich bin bruno, und bin der Kameramann</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">#nofrontaberfullfront</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">We are also winning next time maybach</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">Besuchsttag Erwachsenen Vollzug</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">
      Vallah Kriege | Uhh Leichte beute, ist wie auf unserm weg mit dem Teufel
    </div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">rebibe me jett</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">zis scheise hörts</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">wer iz zage?</div>
    <div class="ticker__item" style="color: red; font-weight: bold;">|</div>
    <div class="ticker__item">auf wiederzehen</div>
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=Fredoka:wght@300&display=swap");
  // * { box-sizing: border-box; }
  $duration: 50s;

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  .ticker-wrap {
    position: fixed;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    height: 3rem;
    background-color: rgba(#000, 0.9);
    padding-left: 100%;
    box-sizing: content-box;
    font-family: "Fredoka", sans-serif;

    .ticker {
      display: inline-block;
      height: 3rem;
      line-height: 3rem;
      white-space: nowrap;
      padding-right: 100%;
      box-sizing: content-box;

      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
      -webkit-animation-timing-function: linear;
      animation-timing-function: linear;
      -webkit-animation-name: ticker;
      animation-name: ticker;
      -webkit-animation-duration: $duration;
      animation-duration: $duration;

      &__item {
        display: inline-block;

        padding: 0 2rem;
        font-size: 2rem;
        color: white;
      }
    }
  }
</style>
