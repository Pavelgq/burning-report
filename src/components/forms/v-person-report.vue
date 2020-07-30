<template>
    <section class="person-report">
        <h2>Создание отчета по смене</h2>
        <form action="/person-report" method="post" >
            <div class="wrapper">
                <fieldset class="form__field auth">
                    <legend class="field__legend">
                        Оператор:
                    </legend>
                    <div class="form__group" :class="{ 'form__group--error': $v.login.$invalid }">
                        <input type="text" class="auth__text" v-model.trim="login" placeholder="Логин">
                    </div>
                    <div class="error" v-if="!$v.login.required">Поле обязательно для заполнения</div>
                    <div class="error" v-if="!$v.login.minLength">Поле должно содержать минимум {{$v.login.$params.minLength.min}} символа.</div>
                    <input type="password" class="auth__text" name="password" v-model="password" placeholder="Пароль">
                </fieldset>
                <fieldset class="form__field field">
        
                    <legend class="field__legend">Особые отметки</legend>
        
                    <textarea class="field__area"  placeholder="Выключение электричества, поломки и прочее..."></textarea>
        
                </fieldset>
            </div>
            <div class="wrapper">
            <fieldset class="form__field tonel">
                <legend>
                    Печь 1
                </legend>
                <input type="text" class="tonel__text" name="" v-model="packs[0].z1" placeholder="Зона 1">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z2" placeholder="Зона 2">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z3" placeholder="Зона 3">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z4_1" placeholder="Зона 4 верх">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z4_2" placeholder="Зона 4 низ">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z5_1" placeholder="Зона 5 верх">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z5_2" placeholder="Зона 5 низ">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z6_1" placeholder="Зона 6 верх">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z6_2" placeholder="Зона 6 низ">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z7_1" placeholder="Зона 7 верх">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z7_2" placeholder="Зона 7 низ">
                <input type="text" class="tonel__text" name="" v-model="packs[0].z8" placeholder="Зона 8">
            </fieldset>
            <fieldset class="form__field tonel">
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
            <fieldset class="form__field tonel">
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
             <fieldset class="form__field tonel">
                <legend>
                    ТермоТренировка
                </legend>
                <input type="text" name="" v-model="packs[3].z1" placeholder="Зона 1">
                <input type="text" name="" v-model="packs[3].z2" placeholder="Зона 2">
                <input type="text" name="" v-model="packs[3].z3" placeholder="Зона 3">
                <input type="text" name="" v-model="packs[3].z4_1" placeholder="Зона 4">
                <input type="text" name="" v-model="packs[3].z4_2" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z5_1" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z5_2" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z6_1" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z6_2" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z7_1" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z7_2" placeholder="" disabled>
                <input type="text" name="" v-model="packs[3].z8" placeholder="" disabled>
            </fieldset>
            </div>
            <div class="wrapper">
                <button type="button" class="form__button" @click="send">Создать отчет</button>
                <button type="button" class="form__button" @click="clear">Очистить поля</button>
            </div>
            <div class="wrapper">
                <v-furnace  
                    v-for="furnance in furnances"
                    v-bind:key="furnance.id"
                    v-bind:furnance="furnance"
                    v-on:data-change="onData"
                ></v-furnace>
            </div>
        </form>
    </section>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import vFurnace from './v-furnace';

export default {
    name: 'v-part-report',
    data() {
        return {
        login: '',
        password: '',
        packs: [
            {},{},{},{}
        ],
        data: [],
        furnances:[
            {id: 1, area: 12},
            {id: 2, area: 12},
            {id: 3, area: 12},
            {id: 4, area: 4}
        ]
        }
  },
  components: {
        vFurnace
    },
  validations: {
    login: {
      required,
      minLength: minLength(4)
    },
    password: {
       required
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
        });
        
    },
    clear() {
        console.log("I am working");
    },

    onData(event) {
        console.log(event);
        this.data.push(event)
    }
  },

}
</script>

<style lang="less">

    .person-report {
        width: 800px;
    }
    

</style>