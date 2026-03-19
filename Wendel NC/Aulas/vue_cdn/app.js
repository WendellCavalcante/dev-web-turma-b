const meuAppVue = {
    data() {
        return {
            nome:"Wendel Nascimento Cavalante",
            idade: 19,
            inputText: "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");

