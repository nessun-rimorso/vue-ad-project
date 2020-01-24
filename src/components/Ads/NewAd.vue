<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new Ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        validation
                        class="mb-6"
                >
                    <v-text-field
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    />

                    <v-textarea
                            label="Ad description"
                            name="description"
                            type="text"
                            v-model="description"
                            :rules="[v => !!v || 'Description is required']"
                    />
                </v-form>

                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <img src="" height="100">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <v-spacer></v-spacer>
                        <v-btn
                                class="success"
                                :disabled="!valid"
                                @click="createAd"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex>
                        <v-switch
                                color="primary"
                                v-model="promo"
                                label="Add to promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false,
            }
        },
        methods: {
            createAd () {
                if (this.$refs.form.validate()) {
                    // logic
                    const  ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                    }

                    console.log(ad);
                }
            },
        }
    }
</script>
