<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">Vue Router</RouterLink></h1>
            <nav>
                <ul>
                    <li><RouterLink to="/webpack">Webpack</RouterLink></li>
                    <li><RouterLink to="/vuex">Vuex</RouterLink></li>
                    <li><RouterLink to="/router">Router</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import 'Style/partials/RouterNav';
</style>