<!--
    Main App  -  I will never lose this feeling
-->
<script lang="ts">
  import Login from "./components/Login.svelte";
  import Chat from "./components/Chat.svelte";
  import Users from "./components/Users.svelte";
  import io from "./components/socket.io";
  import Header from "./components/Header.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  //import Liveticker from "./components/Liveticker.svelte";
  import Footer from "./components/Footer.svelte";

  export let username: string | null;
  export let color: string | null;

  //initialising websocket
  let socket = io();
</script>

<svelte:head>
  <title>Web-Chat</title>
</svelte:head>
<body>
  <main>
    <Header />
    <div class="wrapper">
      {#if username === null}
        <Login bind:username bind:color {socket} />
        <Footer />
      {:else}
        <div class="split-container">
          <Chat {username} {color} {socket} />
          <Users {username} {socket} />
          <!--<Liveticker />-->
          <Sidebar />
        </div>
      {/if}
    </div>
    <div />
  </main>
</body>

<style lang="scss" global>
  @import "css/svelte.variables.scss";
  @import url("https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=Fredoka:wght@300&display=swap");
  body {
    background-color: #1c1b29;
    padding: 0;
    font-family: "Fredoka", sans-serif;
  }
  main {
    text-align: center;
    padding-top: 0;
    max-width: 240px;
    margin: 0;
    font-family: "Fredoka", sans-serif;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  .wrapper {
    position: relative;
    top: 2.5rem;
  }
  .split-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }
</style>
