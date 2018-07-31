<template>
    <v-list>
        <v-list-group
        v-for="item in items"
        v-model="item.active"
        :key="item.title"
        :prepend-icon="item.icon"
        no-action
        >
            <v-list-tile slot="activator">
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.header }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
            v-for="link in item.links"
            :key="link.name"
            :to="link.to"
            >
                <v-list-tile-content>
                    <v-list-tile-title>{{ link.name }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list-group>
    </v-list>
</template>

<script>
export default {
    data: () => ({
        items: [
            {   
                icon: 'home',
                header: 'HOME APPLIANCES',
                links: [
                    { name: 'Refrigerators', to: '/services/:id' },
                    { name: 'Air Conditioner(A.C)', to: '/services/:id' },
                    { name: 'Washing Machine', to: '/services/:id' },
                    { name: 'Water Pump Motor', to: '/services/:id' },
                    { name: 'R/O Water Purifier', to: '/services/:id' },
                    { name: 'Fan/Cooler', to: '/services/:id' },
                    { name: 'Line Fault Detection', to: '/services/:id' },
                    { name: 'Heater/Geyser', to: '/services/:id' },
                    { name: 'LED and Lighting', to: '/services/:id' },
                ]
            },
            {   
                icon: 'business',
                header: 'OFFICE/SHOWROOMS',
                links: [
                    { name: 'Air Conditioner(A.C)', to: '/services/:id' },
                    { name: 'Fan/Cooler', to: '/services/:id' },
                    { name: 'Line Fault Detection', to: '/services/:id' },
                    { name: 'Installation and Commissioning', to: '/services/:id' },
                    { name: 'LED and Lighting', to: '/services/:id' },
                ]
            },
            {   
                icon: 'store',
                header: 'INDUSTRIAL WORK',
                links: [
                    { name: 'Power factor control', to: '/services/:id' },
                    { name: 'Repair/Upgrade', to: '/services/:id' },
                    { name: 'Security System', to: '/services/:id' },
                    { name: 'Energy Audit', to: '/services/:id' },
                    { name: 'Load analysis', to: '/services/:id' },
                    { name: 'New Commissioning', to: '/services/:id' },
                    { name: 'LED and Lighting', to: '/services/:id' },
                ]
            },

        ]
    })
}
</script>
