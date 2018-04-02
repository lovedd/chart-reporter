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
    this.getWelcomeData()
  },
  methods: {
    getWelcomeData () {
      this.$api.get('/mock/welcome', null, res => {
        let data = res.data
        console.log(res)
        this.data = data.result
      })
    }
  }
}
</script>
