<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3"
                >My ads</h1>

                <v-card
                        class="elevation-10 mb-5"
                        v-for="ad of ads"
                        :key="ad.id"
                >
                    <v-container class="pt-0 pb-0">
                        <v-layout row>
                            <v-flex xs4>
                                <v-img
                                        :src="ad.imageSrc"
                                        height="150px"
                                ></v-img>
                            </v-flex>

                            <v-flex xs8>
                                <v-card-text>
                                    <h2 class="text--primary">{{ad.title}}</h2>
                                    <p>{{ad.description}}</p>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            class="info"
                                            :to="'/ad/' + ad.id"
                                    >Open</v-btn>

                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
                ]
            }
        }
    }
</script>
