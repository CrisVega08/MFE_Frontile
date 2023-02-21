<template>
  <section class="container">
    <h1 class="title">Hello from Landing with VueJS</h1>
    <p class="detail">
      This landing has created with MicroFronts 
    </p>
  </section>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.title {
  background-color: $white;
  color: $medium-jungle-green;
}

.detail {
  color: $metallic-silver;
  font-size: 10px;
  margin-top: 5px;
}

</style>
