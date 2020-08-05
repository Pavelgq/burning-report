<template>
<section class="part-report">
    <h2>Создание отчета по партии</h2>

    <p v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
            <li class="form__group--error" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </p>

    <form id="part-report-form" method="post" class='form' @submit.prevent="submitForm">
        <div class="wrapper">
            <fieldset class="form__field auth">
                <legend class="field__legend">
                    Оператор
                </legend>
                <div class="form__group" :class="{ 'form__group--error': $v.login.$error }">
                    <input type="text" class="form__input auth__text" :class="{'form__error':($v.login.$dirty && !$v.login.required) }" v-model.trim="login" placeholder="Логин">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.password.$error }">
                    <input type="password" class="form__input auth__text" :class="{'form__error':($v.password.$dirty && !$v.password.required) }" name="password" v-model.trim="password" placeholder="Пароль">
                </div>
            </fieldset>
            <fieldset class="form__field part">
                <legend class="field__legend">Партия</legend>
                <div class="form__group" :class="{ 'form__group--error': $v.partNumber.$error }">
                    <input type="text" class="form__input part__text" :class="{'form__error':($v.partNumber.$dirty && !$v.partNumber.required) }" v-model="partNumber" placeholder="№ партии">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.quant.$error }">
                    <input type="text" class="form__input part__text" :class="{'form__error':($v.quant.$dirty && !$v.quant.required || !$v.quant.numeric) }" v-model="quant" placeholder="Количество">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.furID.$error }">
                    <input type="text" class="form__input part__text" :class="{'form__error':($v.furID.$dirty && !$v.furID.required || !$v.furID.numeric) }" v-model="furID" placeholder="№ печи">
                </div>
            </fieldset>
        </div>
        <div class="wrapper">
            <fieldset class="form__field reg">
                <legend class="field__legend">Режим</legend>
                <div class="form__group" :class="{ 'form__group--error': $v.t1.$error }">
                    <input type="text" class="form__input reg__text" :class="{'form__error':($v.t1.$dirty && !$v.t1.required || !$v.t1.numeric) }" v-model="t1" placeholder="Температура (Верхняя зона)">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.t2.$error }">
                    <input type="text" class="form__input reg__text" :class="{'form__error':($v.t2.$dirty && !$v.t2.required || !$v.t2.numeric) }" v-model="t2" placeholder="Температура (Нижняя зона)">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.t3.$error }">
                    <input type="text" class="form__input reg__text" :class="{'form__error':($v.t2.$dirty && !$v.t3.numeric) }" v-model="t3" placeholder="Изменение темп. (Верхняя зона)">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.t4.$error }">
                    <input type="text" class="form__input reg__text" :class="{'form__error':($v.t2.$dirty && !$v.t4.numeric) }" v-model="t4" placeholder="Изменение темп.  (Нижняя зона)">
                </div>
            </fieldset>
            <fieldset class="form__field bad">
                <legend class="field__legend">Брак</legend>
                <div class="form__group" :class="{ 'form__group--error': $v.defT.$error }">
                    <input type="text" class="form__input bad__text" :class="{'form__error':($v.defT.$dirty && !$v.defT.required || !$v.defT.numeric) }" v-model="defT" placeholder="Трещины">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.defS.$error }">
                    <input type="text" class="form__input bad__text" :class="{'form__error':($v.defS.$dirty && !$v.defS.required || !$v.defS.numeric) }" v-model="defS" placeholder="Сколы">
                </div>
                <div class="form__group" :class="{ 'form__group--error': $v.defP.$error }">
                    <input type="text" class="form__input bad__text" :class="{'form__error':($v.defP.$dirty && !$v.defP.required || !$v.defP.numeric) }" v-model="defP" placeholder="Прыщи">
                </div>
            </fieldset>
        </div>

        <fieldset class="form__field field">
            <legend class="field__legend">Особые отметки</legend>
            <textarea class="field__area" v-model="changes" placeholder="Выключение электричества, поломки и прочее..."></textarea>
        </fieldset>

        <div class="wrapper">
            <button type="submit" class="form__button">Создать отчет</button>
            <button type="reset" class="form__button" @click="clear">Очистить поля</button>
        </div>
    </form>

