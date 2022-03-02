<scrip />
<body>
  <div class="container">
    <span class="title-word title-word-1">In</span>
    <span class="title-word title-word-2">The</span>
    <span class="title-word title-word-3">Beninging</span>
    <span class="title-word title-word-4">YEEE!!!</span>
  </div>
  <div class="balken">&nbsp;</div>
</body>

<style lang="scss">
  body {
    background: #0f0f24;
    outline-style: none;
    height: 7.85em;
    margin: 0;
    padding: 0;
  }
  .balken {
    background: #404eed;
    height: 5px;
    padding: 0;
    margin-top: 2rem;
  }

  .title-word {
    animation: color-animation 4s linear infinite;
    font-size: 4.5rem;
    font-weight: bold;
    margin-top: 2rem;
  }
  .title-word-1 {
    --color-1: #df8453;
    --color-2: #3d8dae;
    --color-3: #e4a9a8;
  }
  .title-word-2 {
    --color-1: #dbad4a;
    --color-2: #accfcb;
    --color-3: #17494d;
  }
  .title-word-3 {
    --color-1: #accfcb;
    --color-2: #e4a9a8;
    --color-3: #accfcb;
  }
  .title-word-4 {
    --color-1: #3d8dae;
    --color-2: #df8453;
    --color-3: #e4a9a8;
  }
  @keyframes color-animation {
    0% {
      color: var(--color-1);
    }
    32% {
      color: var(--color-1);
    }
    33% {
      color: var(--color-2);
    }
    65% {
      color: var(--color-2);
    }
    66% {
      color: var(--color-3);
    }
    99% {
      color: var(--color-3);
    }
    100% {
      color: var(--color-1);
    }
  }
</style>
