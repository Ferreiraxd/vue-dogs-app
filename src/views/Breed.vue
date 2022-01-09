<template>
    <div>
        <div id="nav">
        <router-link to="/">Link para volver al menú de perritos</router-link>
        </div>
        <h1> Raza {{ $route.params.breed }} </h1>
        <div class="photos-container" v-if="noError">
            <div v-for="img in arrayImages.slice(0, 2)" :key="img.id">
                <img :src="img" />
            </div>
        </div>
        <div v-if="!noError">
            <div v-if="notFound">
                <h1> No pudimos acceder a las imagenes </h1>
                <h2> Houston tiene problemas para detectar a la raza {{$route.params.breed}} en el planeta, intenta con alguna que si exista! </h2>
            </div>
            <div v-if="!notFound">
                <h1> No pudimos acceder a las imagenes </h1>
                <h2> Houston tiene problemas para obtener las imagenes, vuelve más tarde! </h2>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Breed',
    data(){
        return {
            arrayImages: [],
            noError: true,
            notFound: false
        }
    },
    created() {
       this.getDogsImages();
    },
    methods: {
         async getDogsImages(){
            try{
                const data = await fetch(`https://dog.ceo/api/breed/${this.$route.params.breed.toLowerCase()}/images`)
                .then( response => { return response.json() })
                .catch((e) => this.noError = false);

                if(data['status'] != "success"){
                    this.noError = false;
                    data['code'] === 404 ? this.notFound = true : this.notFound = false ;
                }else{
                    this.arrayImages = data['message'];
                }
                
            } catch (e){
                this.noError = false;
            }
        }
    }
}
</script>