<DashboardCss/>
<template>
    <div class="page">
         <vue-headful
            title="Categories - Bukusaku"
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
                    <a href="#/dashboard" class="nav-link "><i class="fe fe-home"></i> Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/articles-list" class="nav-link " data-toggle="dropdown"><i class="fe fe-list"></i> Articles</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/product-list" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i> Products/ Apps</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/categories" class="nav-link active" data-toggle="dropdown"><i class="fe fe-grid"></i> Categories</a>
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
                Categories
              </h1>
            </div>
            <div class="row">
                <div class="col-md-4">
                     <div class="form-group">
                       <label class="text-left" for="">Add New Categories</label>
                       <div class="input-group">
                         <input type="text" class="form-control" placeholder="Categories Name">
                         <span class="input-group-append">
                           <button class="btn btn-primary" type="button">Add</button>
                         </span>
                       </div>
                     </div>
                </div>
            </div>
            <div class="row">
               <div class="col-12">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table card-table table-vcenter text-nowrap">
                      <thead>
                        <tr>
                          <th class="w-1">No.</th>
                          <th>Categories Name</th>
                          <th>Created At</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span class="text-muted">01</span></td>
                          <td><a href="invoice.html" class="text-inherit">Design Works</a></td>
                          <td>May 20 2018</td>
                          <td class="text-right">
                            <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                            <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Actions</a>
                          </td>
                        </tr>
                        <tr>
                          <td><span class="text-muted">02</span></td>
                          <td><a href="invoice.html" class="text-inherit">UX Wireframes</a></td>
                          <td>May 20 2018</td>
                          <td class="text-right">
                            <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Manage</a>
                            <a href="javascript:void(0)" class="btn btn-secondary btn-sm">Actions</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
<style>
    .nav-tabs .nav-link.active{
        border-color: #fca41a;
        color: #fca41a;
    }
</style>
<script>
</script>
