<template>
    <div style="width: 100%">
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item
                                v-for="ad in ads"
                                :key="ad.id"
                                :src="ad.imageSrc"
                                reverse-transition="fade-transition"
                                transition="fade-transition"
                        >
                            <div class="carousel-link">
                                <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
                            </div>
                        </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad of ads"
                        :key="ad.id"
                >
                    <v-card
                            class="mx-auto"
                            max-width="344"
                    >
                        <v-img
                                :src="ad.imageSrc"
                                height="200px"
                        ></v-img>

                        <v-card-title>
                            {{ad.title}}
                        </v-card-title>

                        <v-card-subtitle>
                            {{ad.description}}
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                    text
                                    :to="'/ad/' + ad.id"
                            >Open</v-btn>

                            <v-btn
                                    class="primary"
                                    raised
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                            <div v-show="show">
                                <v-divider></v-divider>

                                <v-card-text>
                                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                                </v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ads: [
                {
                    title: 'First ad',
                    description: 'Hello I am a description',
                    promo: false,
                    imageSrc: 'http://centrdelfin.ru/wp-content/uploads/2012/02/29_06_2009_0643925001246262014_avtora-ne-znayu-esli-kto-v-kurse-napishite-v.jpg',
                    id: '123'
                },
                {
                    title: 'Second ad',
                    description: 'Hello I am a description',
                    promo: true,
                    imageSrc: 'http://royalsky.by/assets/images/blog/florencija/florencija-1.jpg',
                    id: '1234'
                },
                {
                    title: 'Third ad',
                    description: 'Hello I am a description',
                    promo: true,
                    imageSrc: 'https://www.rosphoto.com/images/u/articles/1510/7_5.jpg',
                    id: '12345'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .carousel-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>
