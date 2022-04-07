<script>
</script>

<footer>
  <div class="tabelle">
    <ul><a href="./components/Datenschutz.svelte">Datenschutz</a></ul>
  </div>
  <div class="bild">
    <img alt="lazor" src="lazor-dude.gif" /><br />
  </div>
  <div class="ocean">
    <div class="wave" />
    <div class="wave" />
    <div class="wave" />
  </div>
</footer>

<style lang="scss">
  @import "../css/svelte.variables.scss";
  @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap");

  img {
    border: solid 5px #43b581;
    border-radius: 50px;
  }
  footer {
    background: #003f7c;
    padding: 0;
    margin-top: 9.86rem;
    box-sizing: content-box;
  }
  .bild {
    background: $blauerton;
  }
  .tabelle {
    font-size: 20px;
    color: ghostwhite;
    font-weight: bold;
    font-family: "Fredoka", sans-serif;
  }

  //Wave Animation

  /* waves */
  .ocean {
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 20rem;
    left: 0;
    right: 0;
    overflow-x: hidden;
    justify-content: flex-end;
  }

  .wave {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23003F7C'/%3E%3C/svg%3E");
    position: absolute;
    width: 200000%;
    height: 100%;
    animation: wave 10000s -3000s linear infinite;
    //transform: translate3d(0, 0, 0);
    background-repeat: repeat no-repeat;
    opacity: 0.9;
  }

  .wave:nth-of-type(2) {
    bottom: 0;
    animation: wave 17500s linear reverse infinite;
    opacity: 0.6;
  }

  .wave:nth-of-type(3) {
    bottom: 0;
    animation: wave 19700s -960s linear infinite;
    opacity: 0.5;
  }
  @keyframes wave {
    0% {
      transform: translateX(0) translateZ(0);
    }
    50% {
      transform: translateX(-25%) translateZ(0);
    }
    100% {
      transform: translateX(-50%) translateZ(0);
    }
  }

  //End Wave Animation
</style>
