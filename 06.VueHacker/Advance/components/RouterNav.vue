<template>
    <header>
        <div class="headerWrap">    
            <h1><NuxtLink to="/">Hacker Advance</NuxtLink></h1>
            <nav>
                <ul>
                    <li><NuxtLink to="/"><span>News</span></NuxtLink></li>
                    <li><NuxtLink to="/ask"><span>Ask</span></NuxtLink></li>
                    <li><NuxtLink to="/jobs"><span>Jobs</span></NuxtLink></li>
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
    @import '@/assets/scss/components/RouterNav';
</style>