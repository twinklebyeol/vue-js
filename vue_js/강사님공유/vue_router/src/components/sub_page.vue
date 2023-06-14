<template>
    <div>
        <h2>서브 페이지입니다.</h2>
        <button type="button" @click="fnMainPage">라우터 함수로 서브 페이지로 이동</button>
    </div>
</template>
<script>
export default{
    methods: {
        fnMainPage: function(){
            this.$router.push('/main')
        }
    }
}
</script>