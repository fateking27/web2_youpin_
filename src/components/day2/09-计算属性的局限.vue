<template>
  <div>
    <input type="number"
           v-model='first'>
    <hr>
    <p>{{getM}}--{{actors}}</p>
    <!-- <button @click='getMovie()'>获取数据</button> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      first: 0,
      second: '',
      movie: {},
      actors: ''
    }
  },
  computed: {
    // 只要计算属性中的依赖项发生了变化，就会重新触发计算属性
    getvalue () {
      // 计算属性的局限：它无法监听异步操作中的数据改变
      setTimeout(() => {
        this.second = this.first
        console.log(this.second);
      }, 10);
    },
    getM () {
      axios({
        url: 'http://127.0.0.1:9000/api/v1/movie/detail?movieId=5deca10c55a2f01c30adf1f9'
      }).then(res => {
        // console.log(resMovie);
        this.movie = res.data.result.movieInfo
        // console.log(this.movie);
      })
      return this.movie.actors
    }
  },
  methods: {
    getMovie () {
      axios({
        url: 'http://127.0.0.1:9000/api/v1/movie/detail?movieId=5deca10c55a2f01c30adf1f9'
      }).then(res => {
        // console.log(resMovie);
        this.movie = res.data.result.movieInfo
        // console.log(this.movie);

      })
    }
  }
}
</script>