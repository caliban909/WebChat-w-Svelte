<!--
    Main App  -  I will never lose this feeling
-->

<script lang="ts">
    import Login from "./components/Login.svelte";
    import Chat from "./components/Chat.svelte";
    import Users from "./components/Users.svelte";
    import io from "./components/socket.io";

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
        <div class="container">
            <h2 class="title">
                <span class="title-word title-word-1">One</span>
                <span class="title-word title-word-2">Two</span>
                <span class="title-word title-word-3">Three</span>
                <span class="title-word title-word-4">FOUR!!!</span>
            </h2>
        </div>
        <div class="wrapper">
            {#if username === null}
                <Login bind:username bind:color {socket} />
            {:else}
                <div class="split-container">
                    <Chat {username} {color} {socket}/>
                    <Users {username} {socket}/>
                </div>
            {/if}
        </div>
    </main>
</body>


<style lang="scss">
    body {
        background-color: #fff7d6;
    }
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
    .wrapper {
        position: relative;
        top: 5rem;
    }
    .split-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        width: 100%;
    }
    .title-word {
        animation: color-animation 4s linear infinite;
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
    /* Here are just some visual styles. 🖌 */
    .container {
        display: grid;
        place-items: center;
        text-align: center;
        height: 10vh;
        position: relative;
        bottom: 2.5rem;
        user-select: none;
    }
    .title {
        font-family: "Montserrat", sans-serif;
        font-weight: 800;
        font-size: 3.5vw;
        text-transform: uppercase;
    }
</style>
