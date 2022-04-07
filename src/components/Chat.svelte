<!--
    This module handles chat layout and chat functionality
-->
<script lang="ts">
  import { afterUpdate } from "svelte";
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";

  export let username: string | null;
  export let color: string | null;
  export let socket: any;

  //code to be executed when module is loaded
  onMount(() => {
    window.addEventListener("keyup", submitEvent);
    //websocket listeners
    socket.on("message", function (data) {
      addMessage(data);
    });
    socket.on("user joined", function (data) {
      addMessage(data);
    });
    socket.on("user left", function (data) {
      let obj = {
        username: "system",
        color: "ghostwhite",
        message: data + " left",
      };
      addMessage(obj);
    });
  });

  //code to be executed when module is unloaded
  onDestroy(() => {
    window.removeEventListener("keyup", submitEvent);
  });

  let input = "";
  let messages = [];
  let msg_update = false;

  //function handles messages and sends them to the server
  function send() {
    input = input.trim();
    if (input.length <= 0) return;
    let data = {
      username: username,
      color: color,
      message: input,
    };
    addMessage(data);
    socket.emit("message", data);
    input = "";
  }

  //function adds messages to corresponding array
  function addMessage(data) {
    let message = data;
    messages = [...messages, message];
    msg_update = true;
  }

  //checks if msgs is defined
  let msgs = undefined;
  function initCheck() {
    if (msgs === undefined) {
      msgs = document.querySelector(".messages");
    }
  }

  //this code handles scrolling of chat window
  let last_height = 0;
  let last_bb_height = 0;
  afterUpdate(() => {
    initCheck();
    if (!msg_update) return;
    msg_update = false;

    const height = msgs.getBoundingClientRect().height;
    if (msgs.scrollTop == last_height - height || last_bb_height < height)
      msgs.scrollTop = msgs.scrollHeight;

    last_height = msgs.scrollHeight;
    last_bb_height = height;
  });

  //function for event listener || keybind
  function submitEvent(event) {
    if (event.key === "Enter") {
      send();
    }
  }
</script>

<div class="chat">
  <div class="msgs-container">
    <div data-aos="fade-right" class="messages">
      {#each messages as message}
        <div class="message">
          <!--<img class="icon" src="doomer.jpg" alt="doomer">-->
          <span class="username" style={"color: " + message.color + ";"}
            >{message.username}</span
          ><br />
          <div class="message-text-container">
            <span class="message-text">{message.message}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="input">
    <input
      class="write"
      bind:value={input}
      maxlength="1000"
      placeholder="write your message here"
      style="--color: {color}"
    />
    <button class="sendebutton" style="--color: {color}" on:click={send}
      >send</button
    >
    <button class="emojis">:)</button>
    <!--<span>as</span>
        <span style="{"color: " + color}">{username}</span>-->
  </div>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap");
  .chat {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
  }
  .msgs-container {
    position: relative;
    margin-left: 7em;
    background-color: #0f0f24;
    height: 35rem;
    width: 95%;
    padding-right: 0;
    border: solid 10px #404eed;
    border-radius: 5px;
  }

  //Scrollbar

  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 50px;
  }

  ///* Handle on hover */
  //::-webkit-scrollbar-thumb:hover {
  //    background: var(--color);
  //}

  //Scrollbar end

  .messages {
    position: relative;
    color: white;
    max-height: 35rem;
    text-align: left;
    max-width: 100%;
    height: 100%;
    word-wrap: break-word;
    overflow: auto;
    font-size: 2rem;
    font-weight: 200;
    padding-left: 0.5em;
  }
  .username {
    font-weight: bold;
    font-family: "Fredoka", sans-serif;
  }
  .message-text-container {
    padding-left: 1em;
    font-family: "Fredoka", sans-serif;
  }
  .input {
    position: relative;
    padding: 1rem;
    left: 7rem;
    font-size: 1.5rem;
    float: left;
    width: 93.5%;
    top: 2.1rem;
    background-color: #0f0f24;
    border: solid 5px #404eed;
    border-radius: 8.5px;
    font-family: "Fredoka", sans-serif;
  }
  .emojis {
    background-color: #0f0f24;
    border: solid 2px #404eed;
    color: ghostwhite;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 7.5px;
    outline-style: none;
  }
  .emojis:active {
    background-color: #1e1e48;
  }
  .sendebutton {
    font-weight: bold;
    background-color: #0f0f24;
    border: solid 2px #404eed;
    border-radius: 7.5px;
    color: var(--color);
    outline-style: none;
  }
  .sendebutton:active {
    background-color: #1e1e48;
  }
  .write {
    width: 80%;
    background-color: #0f0f24;
    border: solid 2px #404eed;
    border-radius: 7.5px;
    color: var(--color);
    outline-style: none;
  }
  .write:active {
    background-color: #1e1e48;
  }

  /*.icon{
        height: 2rem;
        width: 2rem;
    }*/
</style>
