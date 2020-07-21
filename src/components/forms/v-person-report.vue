<template>
    <section class="person-report">
        <h2>Создание отчета по смене</h2>
        <form action="/person-report" method="post">
            <fieldset>
                <legend>
                    Оператор:
                </legend>
                <input type="text" name="login" v-model="login" placeholder="Логин">
                <input type="password" name="password" v-model="password" placeholder="Пароль">
            </fieldset>
            <fieldset>
                <legend>
                    Печь 1
                </legend>
                <input type="text" name="" v-model="packs[0].z1" placeholder="Зона 1">
                <input type="text" name="" v-model="packs[0].z2" placeholder="Зона 2">
                <input type="text" name="" v-model="packs[0].z3" placeholder="Зона 3">
                <input type="text" name="" v-model="packs[0].z4_1" placeholder="Зона 4 верх">
                <input type="text" name="" v-model="packs[0].z4_2" placeholder="Зона 4 низ">
                <input type="text" name="" v-model="packs[0].z5_1" placeholder="Зона 5 верх">
                <input type="text" name="" v-model="packs[0].z5_2" placeholder="Зона 5 низ">
                <input type="text" name="" v-model="packs[0].z6_1" placeholder="Зона 6 верх">
                <input type="text" name="" v-model="packs[0].z6_2" placeholder="Зона 6 низ">
                <input type="text" name="" v-model="packs[0].z7_1" placeholder="Зона 7 верх">
                <input type="text" name="" v-model="packs[0].z7_2" placeholder="Зона 7 низ">
                <input type="text" name="" v-model="packs[0].z8" placeholder="Зона 8">
            </fieldset>
<fieldset>
                <legend>
                    Печь 2
                </legend>
                <input type="text" name="" v-model="packs[1].z1" placeholder="Зона 1">
                <input type="text" name="" v-model="packs[1].z2" placeholder="Зона 2">
                <input type="text" name="" v-model="packs[1].z3" placeholder="Зона 3">
                <input type="text" name="" v-model="packs[1].z4_1" placeholder="Зона 4 верх">
                <input type="text" name="" v-model="packs[1].z4_2" placeholder="Зона 4 низ">
                <input type="text" name="" v-model="packs[1].z5_1" placeholder="Зона 5 верх">
                <input type="text" name="" v-model="packs[1].z5_2" placeholder="Зона 5 низ">
                <input type="text" name="" v-model="packs[1].z6_1" placeholder="Зона 6 верх">
                <input type="text" name="" v-model="packs[1].z6_2" placeholder="Зона 6 низ">
                <input type="text" name="" v-model="packs[1].z7_1" placeholder="Зона 7 верх">
                <input type="text" name="" v-model="packs[1].z7_2" placeholder="Зона 7 низ">
                <input type="text" name="" v-model="packs[1].z8" placeholder="Зона 8">
            </fieldset>
            <fieldset>
                <legend>
                    Печь 3
                </legend>
                <input type="text" name="" v-model="packs[2].z1" placeholder="Зона 1">
                <input type="text" name="" v-model="packs[2].z2" placeholder="Зона 2">
                <input type="text" name="" v-model="packs[2].z3" placeholder="Зона 3">
                <input type="text" name="" v-model="packs[2].z4_1" placeholder="Зона 4 верх">
                <input type="text" name="" v-model="packs[2].z4_2" placeholder="Зона 4 низ">
                <input type="text" name="" v-model="packs[2].z5_1" placeholder="Зона 5 верх">
                <input type="text" name="" v-model="packs[2].z5_2" placeholder="Зона 5 низ">
                <input type="text" name="" v-model="packs[2].z6_1" placeholder="Зона 6 верх">
                <input type="text" name="" v-model="packs[2].z6_2" placeholder="Зона 6 низ">
                <input type="text" name="" v-model="packs[2].z7_1" placeholder="Зона 7 верх">
                <input type="text" name="" v-model="packs[2].z7_2" placeholder="Зона 7 низ">
                <input type="text" name="" v-model="packs[2].z8" placeholder="Зона 8">
            </fieldset>
             <button type="button" class="" @click="send">Создать отчет</button>
        </form>
    </section>
</template>

<script>
export default {
     name: 'v-part-report',
    data() {
        return {
        login: '',
        password: '',
        packs: [
            {},{},{}
        ]
        }
  },
   methods: {
    send () {
        let count = 1;
        this.packs.forEach(pack => {
            pack.number = count;
            count += 1;
            let item = {
              login: this.login,
              password: this.password,
              pack: pack
            };
            this.$store.dispatch('POST_PERSON_REPORT_TO_API', item)
        })
        
    }
  },
}
</script>

<style>

</style>