<template>
  <el-card
    class="post"
    shadow="hover"
    :body-style="{ padding: 0 }"
  >
    <header slot="header" class="post-header">
      <h3>{{ post.title }}</h3>

      <small>
        <i class="el-icon-time"></i>
        {{ post.date | date('date') }}
      </small>
    </header>
    <div class="post-body">
      <img :src="post.imageUrl" alt="post image" class="post-img">
    </div>
    <footer class="post-footer">
      <el-button type="primary" round @click="openPost">Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        {{ post.comments.length }}
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    openPost() {
      const id = this.post._id;
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 1.5rem;
  }
  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-img {
    width: 100%;
    height: auto;
  }
  .post-body {}
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
</style>
