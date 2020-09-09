<template>
<section class="person-report">
    <h2>Создание отчета по смене</h2>
    <!-- action="/person-report" -->
    <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
            <li class="form__group--error" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </p>
    <div class="error" v-if="$v.$error">Заполните все поля</div>
    <form method="post" id="person-report-form" @submit.prevent="submitForm">
        <div class="wrapper">
            <fieldset class="form__field auth">
                <legend class="field__legend">
                    Оператор:
                </legend>
                <div class="form__group" :class="{ 'form__group--error': $v.login.$error }">
                    <input type="text" class="form__input auth__text" :class="{'form__error':($v.login.$dirty && !$v.login.required) }" v-model.trim="login" placeholder="Логин">
                </div>
                <!-- <div class="error" v-if="$v.login.$dirty && !$v.login.required">Поле обязательно для заполнения</div>
                <div class="error" v-else-if="!$v.login.minLength">Поле должно содержать минимум {{$v.login.$params.minLength.min}} символа.</div> -->
                <div class="form__group" :class="{ 'form__group--error': $v.password.$error }">
                    <input type="password" class="form__input auth__text" :class="{'form__error':($v.password.$dirty && !$v.password.required) }" name="password" v-model.trim="password" placeholder="Пароль">
                </div>
                <!-- <div class="error" v-if="$v.password.$dirty && !$v.password.required">Поле обязательно для заполнения</div> -->
            </fieldset>
            <fieldset class="form__field field">
                <legend class="field__legend">Особые отметки</legend>
                <textarea class="field__area" v-model="comment" placeholder="Выключение электричества, поломки и прочее..."></textarea>
            </fieldset>
        </div>
        <div class="wrapper">
            <v-furnace v-for="furnance in furnances" :key="furnance.id" :furnance="furnance" v-on:data-pack="onData" @returnStatusToFields="(state) => isChildReady = state"></v-furnace>
            <!-- :v="$v.burns" -->
        </div>
        <div class="wrapper">
            <button type="submit" class="form__button">Создать отчет</button>
            <button type="reset" class="form__button" @click="clear">Очистить поля</button>
        </div>

    </form>
</section>
</template>

<script>
import {
    bus
} from '@/main.js';
import {
    required,

} from 'vuelidate/lib/validators';
import vFurnace from './v-furnace';

export default {
    name: 'v-person-report',
    data() {
        return {
            burns: {
                zone: ""
            },
            errors: [],
            login: '',
            password: '',
            comment: '',
            packs: [{}, {}, {}, {}],
            data: [
                [],
                [],
                [],
                []
            ],
            furnances: [{
                    id: 1,
                    area: 12
                },
                {
                    id: 2,
                    area: 12
                },
                {
                    id: 3,
                    area: 12
                },
                {
                    id: 4,
                    area: 4
                }
            ],
            isChildReady: false
        }
    },
    components: {
        vFurnace
    },
    validations: {
        login: {
            required,
        },
        password: {
            required
        },
        //  burns: {
        //         zone: {
        //             required,
        //             number
        //         }
        //     },
    },
    created() {

    },
    computed: {
        prov() {
            return this.$v
        },
    },
    methods: {
        sendData() {

            let count = 0;
            let auth = {
                login: this.login,
                password: this.password,
                fur: []
            }
            this.data.forEach(pack => {
                this.errors = [];
                pack.number = count;
                count += 1;
                let item = {
                    furNum: count,
                    pack: pack,
                    comment: this.comment
                };
                auth.fur.push(item);
            });

            this.$store.dispatch('POST_PERSON_REPORT_TO_API', auth).then(() => {
                console.log(this.$store.getters.PERSON_REPORT['error'])
                if (this.$store.getters.PERSON_REPORT['error'] !== undefined) {
                    this.errors.push(this.$store.getters.PERSON_REPORT.error);
                    console.log("я тут")
                } else {
                    this.clear();
                }
            });

        },
        clear() {
            this.errors = [];
            this.login = '';
            this.password = '';
            this.comment = '';

            this.$v.$reset();
            bus.$emit('reset_validate_all');
        },

        onData(event) {
            console.log(event);
            const i = event.furId - 1;
            this.data[i][event.id - 1] = event.temp;
            console.log(this.data)
        },
        submitForm() {
            console.log(this.$v);
            this.isChildReady = false;
            this.$eventPool.$emit("touchChildForm");
            //  bus.$emit('validate_all');
            // this.$v.$touch()
            if (this.$v.$invalid || this.isChildReady) {
                this.$v.$touch()
                bus.$emit('validate_all');
                return
            }
            this.sendData();
        }
    },

}
</script>

<style lang="less">
.person-report {
    width: 800px;
}
</style>
