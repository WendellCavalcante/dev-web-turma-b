<template>
    <div>
        <footer>
            <p>Bem vindo! De novo {{nome}} Tudo bem? <b>Vue com CLI</b></p>
        </footer>
    </div>
</template>

<script>
    export default{
        name: "HomeComponent",
        data(){
            return{
                nome:"Wendel"
            };
        }
    }
</script>

