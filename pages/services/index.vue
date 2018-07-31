<template>
    <v-container>
        <v-layout column justify-center align-center>
            <v-container>
                <v-layout row>
                    <v-flex xs12 sm6 md5 row class="mt-5">
                        <ColorCard title="Electrical AMC Services">
                        
                        </ColorCard>  
                    </v-flex>
                    <v-flex xs12 sm6 md4 row class="mt-5">
                        <ColorCard title="Home Appliances"/>
                    </v-flex>
                    <v-flex xs12 sm6 md4 row class="mt-5">
                        <ColorCard title="Office/Showrooms"/>
                    </v-flex>
                    <v-flex xs12 sm6 md4 row class="mt-5">
                        <ColorCard title="Industrial Work"/>
                    </v-flex>
                </v-layout>
            </v-container>
            
        </v-layout>
    </v-container>
</template>

<script>
import ColorCard from '@/components/ColorCard.vue'

export default {
    components: {
        ColorCard
    }
}
</script>
