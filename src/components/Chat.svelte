<!--
    This module handles chat layout and chat functionality
-->
<script lang="ts">
    import { afterUpdate  } from 'svelte'; 
    import { onMount } from 'svelte';
    import { onDestroy } from 'svelte';

    export let username: string|null;
    export let color: string|null;
    export let socket: any;
    
    //code to be executed when module is loaded
    onMount( () => {
        window.addEventListener("keyup", submitEvent );
        //websocket listeners
        socket.on("message", function(data) {
            addMessage(data);
        });
        socket.on("user joined", function(data) {
            addMessage(data);
        });
        socket.on("user left", function(data) {
            let obj = {
                username: "system",
                color: "ghostwhite",
                message: data + " left",
            }
            addMessage(obj);
        });
    });

    //code to be executed when module is unloaded
    onDestroy( () => {
        window.removeEventListener("keyup", submitEvent );
    });

    let input = "";
    let messages = [];
    let msg_update = false;

    //function handles messages and sends them to the server
    function send(){
        input = input.trim();
        if(input.length <= 0) return;
        let data = {
            username: username,
            color: color,
            message: input
        }
        addMessage(data);
        socket.emit("message", data);
        input = "";
    }

    //function adds messages to corresponding array
    function addMessage(data){
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
        if(!msg_update) return;
        msg_update = false;

        const height = msgs.getBoundingClientRect().height;
        if (msgs.scrollTop == last_height - height || last_bb_height < height)
            msgs.scrollTop = msgs.scrollHeight;
        
        last_height = msgs.scrollHeight;
        last_bb_height = height;
    })

    //function for event listener || keybind
    function submitEvent(event){
        if(event.key === "Enter"){
            send();
        }
    }
</script>


<div class="chat">
    <div class="msgs-container">
        <div class="messages">
            {#each messages as message}
            <div class="message">
                <!--<img class="icon" src="doomer.jpg" alt="doomer">-->
                <span class="username" style="{"color: " + message.color + ";"}">{message.username}</span><br>
                <div class="message-text-container">
                    <span class="message-text">{message.message}</span>
                </div>
            </div>
            {/each}
        </div>
    </div>
    <div class="input">
        <input bind:value={input} maxlength="1000" placeholder="write your message here"/>
        <button on:click={send}>send</button>
        <span>as</span>
        <span style="{"color: " + color + "; font-weight: 600;"}">{username}</span>
    </div>
</div>


<style lang="scss">
    .chat {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 75%;
    }
    .msgs-container {
        position: relative;
        background-color: #202124;
        height: 35rem;
        width: 100%;
        padding-right: 0;
    }
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
    }
    .message-text-container {
        padding-left: 1em;
    }
    .input{
        padding: 1rem;
        font-size: 1.5rem;
    }
    /*.icon{
        height: 2rem;
        width: 2rem;
    }*/
</style>