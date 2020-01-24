<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card>

                    <v-img
                            src="http://centrdelfin.ru/wp-content/uploads/2012/02/29_06_2009_0643925001246262014_avtora-ne-znayu-esli-kto-v-kurse-napishite-v.jpg"
                            height="300"
                    ></v-img>

                    <v-card-text>
                        <h1 class="text--primary">Lorem</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptas.</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" text>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>
