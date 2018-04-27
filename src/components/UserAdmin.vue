<DashboardCss/>
<template>
    <div class="page">
        <vue-headful
            title="Admin User - Bukusaku"
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
                    <a href="/#/dashboard" class="nav-link"><i class="fe fe-home"></i> Home</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#/articles" class="nav-link" data-toggle="dropdown"><i class="fe fe-list"></i> Articles</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#/product" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i> Products/ Apps</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#/categories" class="nav-link" data-toggle="dropdown"><i class="fe fe-grid"></i> Categories</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#/notification" class="nav-link"><i class="fe fe-bell"></i> Notification</a>
                  </li>
                  <li class="nav-item">
                    <a href="/#/profile" class="nav-link active"><i class="fe fe-user"></i> Admin Profile</a>
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
                   User Admin
              </h1>
            </div>
            <div class="row">
               <div class="col-12">
                <div class="card">
                    <div class="card-body">
                       <div class="row">
                           <h4>Add New User Admin</h4>
                       </div>
                       <div class="row">
                            <div class="form-group col-sm-4 col-md-4">
                              <label class="form-label">Username<span class="form-required">*</span></label>
                              <input name="new_admin_name" type="text" class="form-control" value="">
                            </div>
                            <div class="form-group col-sm-8 col-md-4">
                              <label class="form-label">Email <span class="form-required">*</span></label>
                              <input name="new_admin_email" type="email" class="form-control" value="">
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4 col-md-4">
                              <label class="form-label">
                                Password <span class="form-required">*</span>
                              </label>
                              <input name="new_admin_password" type="password" class="form-control" value="">
                            </div>
                        </div>
                        <div class="row">
                           <div class="col-md-4 text-left">
                                <button type="submit" class="btn btn-primary">Save</button>
                                <button class="btn btn-warning">Cancel</button>
                           </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-sm-12 form-group">
                              <div class="table-responsive">
                                    <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
                                      <thead>
                                        <tr>
                                          <th class="text-center w-1">No</th>
                                          <th>Username</th>
                                          <th>Email</th>
                                          <th class="text-center"><i class="fe fe-more-vertical"></i></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td class="text-center">
                                            <div class="avatar d-block" style="background-image: url(demo/faces/female/26.jpg)">
                                              <span class="avatar-status bg-green"></span>
                                            </div>
                                          </td>
                                          <td>
                                            <div>Ahmad</div>
                                            <div class="small text-muted">
                                              Registered: Apr 12, 2018
                                            </div>
                                          </td>
                                          <td>
                                            <div class="clearfix">
                                              ahmad@bukusaku.com
                                            </div>
                                          </td>
                                          <td class="text-center">
                                            <div class="item-action dropdown">
                                              <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>
                                              <div class="dropdown-menu dropdown-menu-right">
                                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-tag"></i> Edit </a>
                                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-edit-2"></i> Delete </a>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="text-center">
                                            <div class="avatar d-block" style="background-image: url(demo/faces/female/17.jpg)">
                                              <span class="avatar-status bg-green"></span>
                                            </div>
                                          </td>
                                          <td>
                                            <div>Amin</div>
                                            <div class="small text-muted">
                                              Registered: Apr 13, 2018
                                            </div>
                                          </td>
                                          <td>
                                            <div class="clearfix">
                                              amin@bukusaku.com
                                            </div>
                                          </td>
                                          <td class="text-center">
                                            <div class="item-action dropdown">
                                              <a href="javascript:void(0)" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>
                                              <div class="dropdown-menu dropdown-menu-right">
                                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-tag"></i> Edit </a>
                                                <a href="javascript:void(0)" class="dropdown-item"><i class="dropdown-icon fe fe-edit-2"></i> Delete </a>
                                              </div>
                                            </div>
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
