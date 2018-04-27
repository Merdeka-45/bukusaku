<DashboardCss/>
<template>
    <div class="page">
        <vue-headful
            title="New Product - Bukusaku"
            description="Binar Project - Tim E"
        />
      <div class="page-main">
        <div class="header py-4">
          <div class="container">
            <div class="d-flex">
              <a class="header-brand" href="#/dashboard">
                <img src="../assets/images/aboutus.png" class="header-brand-img" alt="bukusaku logo">
              </a>
              <div class="d-flex order-lg-2 ml-auto">
                <div class="dropdown">
                  <a href="#" class="nav-link pr-0 leading-none" data-toggle="dropdown">
                    <span class="avatar" style="background-image: url(./demo/faces/female/25.jpg)"></span>
                    <span class="ml-2 d-none d-lg-block">
                      <span class="text-default">John Doe</span>
                      <small class="text-muted d-block mt-1">Administrator</small>
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                    <a class="dropdown-item" href="#">
                      <i class="dropdown-icon fe fe-log-out"></i> Sign out
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" class="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                <span class="header-toggler-icon"></span>
              </a>
            </div>
          </div>
        </div>
        <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-3 ml-auto">
                <form class="input-icon my-3 my-lg-0">
                  <input type="search" class="form-control header-search" placeholder="Search&hellip;" tabindex="1">
                  <div class="input-icon-addon">
                    <i class="fe fe-search"></i>
                  </div>
                </form>
              </div>
              <div class="col-lg order-lg-first">
                <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                  <li class="nav-item">
                    <a href="#/dashboard" class="nav-link"><i class="fe fe-home"></i> Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/articles-list" class="nav-link " data-toggle="dropdown"><i class="fe fe-list"></i> Articles</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/product-list" class="nav-link active" data-toggle="dropdown"><i class="fe fe-box"></i> Products/ Apps</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/categories" class="nav-link" data-toggle="dropdown"><i class="fe fe-grid"></i> Categories</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/notification" class="nav-link"><i class="fe fe-bell"></i> Notification</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/userAdmin" class="nav-link"><i class="fe fe-user"></i> Admin Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title">
                   New Product
              </h1>
            </div>
            <div class="row">
               <div class="col-12">
                <div class="card">
                    <div class="card-body">
                       <div class="row">
                            <div class="form-group col-sm-4 col-md-2">
                              <label class="form-label">
                                Categories
                              </label>
                              <select name="new_product_category" id="select-beast" class="form-control custom-select">
                                  <option value="1">Agriculture</option>
                                  <option value="4">Education</option>
                                  <option value="3">Marketplace</option>
                              </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-10 col-md-8">
                              <label class="form-label">
                                Product Name <span class="form-required">*</span>
                              </label>
                              <input name="new_product_name" type="text" class="form-control" value="">
                            </div>
                            <div class="form-group col-sm-2 col-md-4">
                              <label class="form-label">
                                Company <span class="form-required">*</span>
                              </label>
                              <input name="new_prouct_company" type="text" class="form-control" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 form-group">
                              <label class="form-label">
                                Description <span class="form-required">*</span>
                              </label>
                              <textarea name="new_prouct_desc" rows="10" type="text" class="form-control" value=""></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 form-group">
                                <div class="form-label">Product Logo</div>
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" name="new_product_logo">
                                  <label class="custom-file-label">Choose file</label>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 form-group">
                                <div class="form-label">Cover Preview Image</div>
                                <div class="custom-file">
                                  <input type="file" class="custom-file-input" name="new_product_cover">
                                  <label class="custom-file-label">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-sm-6 form-group">
                                <label for="" class="form-label">Website</label>
                                <input type="text" class="form-control" name="new_product_website">
                            </div>
                            <div class="col-md-6 col-sm-6 form-group">
                                <label for="" class="form-label">Google Play Link</label>
                                <input type="text" class="form-control" name="new_product_gplay_link">
                            </div>
                        </div>
                    </div>
                    <div class="card-footer text-right">
                      <button type="submit" class="btn btn-primary">Submit</button>
                      <button class="btn btn-warning">Cancel</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
               Bukusaku - Binar Tim E All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>
<DashboardCss/>
<style>
    .card-body .row{
        margin-bottom: 20px;
    }
    .form-group{
        text-align: left;
    }
    .custom-file-input{
        cursor: pointer;
    }
     .nav-tabs .nav-link.active{
        border-color: #fca41a;
        color: #fca41a;
    }
</style>
<script>
import DashboardCss from '../assets/tabler/css/dashboard.css'
export default {
  name: 'BukuSaku',
  components: {
    DashboardCss
  }
}
</script>
