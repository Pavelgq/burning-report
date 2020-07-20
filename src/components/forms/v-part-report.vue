<template>
    <section class="part-report">
        <h2>Создание отчета по партии</h2>
        <form action="/part-report" method="post">
            <fieldset>
                <legend>
                    Оператор:
                </legend>
                <input type="text" name="login" id="login" placeholder="Логин">

                <input type="password" name="password" id="password" placeholder="Пароль">


            </fieldset>
            <fieldset>
                <legend>Партия</legend>

                <input type="text" name="" id="part-number" placeholder="№ партии">
                <input type="text" name="" id="fur-number" placeholder="№ печи">
                <input type="text" name="" id="quantity" placeholder="Количество">

                
            </fieldset>
            <fieldset>
                <legend>Режим</legend>
                <input type="text" name="" id="zone-up" placeholder="t Верхняя зона">
                <input type="text" name="" id="zone-down" placeholder="t Нижняя зона">
            </fieldset>

            <fieldset>
                <legend>Брак</legend>
                <input type="text" name="" id="defect-t" placeholder="Трещины">
                <input type="text" name="" id="defect-s" placeholder="Сколы">
                <input type="text" name="" id="defect-p" placeholder="Прыщи">
            </fieldset>
            <fieldset>
                <legend>Особые отметки</legend>
                <textarea  id="comment" placeholder="Выключение электричества, поломки и прочее..."></textarea>
            </fieldset>

            <button class="">Создать отчет</button>
        </form>
    </section>
    
    
    

</template>