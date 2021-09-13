<template>
    <header>
        <div class="headerWrap">
            <h1><RouterLink to="/">Hacker Basic</RouterLink></h1>
            <nav>
                <ul>
                    <li><RouterLink to="/news">News</RouterLink></li>
                    <li><RouterLink to="/ask">Ask</RouterLink></li>
                    <li><RouterLink to="/jobs">Jobs</RouterLink></li>
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
    @import '@/assets/scss/components/RouterNav'
</style>