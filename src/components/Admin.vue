<template>
    <div id="login-card">
        <vue-headful
            title="Admin Bukusaku"
            description="Binar Project - Tim E"
        />
       <div class="row justify-content-center form-login">
            <div class="col-md-4 align-middle">
                <div class="card text-center">
                  <div class="card-header">
                    <img src="../assets/images/logo.png" alt="">
                    <h4 class="block-signin">SIGN IN</h4>
                  </div>
                  <div class="card-body">
                       <form action="" class="">
                           <div class="form-group">
                               <input type="text" class="form-control" placeholder="username">
                               <input type="text" class="form-control" placeholder="password">
                           </div>
                           <button class="btn">LOGIN</button>
                       </form>
                  </div>
                  <div class="card-footer text-muted">
                    <a href="">Forgot Password ?</a>
                  </div>
                </div>
            </div>
       </div>
    </div>
</template>
<style>
    #login-card{
        padding-top: 5%;
        padding-bottom: 6%;
        background-color: #f2f2f2;
    }
    #login-card .row .card{
        border: 0px;
        background-color: rgba(255,255,255,0.7);
    }
    #login-card .row .card .card-body{
        border: 1px solid rgba(0,0,0,.125);
    }
    #login-card .row .card .card-header{
        display: block;
        padding: 0px;
        padding-top: 10%;
/*        padding-bottom: 5%;*/
        background-color:#f7b733;
        border-radius: 10px 10px 0px 0px;
    }
    #login-card .row .card .card-header h4.signin{
        text-shadow: 1px 1px #fff;
        font-weight: bold;
        color: #000;
        font-size: 14pt;
    }
    #login-card .row .card .card-header .block-signin{
        margin-top: 5%;
        background-color: #828282;
        -webkit-margin-after: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: #fff;
        letter-spacing: 2px;
        font-weight: bold;
    }
    #login-card .row .card .card-header img{
        width: 35%;
        margin-bottom: 20px;
    }
    #login-card .row .card .card-body{
        padding-top: 10%;
    }
    #login-card .row .card .card-body .form-group input{
        margin-bottom: 40px;
        height: 30px;
        border: 3px solid #828282;
        border-radius: 0px;
        border-top: 0px;
        background: transparent;
    }
    #login-card .row .card .card-body .form-group input:focus{
        box-shadow: none;
    }
    #login-card .row .card .card-body form .btn{
        background-color: #f57402;
        color: #fff;
        padding: 5px 25px 5px 25px;
        font-size: 10pt;
        border-radius: 10px;
    }
    #login-card .row .card .card-footer{
        background-color: #828282;
        border-radius:     0px 0px 10px 10px;
    }
    #login-card .row .card .card-footer a{
        color: #fff;
        letter-spacing: 2px;
        font-weight: bold;
    }
    ::-webkit-input-placeholder {
       text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
       text-align: center;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
       text-align: center;
    }

    :-ms-input-placeholder {
       text-align: center;
    }
    .card-body .form-group {
        padding-left: 10%;
        padding-right: 10%;
    }
</style>
