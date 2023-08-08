<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-sm-offset-1 col-md-10">
        <div class="row">
          <div class="col-md-4">
            <img width="300"
                 id="movieImg"
                 src="" />
          </div>
          <div class="col-md-8">
            <div class="list-group">
              <h2 class="list-group-item active"
                  id="movieName"
                  style="margin-top: 0px;">{{movie.movieName}} <span class="btn btn-success"
                      id="fav">收藏</span></h2>
              <div class="list-group-item">
                <h4>导演: <span id="director">{{movie.director}}</span></h4>
              </div>
              <div class="list-group-item">
                <h4>编剧: <span id="bianju">{{movie.bianju}}</span></h4>
              </div>
              <div class="list-group-item">
                <h4>主演: <span id="actors">{{movie.actors}}</span> </h4>
              </div>

            </div>
          </div>
        </div>

        <h3 class="text-success">剧情简介</h3>
        <p class="infos"
           v-text='movie.descp'>

        </p>
        <h3 class="text-danger">精彩短评</h3>
        <div class="discuzs">
          <div class="media"
               v-for='item in commentList'
               :key='item.id'>
            <a href="javascript:;"
               class="pull-left"><img width="100"
                   :src="'http://127.0.0.1:9000'+item.memberInfo.avatar"
                   class="media-object"
                   alt=""></a>
            <div class="media-body">
              <h4 class="media-heading">
                {{item.memberInfo.username}}
              </h4>
              <p>{{item.content}}</p>
              <p>时间：{{item.createdAt}}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入第三方模块
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      movie: {},
      commentList: []
    }
  },

  // 如果组件加载之后，需要发起数据请求，一般可以在created钩子函数中进行
  // 钩子函数：满足条件自动触发的函数
  // created钩子函数：在当前组件实例创建完毕之后自动触发--单独的选项结构
  async created () {
    // 获取电影详情
    let resMovie = await axios({
      url: 'http://127.0.0.1:9000/api/v1/movie/detail?movieId=5deca10c55a2f01c30adf1f9'
    })
    // console.log(resMovie);
    this.movie = resMovie.data.result.movieInfo

    // 获取当前电影的评论
    let resMovieComments = await axios({
      url: 'http://127.0.0.1:9000/api/v1/member/commentList?movieId=5deca10c55a2f01c30adf1f9&size=10'
    })
    this.commentList = resMovieComments.data.result.commentList
    console.log(this.commentList);

  },
  mounted () {
    // 当模板解析完毕，触发
    // console.log('方便先？');

  }
}
</script>
<style lang='less' scoped>
.media {
  display: flex;
}
</style>