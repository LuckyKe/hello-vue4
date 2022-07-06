<template>
  <!--所有的元素，必须不能直接在根节点下-->
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}
    {{id}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile"
}
</script>

<style scoped>

</style>
