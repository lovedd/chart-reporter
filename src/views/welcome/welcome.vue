<template>
    <div>{{data}}</div>
</template>
<script>
export default{
  data () {
    return {
      data: ''
    }
  },
  created () {
    this.getWelcomeData();
  },
  methods: {
    getWelcomeData () {
      this.$api.get('/mock/welcome', null, res => {
        this.data = res.result;
      })
    }
  }
}
</script>
