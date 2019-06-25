<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>{{ post.title }}</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date(post.date).toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    {{ post.views }}
                </small>
            </div>
            <div class="post-image">
                <img :src="post.imageUrl" alt="post image" class="post-img">
            </div>
        </header>
        <main class="post-content">
            <vue-markdown>{{ post.text }}</vue-markdown>
        </main>
        <footer>
            <app-comment-form
                @created="createCommentHandler"
                v-if="canAddComment"
                :postId="post._id"
            />

            <div class="comments" v-if="post.comments.length">
                <app-comment
                    v-for="comment in post.comments"
                    :key="comment._id"
                    :comment="comment"
                />
            </div>
            <div class="text-center" v-else>Нет комментариев</div>
        </footer>
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment';
import AppCommentForm from '@/components/main/CommentForm';

export default {
    validate({params}) {
        return Boolean(params.id);
    },
    components: {
        AppComment, AppCommentForm,
    },
    async asyncData({ store, params }) {
      const post = await store.dispatch('post/fetchById', params.id);
      await store.dispatch('post/addView', post);
      return {
          post: { ...post, views: ++post.views }
      }
    },
    data: () => ({
        canAddComment: true,
    }),
    methods: {
        createCommentHandler (comment) {
            this.post.comments.unshift(comment);
          this.canAddComment = false;
        },
    },
}
</script>

<style lang="scss" scoped>
    .post {
        max-width: 600px;
        margin: 0 auto;
    }
    .post-header {
        margin-bottom: 1.5rem;
    }
    .post-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    .post-info {
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-bottom: .5rem;
    }
    .post-image img {
        width: 100%;
        height: auto;
    }
    .post-content {
        margin-bottom: 2rem;
    }
</style>