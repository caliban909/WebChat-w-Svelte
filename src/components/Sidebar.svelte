<div class="sidenav">
    <a href="#raum1">1</a>
    <a href="#raum2">2</a>
    <a href="#raum3">3</a>
    <a href="#raum4">4</a>
    
  </div>

<style lang="scss">
    .sidenav {
        height: 86.25%;
        width: 4%;
        position: fixed;
        z-index: 1;
        top: 13.70%;
        left: 0;
        background-color: #0f0f24;
        overflow-x: hidden;
        padding-top: 50px;
        border-right: solid 10px #404EED;

    }
    .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        padding-top: 10px;
        color: white;
        display: block;
    }
    .sidenav a:hover {
        color: #f1f1f1;
    }
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }
</style>