<DashboardCss/>
<template>
    <div class="page">
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
                      <span class="text-default">Jane Pearson</span>
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
                    <a href="#/articles-list" class="nav-link active" data-toggle="dropdown"><i class="fe fe-list"></i> Articles</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/product-list" class="nav-link" data-toggle="dropdown"><i class="fe fe-box"></i> Products/ Apps</a>
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
                Articles List
              </h1>
            </div>
            <div class="row">
                <div class="col-md-4">
                     <div class="form-group">
                       <div class="input-group">
                         <input type="text" class="form-control" placeholder="Search for...">
                         <span class="input-group-append">
                           <button class="btn btn-primary" type="button">Search</button>
                         </span>
                       </div>
                     </div>
                </div>
                <div class="col-md-4">
                     <div class="form-group">
                        <div class="input-group">
                            <select name="beast" id="select-beast" class="form-control custom-select">
                              <option value="1">Agriculture</option>
                              <option value="4">Education</option>
                              <option value="3">Marketplace</option>
                            </select>
                            <span class="input-group-append">
                               <button class="btn btn-primary" type="button">Filter</button>
                             </span>
                        </div>
                      </div>
                </div>
                <div class="col-md-4 text-right">
                    <a href="#/articles-new" class="btn btn-primary"><i class="fe fe-plus-square"></i> Add Articles</a>
                </div>
            </div>
             <div class="row row-cards row-deck">
               <div class="col-12">
                <div class="card">
                  <div class="table-responsive">
                    <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
                      <thead>
                        <tr>
                          <th class="text-center w-1">No</th>
                          <th>Categories</th>
                          <th>Articles Name</th>
                          <th class="text-center">Description</th>
                          <th>Author</th>
                          <th class="text-center">Created At</th>
                          <th class="text-center"><i class="fe fe-more-vertical"></i></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-center">
                              <p>01</p>
                          </td>
                          <td>
                            <div>Agriculture</div>
                          </td>
                          <td>
                            <div class="clearfix">
                                <p>Menanam lebih baik dengan ini!</p>
                            </div>
                          </td>
                          <td class="text-center">
                                <p>Tips Bercocok tanam yang baik dan sukses</p>
                          </td>
                          <td>
                                <p>Ahmad</p>
                          </td>
                          <td class="text-center">
                                <p>Apr 13, 2018</p>
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
                              <p>02</p>
                          </td>
                          <td>
                            <div>Education</div>
                          </td>
                          <td>
                            <div class="clearfix">
                                <p>Mari belajar agak sukses di masa depan!</p>
                            </div>
                          </td>
                          <td class="text-center">
                                <p>Tips Sukses Lolos SBMPTN</p>
                          </td>
                          <td>
                                <p>Amin</p>
                          </td>
                          <td class="text-center">
                                <p>Apr 13, 2018</p>
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
import DashboardCss from '../assets/tabler/css/dashboard.css'
export default {
  name: 'BukuSaku',
  components: {
    DashboardCss
  }
}
</script>
