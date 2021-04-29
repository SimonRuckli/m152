<template>
  <div class="main">
    <ul v-for="item in subjects.name">
      <li v-for="n in even(set)">{{ n }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      subjects: [
        {
          name: "Mathematik",
          grades: [5, 4.7, 3.5, 4.1],
        },
        {
          name: "Geschichte",
          grades: [5.5, 4.9, 5.75],
        },
        {
          name: "Physik",
          grades: [2, 2.7, 4.3],
        },
        {
          name: "Deutsch",
          grades: [4.25, 4.1, 3.5],
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.main {
  max-width: 500px;
  margin: 0 auto;
  background-color: #eee;
  padding: 20px;

  h1 {
    text-align: center;
  }
}
</style>
