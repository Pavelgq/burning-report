<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item"><button class="button" type="submit">Создать отчет</button></li>
            <li class="nav__item"><button class="button" type="submit">Показать партии</button></li>
            <li class="nav__item"><button class="button" type="submit">Показать печи</button></li>
            <li class="nav__item"><button class="button" type="submit">Поломка</button></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
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