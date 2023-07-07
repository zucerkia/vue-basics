<template>
  <BackButton />
  <div class="detail-content">
    <img class="image" :src="productDetail.thumbnail" />
    <div>
      <h1>{{ productDetail.title }}</h1>
      <p>
        {{ productDetail.description }}
      </p>
      <p>Price: {{ productDetail.price }}</p>
      <p>rating: {{ productDetail.rating }}</p>
      <p>stock: {{ productDetail.stock }}</p>
      <p>brand: {{ productDetail.brand }}</p>
      <p>category: {{ productDetail.category }}</p>
    </div>
  </div>
</template>

<script>
import BackButton from "@/components/atoms/v-back-button.vue";

export default {
  components: {
    BackButton,
  },
  data() {
    return {
      productDetail: {},
    };
  },
  async created() {
    const { id } = this.$route.params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);

    if (response.ok) {
      const productDetail = await response.json();
      this.productDetail = productDetail;
    }
  },
};
</script>

<style scoped>
.detail-content {
  display: grid;
  grid-template-columns: 400px auto;
  gap: 2rem;
}
.image {
  width: 100%;
  height: 400px;
}
</style>
