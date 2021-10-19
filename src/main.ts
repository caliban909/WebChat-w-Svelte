import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    username: null,
    color: null,
  },
});

export default app;