</section>
</template>

<script>
import {
    required,
    numeric
} from 'vuelidate/lib/validators';
export default {
    name: 'v-part-report',
    data() {
        return {
            errors: [],
            login: '',
            password: '',
            partNumber: '',
            quant: '',
            furID: '',
            t1: '',
            t2: '',
            t3: '',
            t4: '',
            defT: '',
            defS: '',
            defP: '',
            changes: '',
            pack: []

        }
    },
    validations: {
        login: {
            required,
        },
        password: {
            required
        },
        partNumber: {
            required
        },
        quant: {
            required,
            numeric
        },
        furID: {
            required,
            numeric
        },
        t1: {
            required,
            numeric
        },
        t2: {
            required,
            numeric
        },
        t3: {

            numeric
        },
        t4: {

            numeric
        },
        defT: {
            required,
            numeric
        },
        defS: {
            required,
            numeric
        },
        defP: {
            required,
            numeric
        }

    },
    methods: {
        submitForm() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return
            }
            this.sendData();
        },
        sendData() {
            this.errors = [];
            this.pack = [this.partNumber, this.quant, this.furID, this.t1, this.t2, this.t3 ? this.t3 : 0, this.t4 ? this.t4 : 0, this.defT, this.defS, this.defP, this.changes]

            let item = {
                login: this.login,
                password: this.password,
                pack: this.pack
            };
            console.log(item);
            this.$store.dispatch('POST_PART_REPORT_TO_API', item).then(() => {
                console.log(this.$store.getters.PART_REPORT['error'])
                if (this.$store.getters.PART_REPORT['error'] !== undefined) {
                    this.errors.push(this.$store.getters.PART_REPORT.error);
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
            this.partNumber = '';
            this.quant = '';
            this.furID = '';
            this.t1 = '';
            this.t2 = '';
            this.t3 = '';           
            this.t4 = '';
            this.defT = '';
            this.defS = '';
            this.defP = '';
            this.changes = '';
        },
    },
    action: {

    }
}
</script>

<style lang="less">
.part-report {
    width: 600px;
}

.wrapper {
    display: flex;

    justify-content: space-between;
}

.form {
    display: flex;
    // justify-content: space-between;
    // align-items: stretch;
    flex-wrap: wrap;
    flex-direction: column;

    &__field {
        display: flex;
        flex-grow: 1;
        border: 1 px solid #eeeeee;
        border-radius: 10px;
        text-align: left;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15px;
        margin-bottom: 10px;
    }

    &__button {
        width: 150px;
        border-radius: 5px;
        border: 1px solid #333333;
        background-color: aliceblue;
        padding: 10px;

        &:hover {
            background-color: #eeeeee;
        }

        &:active {
            border: 1px solid sandybrown;
        }

        &:focus {
            // outline: 1px solid tomato;
            // outline-radius: 5px;
        }
    }

    &__group {

        &--error {
            color: #f04124;
            border-color: #f79483;

            animation-name: shakeError;
            animation-fill-mode: forwards;
            animation-duration: .6s;
            animation-timing-function: ease-in-out;

        }

        &--error+.error {
            display: block;
            color: #f57f6c;
        }
    }

    &__input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        border: 0;
        box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
        border: 2px solid #cccccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    &__error {
        border: 2px solid red;
    }
}

@keyframes shakeError {
    0% {
        transform: translateX(0);
    }

    15% {
        transform: translateX(0.375rem);
    }

    30% {
        transform: translateX(-0.375rem);
    }

    45% {
        transform: translateX(0.375rem);
    }

    60% {
        transform: translateX(-0.375rem);
    }

    75% {
        transform: translateX(0.375rem);
    }

    90% {
        transform: translateX(-0.375rem);
    }

    100% {
        transform: translateX(0);
    }
}

.field {
    display: flex;

    &__area {
        box-sizing: border-box;
        width: 100%;
        resize: vertical;
        padding: 15px;
        border-radius: 5px;
        border: 0;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
        height: 50px;
    }
}
</style>
