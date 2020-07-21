<template>
    <div class="header">
        <nav class="nav">
            <ul class="nav nav__list">
                <li class="nav__item" role="presentation" @click="tab('part')"><a class="nav__link" href="#">Журнал партии</a></li>
                <li class="nav__item" role="presentation" @click="tab('person')"><a class="nav__link" href="#">Жернал печи</a></li>

                <li class="nav__item" role="presentation" @click="tab('part_report')"><a class="nav__link" href="#">Создать отчет по партии</a></li>
                <li class="nav__item" role="presentation" @click="tab('person_report')"><a class="nav__link" href="#">Сдать/Принять смену</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'v-menu',
        data() {
            return {
                currentTab:"report"
                }
        },
        methods: {
            tab(data) {
                this.$emit('changeTab', {
                    currentTab: data
                })
            }
        }

    }
</script>

<style lang="less" scoped>
.header {
    margin-bottom: 30px;
}
.nav {
    box-sizing: border-box;
    &__list {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        margin: 0;
        padding: 0; 
    }
    &__item {
        display: flex;
        margin-left: 10px;
         &:first-child {
            margin: 0;
        }
    }
    &__link {
        box-sizing: border-box;
        padding: 10px;
        border: 2px solid #cccccc;
        text-decoration: none;
        color: #000000;
        border-radius: 5px;
        &:hover {
            background-color:darkseagreen;
        }

       
    }
}
</style> 
    
