<template>
    
    <nav class="nav">
        <ul class="nav nav__list">
            <li class="nav__item" role="presentation" @click="tab('part')"><a href="#">Показать партии</a></li>
            <li class="nav__item" role="presentation" @click="tab('person')"><a href="#">Показать печи</a></li>

            <li class="nav__item" role="presentation" @click="tab('part_report')"><a href="#">Создать отчет по партии</a></li>
            <li class="nav__item" role="presentation" @click="tab('person_report')"><a href="#">Сдать/Принять смену</a></li>
        </ul>
        <!-- <ul class="nav__list">
            <li class="nav__item"><button class="button" type="submit" @click="">Создать отчет</button></li>
            <li class="nav__item"><button class="button" type="submit">Показать партии</button></li>
            <li class="nav__item"><button class="button" type="submit">Показать печи</button></li>
            <li class="nav__item"><button class="button" type="submit">Поломка</button></li>
        </ul> -->
    </nav>
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

<style scoped>
    .nav {
        
    }

    .nav__list {
        list-style: none;
        display: flex;
        justify-content: flex-start;
    }
    .nav__item {
        margin-left: 10px;
    }
</style>