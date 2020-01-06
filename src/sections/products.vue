<template>
  <div class="container my-products">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb">
              <img class="card-img-top" src="http://www.placehold.it/286x180" alt="Card image cap" />
              <div class="card-body mb">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary mb">button</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb">
              <img class="card-img-top" src="http://www.placehold.it/286x180" alt="Card image cap" />
              <div class="card-body mb">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary mb">button</button>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb">
              <img class="card-img-top" src="http://www.placehold.it/286x180" alt="Card image cap" />
              <div class="card-body mb">
                <h5 class="card-title">Card title</h5>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="button" class="btn btn-primary mb">button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products"
};
</script>

<style lang="scss" scoped>
.my-products {
  margin: 3rem auto;
}
.mb.card-body {
  text-align: center;
}
.mb.btn {
  border-radius: 0;
  box-shadow: 0.5px 1px 2px hsla(0, 0%, 20%, 1);
}
.mb.btn:hover {
  transform: translateY(-2px);
  box-shadow: 2px 2px 5px hsla(0, 0%, 20%, 1);
}
.mb.card {
  border-radius: 0px / 0px;
  overflow: hidden;
  box-shadow: 0.5px 1px 2px hsla(0, 0%, 20%, 1);
}
</style>