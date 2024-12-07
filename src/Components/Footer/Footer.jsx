export const Footer = () => {
  return (
    <>
      <footer class="bg-body-tertiary text-center pb-5">
        <div class="row mt-1 gy-3">
          <div class="col-12 col-lg-4" style={{ textAlign: "center" }}>
            <p>Мы в соцсетях</p>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-youtube fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram fa-2x"></i>
            </a>
            <br />
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-telegram fa-2x"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-vk fa-2x"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
          </div>
          <div class="col-12 col-lg-4">
            <div class="d-flex justify-content-center align-items-center">
              <i class="fas fa-location-dot fa-2x"></i>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>
                ТОО "ManGo"
                <p>
                  <br />
                  <a href="tel:87057590099">+7(775)775-05-09</a>
                  <br />
                  <a href="tel:87010716140">+7(771)051-49-42</a>
                </p>
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-map-location-dot fa-2x"></i>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>
                <p>
                  в г.Астана <br />
                  ул Туркестан 19 3 этаж
                  <br />
                  <a href="tel:87052396303">+7(778)340-69-02</a>
                  <br />
                  <a href="tel:8(705)7592999">+7(708)059-49-39</a>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center p-3">
          <p>© 2024 TОО «ManGO»</p>
        </div>
      </footer>
    </>
  );
};
