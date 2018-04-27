<template>
    <div class="page">
        <vue-headful
            title="New Articles - Bukusaku"
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
                    <a href="#/articles-list" class="nav-link active" data-toggle="dropdown"><i class="fe fe-list"></i> Articles</a>
                  </li>
                  <li class="nav-item">
                    <a href="#/product-list" class="nav-link " data-toggle="dropdown"><i class="fe fe-box"></i> Products/ Apps</a>
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
                New Articles
              </h1>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group col-sm-4 col-md-4">
                                  <label class="form-label">
                                    Categories
                                  </label>
                                  <select class="custom-select" name="new_article_category">
<!--                                    <option :value="categories.data.id">categories.data.category_name</option>-->
                                    <option value="Health">Health</option>
                                    <option value="Education">Education</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Marketplace">Marketplace</option>
                                    <option value="ArtandCrat">Art & Crat</option>
                                  </select>
                                </div>
                                <div class="col-md-6 col-sm-6 form-group">
                                    <label class="form-label">
                                        Title <span class="form-required">*</span>
                                    </label>
                                    <input name="new_article_title" type="text" class="form-control" value="" placeholder="Your New Article Title">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-sm-12 form-group">
                                    <label class="form-label">
                                        Your Article Heres <span class="form-required">*</span>
                                    </label>
                                    <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
<!--                                    <Vueditor></Vueditor>-->
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-left">
                          <button type="submit" class="btn btn-primary secondary-color">Save</button>
                          <button class="btn">Cancel</button>
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
            <div class="col-auto ml-lg-auto">
            </div>
            <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
               Bukusaku - Binar Tim E All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>
<style>
    .form-group{
        text-align: left;
    }
    .nav-tabs .nav-link.active{
        border-color: #fca41a;
        color: #fca41a;
    }
</style>
<script>
export default{
  data () {
    return {
      categories: [],
      category: {
        id: '',
        category_name: '',
        hex_color: ''
      },
      pagination: {},
      edit: false
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    fetchCategories () {
      fetch('https://buku-saku.herokuapp.com/api/v1/categories/')
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          this.category = res
          console.log(this.category)
        })
        .catch(err => console.log(err))
    }
  }
}
/* eslint-disable */
</script>
