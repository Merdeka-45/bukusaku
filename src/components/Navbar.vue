<template>
    <nav class="navbar navbar-expand-lg fixed-top ">
        <a class="navbar-brand text-left" href="#">
            <img src="../assets/images/logo-bs.png" alt="">
            <span>Bukusaku</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBukusaku" aria-controls="navbarBukusaku" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarBukusaku">
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">Features</a>
                <a class="nav-item nav-link" href="#">Download</a>
                <a class="nav-item nav-link" href="#">About Us</a>
            </div>
        </div>
    </nav>
</template>
<style>
.navbar{
    background: #fff;
    box-shadow:0 1px 13px 0px rgba(0,0,0,0.2);
}
.navbar .navbar-brand,.navbar .navbar-collapse .navbar-nav a {
    color: #000;
}
.navbar-brand img {
    width: 7%;
}
.navbar-brand span {
    font-size: 20pt;
    margin-left: 5pt;
}
.navbar-collapse {
    width: 50%;
}
.navbar-collapse a {
    margin-right: 40px;
}
.navbar-nav .nav-link{
    font-weight: bold;
}
</style>
<!--
<script src="../assets/js/jquery-3.2.1.slim.min.js"></script>
<script src="../assets/js/popper.min.js"></script>
<script src="../assets/js/bootstrap.min.js"></script>
-->
