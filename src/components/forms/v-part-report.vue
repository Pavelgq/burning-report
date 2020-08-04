<template>
<section class="part-report">
    <h2>Создание отчета по партии</h2>
    <form action="/part-report" method="post" class='form'>
        <div class="wrapper">
            <fieldset class="form__field auth">
                <legend class="field__legend">
                    Оператор
                </legend>
                <input type="text" class="form__input auth__text" name="login" v-model="login" placeholder="Логин">
                <input type="password" class="form__input auth__text" name="password" v-model="password" placeholder="Пароль">
            </fieldset>
            <fieldset class="form__field part">
                <legend class="field__legend">Партия</legend>
                <input type="text" class="form__input part__text" name="" v-model="pack.aPartNumber" placeholder="№ партии">
                <input type="text" class="form__input part__text" name="" v-model="pack.bQuantity" placeholder="Количество">
                <input type="text" class="form__input part__text" name="" v-model="pack.cFurNumber" placeholder="№ печи">
            </fieldset>
        </div>
        <div class="wrapper">
            <fieldset class="form__field reg">
                <legend class="field__legend">Режим</legend>
                <input type="text" class="form__input reg__text" name="" v-model="pack.dZoneUp" placeholder="Температура верхней зоны">
                <input type="text" class="form__input reg__text" name="" v-model="pack.eZoneDown" placeholder="Температура нижней зоны">
                <input type="text" class="form__input reg__text" name="" v-model="pack.fZoneUp1" placeholder="t Верхняя зона">
                <input type="text" class="form__input reg__text" name="" v-model="pack.gZoneDown1" placeholder="t Нижняя зона">
            </fieldset>
            <fieldset class="form__field bad">
                <legend class="field__legend">Брак</legend>
                <input type="text" class="form__input bad__text" name="" v-model="pack.hDefectT" placeholder="Трещины">
                <input type="text" class="form__input bad__text" name="" v-model="pack.iDefectS" placeholder="Сколы">
                <input type="text" class="form__input bad__text" name="" v-model="pack.jDefectP" placeholder="Прыщи">
            </fieldset>
        </div>

        <fieldset class="form__field field">
            <legend class="field__legend">Особые отметки</legend>
            <textarea class="field__area" v-model="pack.kComment" placeholder="Выключение электричества, поломки и прочее..."></textarea>
        </fieldset>

        <div class="wrapper">
            <button type="button" class="form__button" @click="send">Создать отчет</button>
            <button type="button" class="form__button" @click="clear">Очистить поля</button>
        </div>
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
            pack: {}

        }
    },
    methods: {
        send() {
            let item = {
                login: this.login,
                password: this.password,
                pack: this.pack
            };
            this.$store.dispatch('POST_PART_REPORT_TO_API', item)
        },
        clear() {
            console.log();
        }
    },
    action: {
        //   sendReport() {
        //       ;
        //   }
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
