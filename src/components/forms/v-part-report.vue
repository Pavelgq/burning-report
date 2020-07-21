<template>
    <section class="part-report">
        <h2>Создание отчета по партии</h2>
        <form action="/part-report" method="post" class='form'>
            <fieldset class="form__field field">
                <legend class="field__legend">
                    Оператор:
                </legend>
                <input type="text" class="field__text" name="login" v-model="login" placeholder="Логин">
                <input type="password" class="field__text" name="password" v-model="password" placeholder="Пароль">
            </fieldset>
            <fieldset class="form__field field">
                <legend class="field__legend">Партия</legend>
                <input type="text" class="field__text" name="" v-model="pack.aPartNumber" placeholder="№ партии">
                <input type="text" class="field__text" name="" v-model="pack.bQuantity" placeholder="Количество">
                <input type="text" class="field__text" name="" v-model="pack.cFurNumber" placeholder="№ печи">
            </fieldset>
            <fieldset class="form__field field">
                <legend class="field__legend">Режим</legend>
                <input type="text" class="field__text" name="" v-model="pack.dZoneUp" placeholder="t Верхняя зона">
                <input type="text" class="field__text" name="" v-model="pack.eZoneDown" placeholder="t Нижняя зона">
                <input type="text" class="field__text" name="" v-model="pack.fZoneUp1" placeholder="t Верхняя зона">
                <input type="text" class="field__text" name="" v-model="pack.gZoneDown1" placeholder="t Нижняя зона">
            </fieldset>
            <fieldset class="form__field field">
                <legend class="field__legend">Брак</legend>
                <input type="text" class="field__text" name="" v-model="pack.hDefectT" placeholder="Трещины">
                <input type="text" class="field__text" name="" v-model="pack.iDefectS" placeholder="Сколы">
                <input type="text" class="field__text" name="" v-model="pack.jDefectP" placeholder="Прыщи">
            </fieldset>
            <fieldset class="form__field field">
                <legend class="field__legend">Особые отметки</legend>
                <textarea class="field__area" v-model="pack.kComment" placeholder="Выключение электричества, поломки и прочее..."></textarea>
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
        pack: {}
        
        }
  },
  methods: {
    send () {
        let item = {
              login: this.login,
              password: this.password,
              pack: this.pack
          };
        this.$store.dispatch('POST_PART_REPORT_TO_API', item)
    }
  },
  action: {
    //   sendReport() {
    //       ;
    //   }
  }
}
</script>

<style scoped>

</style>