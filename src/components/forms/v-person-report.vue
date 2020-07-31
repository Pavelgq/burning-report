<template>
    <section class="person-report">
        <h2>Создание отчета по смене</h2>
        <form action="/person-report" method="post" id="person-report-form">
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
                    <input type="password" class="auth__text" name="password" v-model.trim="password" placeholder="Пароль">
                </fieldset>
                <fieldset class="form__field field">
        
                    <legend class="field__legend">Особые отметки</legend>
        
                    <textarea class="field__area" v-model="comment" placeholder="Выключение электричества, поломки и прочее..."></textarea>
        
                </fieldset>
            </div>
            <div class="wrapper">
                <v-furnace  
                    v-for="furnance in furnances"
                    v-bind:key="furnance.id"
                    v-bind:furnance="furnance"
                    
                    v-on:data-pack = "onData"
                ></v-furnace>
            </div>
            <div class="wrapper">
                <button type="button" class="form__button" @click="sendData">Создать отчет</button>
                <button type="button" class="form__button" @click="clear">Очистить поля</button>
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
        comment: '',
        packs: [
            {},{},{},{}
        ],
        data: [
            [],[],[],[]
        ],
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
    // send () {
    //     let count = 1;
    //     this.packs.forEach(pack => {
    //         pack.number = count;
    //         count += 1;
    //         let item = {
    //           login: this.login,
    //           password: this.password,
    //           pack: pack
    //         };
    //         this.$store.dispatch('POST_PERSON_REPORT_TO_API', item)
    //     });
        
    // },
    sendData () {
        let count = 0;
        this.data.forEach(pack => {
            pack.number = count;
            count += 1;
            let item = {
              login: this.login,
              password: this.password,
              furNum: count,
              pack: pack,
              comment: this.comment
            };
            this.$store.dispatch('POST_PERSON_REPORT_TO_API', item);
            //если успех пришел с сервера то clear();
        });
        
    },
    clear() {
        const form = document.getElementById('person-report-form');
        
        form.reset();
        console.log("I am working");
    },

    onData(event) {
        console.log(event);
        const i = event.furId-1;
        this.data[i][event.id-1] = event.temp;
        console.log(this.data)
    }
  },

}
</script>

<style lang="less">

    .person-report {
        width: 800px;
    }
    

</style>