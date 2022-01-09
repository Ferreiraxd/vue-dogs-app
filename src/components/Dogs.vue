<template lang="">
    <div>
        <div>
            <h1>Selecciona una raza de perritos para visualizar fotos de los perritos</h1>
        </div>
        <div class="breeds-container">
            <div v-if="noError" v-for="breed in arrayDogs" :key="breed.id">
            <router-link :to="`/breed/${breed}`">
                <p>{{ breed }}</p>
            </router-link>
            </div>
            <div v-if="!noError">
                <div >
                    <h1> No pudimos acceder a la lista de razas de perritos </h1>
                    <h2> Houston tiene problemas para obtener a los perritos, quizá no les pueden tomar fotos aún :(. Vuelve más tarde! </h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dogs',
    components:{
    },
    data(){
        return {
            arrayDogs: [],
            noError: true
        }
    },
    created() {
        this.dogsApp();
    },
    methods: {
        async dogsApp(){
            try{
                const data = await fetch('https://dog.ceo/api/breeds/list')
                .then( response => { return response.json() })
                .catch((e) => this.noError = false);
                this.arrayDogs = data['message'];
            } catch (e){
                this.noError = false;
            }
        }
    },
}
</script>