<template>
<fieldset class="form__field tonel">
    <legend>
        {{furnanceName}}
    </legend>
    <v-zone v-for="zone in dataZones" v-bind:key="zone.id" :zone="zone" :furId="furnance.id" v-on:data-change="readData" :v="$v.zone"></v-zone>
</fieldset>
</template>

<script>
import vZone from './v-zone';
export default {
    name: 'v-furnace',
    props: {
        furnance: Object
    },
    data() {
        return {
            zones: {
                z1: 'Зона 1',
                z2: 'Зона 2',
                z3: 'Зона 3',
                z4_1: 'Зона 4 верх',
                z4_2: 'Зона 4 низ',
                z5_1: 'Зона 5 верх',
                z5_2: 'Зона 5 низ',
                z6_1: 'Зона 6 верх',
                z6_2: 'Зона 6 низ',
                z7_1: 'Зона 7 верх',
                z7_2: 'Зона 7 низ',
                z8: 'Зона 8',
            },
            pack: {}
        }
    },
    components: {
        vZone
    },
    validations: {

    },
    computed: {
        furnanceName() {
            if (this.furnance.id == 4) {
                return `ТермоТренировка (${this.furnance.id})`;
            } else {
                return `Печь ${this.furnance.id}`;
            }
        },
        dataZones() {
            let num = this.furnance.area;
            let mas = [];
            let count = 0;
            for (const key in this.zones) {
                if (num > 0) {
                    num -= 1;
                    count += 1;
                } else {
                    break;
                }

                const element = this.zones[key];
                mas.push({
                    'name': element,
                    'id': count,
                    furId: this.furnance.id
                });

            }
            console.log(mas)
            return mas;

        }
    },
    methods: {
        readData: function (event) {
            this.pack = event;
            this.$emit('data-pack', this.pack);
        },

    }

}
</script>

<style lang="less">
.tonel {
    &__text {}
}
</style>
