<template>
  <div>
    {{data}}
  </div>
</template>
<script>
export default{
  data () {
    return {
      data: 'hello'
    }
  },
  created () {
    this.getCurrentData()
  },
  methods: {
    getCurrentData () {
      this.$api.get('/mock/current', null, res => {
        let data = res.data
        console.log(res)
        this.data = data.result
      })
    }
  }
}
</script>
