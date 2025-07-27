<template>
  <body>
    <div class="container-fluid p-0 bg-dark vh-100">
      <div class="row g-0 h-100">
        <!-- 左側 -->
        <div class="col-12 col-sm-6 d-none d-sm-flex flex-column">
          <div class="p-2">
            <RouterLink class="btn btn-dark" to="/">
              <i class="bi bi-arrow-left"></i> <span>回首頁</span>
            </RouterLink>
          </div>

          <div
            class="text-center d-flex flex-column align-items-center justify-content-center flex-grow-1 px-4">
            <h1 class="text-white">Welcome</h1>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis non sint
              blanditiis neque accusamus...
            </p>
          </div>
          <div class="pb-2 d-flex justify-content-center">
            <div class="btn-group">
              <a class="btn btn-dark"><i class="bi bi-instagram"></i></a>
              <a class="btn btn-dark"><i class="bi bi-facebook"></i></a>
              <a class="btn btn-dark"><i class="bi bi-discord"></i></a>
            </div>
          </div>
        </div>

        <!-- FIXME:表單要檢查 右側：登入表單 -->
        <div class="col-12 col-sm-6 bg-light d-flex flex-column">
          <div class="p-2 d-block d-sm-none">
            <RouterLink class="btn btn-light" to="/">
              <i class="bi bi-arrow-left"></i> <span>回首頁</span>
            </RouterLink>
          </div>

          <div class="flex-grow-1 d-flex align-items-center justify-content-center px-3">
            <div class="w-100 max-width-400">
              <h2 class="text-center mb-4">LOG IN / SIGN UP</h2>

              <div class="d-flex justify-content-center mb-4">
                <a
                  class="btn btn-light border border-dark rounded-circle mx-2 d-flex align-items-center justify-content-center social-btn">
                  <i class="bi bi-google"></i>
                </a>
                <a
                  class="btn btn-light border border-dark rounded-circle mx-2 d-flex align-items-center justify-content-center social-btn">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a
                  class="btn btn-light border border-dark rounded-circle mx-2 d-flex align-items-center justify-content-center social-btn">
                  <i class="bi bi-github"></i>
                </a>
              </div>

              <form>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com" />
                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-2">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password" />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="mb-3 d-flex justify-content-end">
                  <a href="#" class="fs-12">FORGOT YOUR PASSWORD?</a>
                </div>

                <button class="btn btn-primary w-100" type="submit">LOG IN</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
