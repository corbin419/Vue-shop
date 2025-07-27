<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light p-2">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <RouterLink class="navbar-brand mx-sm-0 mx-auto d-block" to="/">
        <img src="@/assets/peepofight.gif" width="50" height="50" alt="Logo" />
      </RouterLink>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex align-items-center gap-2">
          <RouterLink class="nav-link active" to="/">Home</RouterLink>
          <!-- <RouterLink class="nav-link">思考中...</RouterLink>
            <RouterLink class="nav-link">思考中...</RouterLink> -->
          <div class="dropdown">
            <button class="btn btn-light" data-bs-toggle="dropdown">
              <i class="bi bi-cart-fill"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><RouterLink class="dropdown-item" to="/checkCartPage">你的購物車</RouterLink></li>
            </ul>
          </div>
          <div class="dropdown">
            <button class="btn btn-light" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><RouterLink class="dropdown-item" to="/loginPage">LOGIN</RouterLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
