<template>
    <div data-spy="scroll" data-target=".navbar">
       <vue-headful
            title="Selamat Datang di Bukusaku"
            description="Binar Project - Tim E"
        />
        <nav class="navbar navbar-expand-lg fixed-top" data-spy="affix">
            <a class="navbar-brand text-left" href="#">
                <img src="../assets/images/aboutus.png" alt="Bukusaku Logo">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBukusaku" aria-controls="navbarBukusaku" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"><i class="fa fa-bars" style="color:#000"></i></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarBukusaku">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#sec-find-your-lp">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="#sec-fitur-lp">Features</a>
                    <a class="nav-item nav-link" href="#sec-download-lp">Download</a>
                    <a class="nav-item nav-link" href="#sec-aboutus-lp">About Us</a>
                </div>
            </div>
        </nav>
        <div id="sec-find-your-lp">
            <div class="container-fluid" style="background-color: #fff;">
                <div class="row">
                    <div class="col-md-7 col-sm-7 text-center">
                        <h1>Bring your business, lifestyle,<br> and knowledge to the <br>next level</h1>
                    </div>
                    <div class="col-md-5 col-sm-5" id="gambar-sec-1">
                        <img src="../assets/images/mockup-home.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="sec-fitur-lp">
            <div class="container-fluid" style="padding-left:0px;">
                <div class="row">
                    <div class="col-md-4" id="left-features">
                        <h3 class="text-center">Features</h3>
                        <img src="../assets/images/mockup-fitur-2.png" class="gambar-fitur-1">
                        <img src="../assets/images/mockup-fitur-1.png">
                    </div>
                    <div class="col-md-8" id="right-features">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                                <img src="../assets/images/features-1.png" alt="">
                                <h5>Find Your Business Partner</h5>
                                <p>
                                  We bring oportunity for you who want to develop their business. One of our services is to help you find business partner
                                </p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 text-center">
                                <img src="../assets/images/features-3.png" alt="">
                                <h5>Keep and Share Anywhere, Anytime</h5>
                                <p>
                                    You can save and share your items for everyone
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                                <img src="../assets/images/features-2.png" alt="">
                                <h5>Latest information about busineses, lifestyle, and technology</h5>
                                <p>
                                   Find many information and references that fit your need in one hand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sec-download-lp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-4 col-xs-12" id="img-download">
                        <img src="../assets/images/mockup-2.png" alt="" id="img-download-1">
                        <img src="../assets/images/mockup-1.png" alt="" id="img-download-2">
                    </div>
                    <div class="col-md-5 col-sm-8 col-xs-12">
                        <div class="text-download">
                            <h1>You can find us on</h1>
                        </div>
                        <div class="btn-download text-center">
                           <a target="_blank" href="https://trello-attachments.s3.amazonaws.com/5aab671dd6b0a46566943a49/5ac8636f6f01444e60aa3694/e839e703a5fa94e97b13543e97b4e022/Bukusaku-1.0.0-beta-release.apk"><img class="gplaydownload" src="../assets/images/gplay.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sec-aboutus-lp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 text-center about-us">
                        <h3>About Us</h3>
                        <img src="../assets/images/aboutus.png" alt="">
                        <p>We here with one purpose, to leverage people’s standard of living. We started it with a small step, to provide a better life and economy for people who life in rural.</p>
                    </div>
                    <div class="col-md-6 text-center partner">
                        <h3>Partnership</h3>
                        <img src="../assets/images/binar-logo.png" alt="">
                        <img src="../assets/images/adidas-logo.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="sec-appscreen-lp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12 text-center">
                        <h3>Apps Screen</h3>
                        <div id="appscreen">
                            <img src="../assets/images/mockup-1.png" alt="">
                            <img src="../assets/images/mockup-appscreen-2.png" alt="">
                            <img src="../assets/images/mockup-appscreen-3.png" alt="">
                            <img src="../assets/images/mockup-appscreen-4.png" alt="">
                            <img src="../assets/images/mockup-appscreen-5.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sec-contact-lp">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-sm-8 col-xs-8 text-center">
                        <h3>Contact & Support</h3>
                        <h5>If you have any question, contact us for more information</h5>
                        <form action="" class="form-group">
                            <div class="form-group"></div>
                            <input type="text" class="form-control" placeholder="Your Name" name="" id="">
                            <input type="text" class="form-control" placeholder="Your Email" name="" id="">
                            <textarea cols="30" rows="10" class="form-control" name="" id="" placeholder="Your Feedback"></textarea>
                            <button class="btn secondary-color">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer id="sec-footer-lp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <i class="fas fa-map-marker"></i><p>Graha sakura 1st Floor, Jalan kebenaran Telp. 123 - 456 <br>Yogyakarta, Jawa Tengah 57615, Indonesia</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-6 text-center">
                        <p><i class="fas fa-envelope"></i>hello@bukusaku.com</p>
                        <p><i class="fas fa-phone"></i>+62 1234567890</p>
                    </div>
                    <div class="col-md-4 col-sm-12 col-xs-12 text-right">
                       <div class="socmed">
                            <a href=""><i class="fab fa-instagram"></i></a>
                            <a href=""><i class="fab fa-facebook"></i></a>
                            <a href=""><i class="fab fa-twitter"></i></a>
                       </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-md-5 text-right">
                        <p>&copy; Bukusakut. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<style>
    .affix {
      top:0;
      width: 100%;
      z-index: 9999 !important;
    }
    #sec-find-your-lp {
        margin-top: 50px;
        margin-bottom: -312px;
        padding-bottom: 162px;
    }

    #sec-find-your-lp #gambar-sec-1 img {
        width: 65%;
        position: relative;
        top: -150px;
    }
    #sec-find-your-lp h1{
        font-size: 31pt;
        color: #000;
    }
    #sec-find-your-lp .container-fluid {
        padding-top: 200px;
        padding-left: 80px;
    }

    /*background section*/

    #sec-fitur-lp,
    #sec-contact-lp,
    #sec-footer-lp {
        background-color: #fc5f1a;
    }

    #sec-aboutus-lp,
    #sec-contact-lp {
        color: #fff;
    }

    #sec-aboutus-lp .about-us {
        background-color: #fc7f1a;
    }

    #sec-aboutus-lp .partner {
        background-color: #fca41a;
    }

    /*background section*/

    #sec-fitur-lp {
        padding-top: 30px;
        color: #fff;
    }

    #sec-fitur-lp .container-fluid .row .col-md-6 h3 {
        margin-bottom: 30px;
        padding-left: 50px;
    }

    #sec-fitur-lp .container-fluid .row #right-features {
        padding-top: 100px;
    }

    #sec-fitur-lp .container-fluid .row #right-features .text-center {
        margin-bottom: 40px;
    }

    #sec-fitur-lp .container-fluid .row #right-features .text-center img {
        margin-bottom: 10px;
    }

    #sec-fitur-lp .container-fluid .row #left-features img {
        display: block;
    }

    #sec-fitur-lp .container-fluid .row #left-features img.gambar-fitur-1 {
        position: relative;
        top: 110px;
    }
    #sec-download-lp{
        background-color: #fff;
    }
    #sec-download-lp .container-fluid .row .col-md-5 .text-download {
        padding-top: 30px;
    }

    #sec-download-lp .container-fluid .row .col-md-6#img-download {
        padding-top: 10px;
        display: flex;
        align-items: baseline;
        padding-left: 100px;
    }

    #sec-download-lp .container-fluid .row #img-download #img-download-2 {
        height: max-content;
        margin-left: 20px;
    }

    #sec-download-lp .container-fluid .row .btn-download .gplaydownload {
        width: 75%;
    }

    #sec-download-lp .container-fluid .row .btn-download .appstoredownload {
        width: 170px;
    }

    #sec-aboutus-lp .about-us,
    #sec-aboutus-lp .partner {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    #sec-aboutus-lp .container-fluid .row .col-md-6.about-us h3,
    #sec-aboutus-lp .container-fluid .row .col-md-6 img {
        margin-bottom: 30px;
    }
    #sec-aboutus-lp .container-fluid .row .col-md-6.about-us img{
        width: 150px;
    }
    #sec-aboutus-lp .container-fluid .row .col-md-6 p {
        padding-left: 10%;
        padding-right: 10%;
    }

    #sec-aboutus-lp .container-fluid .row .col-md-6.partner h3 {
        margin-bottom: 50px;
    }

    #sec-aboutus-lp .container-fluid .row .col-md-6.partner img {
        width: 30%;
    }

    #sec-aboutus-lp .container-fluid .row .col-md-6.partner img:nth-child(2) {
        margin-right: 30px;
    }

    #sec-download-lp,
    #sec-appscreen-lp {
        padding-top: 30px;
        padding-bottom: 50px;
    }

    #sec-appscreen-lp .container-fluid .row .col-md-12 {
        display: block;
    }

    #sec-appscreen-lp .container-fluid .row .col-md-12 h3 {
        margin-bottom: 50px;
    }

    #sec-appscreen-lp .container-fluid .row .col-md-12 #appscreen img {
        margin-right: 40px;
    }

    #sec-contact-lp {
        padding-top: 30px;
        padding-bottom: 50px;
    }

    #sec-contact-lp .container-fluid .row .col-md-6 h3 {
        margin-bottom: 10px;
    }

    #sec-contact-lp .container-fluid .row .col-md-6 h5 {
        margin-bottom: 50px;
    }

    #sec-contact-lp .container-fluid .row .col-md-6 form input,
    #sec-contact-lp .container-fluid .row .col-md-6 form textarea {
        margin-bottom: 20px;
    }

    #sec-contact-lp .container-fluid .row .col-md-6 form {
        position: relative
    }

    #sec-contact-lp .container-fluid .row .col-md-6 form button {
        position: absolute;
        right: 0px;
        width: 30%;
    }

    #sec-footer-lp {
        padding-top: 30px;
        color: #fff;
    }

    #sec-footer-lp .container-fluid .row {
        position: relative
    }

    #sec-footer-lp .container-fluid .row .col-md-4 {
        display: flex;
    }

    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(1),
    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(2) {
        padding-left: 50px;
    }

    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(1) i {
        font-size: 15pt;
    }

    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(1) p {
        margin-left: 5px;
        font-size: 11pt;
        text-align: left
    }

    #sec-footer-lp .container-fluid .row .col-md-4.text-center p:nth-child(1) {
        margin-right: 30px;
    }

    #sec-footer-lp .container-fluid .row .col-md-4.text-center p i {
        margin-right: 5px;
    }

    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(3) .socmed {
        position: absolute;
        right: 30px;
    }

    #sec-footer-lp .container-fluid .row .col-md-4:nth-child(3) .socmed a {
        margin-right: 10px;
        font-size: 25pt;
        color: #fff;
    }
    .navbar{
        background: #fff;
        box-shadow:0 1px 13px 0px rgba(0,0,0,0.2);
    }
    .navbar .navbar-brand,.navbar .navbar-collapse .navbar-nav a {
        color: #000;
    }
    .navbar-brand img {
        width: 20%;
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
    #sec-appscreen-lp{
        background-color: #fff;
    }
    .navbar-toggler{
            padding: 0px;
    }
    .navbar .navbar-brand, .navbar .navbar-collapse .navbar-nav a{
        margin-top: 5px;
    }
    /*=========================== Responsive Style ====================*/

    @media (max-width: 992px) {
        #sec-find-your-lp h1{
            font-size: 26pt;
        }
    }
    @media (max-width: 768px) {
        #sec-find-your-lp h1{
            font-size: 20pt;
            margin-top: -50px;
        }
        #sec-fitur-lp .container-fluid .row .col-md-6 h3{
            font-size: 30pt;
        }
        #sec-fitur-lp .container-fluid .row #left-features img{
            display: none;
        }
        #sec-fitur-lp .container-fluid .row .col-md-6{
            padding-left: 45px;
            padding-right: 30px;
        }
        #sec-download-lp .container-fluid .row .col-md-6#img-download{
            padding-left: 30px;
        }
        #sec-footer-lp .container-fluid .row .col-xs-12{
            text-align: center;
        }
        #sec-footer-lp{
            padding-bottom: 30px;
        }
        #sec-footer-lp .container-fluid .row .col-md-4:nth-child(3) .socmed{
            right: 300px;
        }
    }
    @media (max-width: 576px) {
        #sec-find-your-lp img{
            margin-top: 170px;
        }
    }
    @media (max-width: 380px) {
        #sec-find-your-lp .container-fluid{
            padding-top: 130px;
            padding-left: 25px;
        }
        #sec-find-your-lp h1{
            font-size: 18pt;
        }
        #sec-download-lp{
            padding-left: 30px;
        }
        #sec-download-lp .container-fluid .row .col-md-6#img-download #img-download-1{
            width: 35%;
            height: auto;
        }
        #sec-download-lp .container-fluid .row .col-md-6#img-download #img-download-2{
            width: 40%;
            height: auto;
        }
        #sec-appscreen-lp .container-fluid .row .col-md-12 #appscreen img{
            margin-right: 15px;
            width: 24%;
            margin-bottom: 20px;
        }
        #sec-footer-lp .container-fluid .row .col-md-4:nth-child(3) .socmed{
            right: 240px;
            display: flex;
            top: -10px;
        }
    }

    /*=========================== Responsive Style ====================*/
</style>
