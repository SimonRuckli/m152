<template>
    <div class="main">
    <div>
      <h1>Anzahl Tasks: {{ itemCount }}</h1>
    </div>

    <ul class="todos">
        <li v-for="item in tasks">{{ item }}</li>
    </ul>

    <input type="text" placeholder="Neues Item hinzufügen" v-model="newItem" />
    <input type="submit" value="Hinzufügen" v-on:click="addItem(newItem)" />
</div>
</template>

<script>
    export default {
    data: function() {
        return {
            tasks: [
                "Einkaufen",
                "Rasen mähen",
                "Katze füttern"
            ]
        }
    },
    methods: {
        addItem: function(item) {
            this.tasks.push(item);
        }
    },
    computed: {
    itemCount: function() {
        return this.tasks.length;
    }
}
}
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