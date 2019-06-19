<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1>Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>
            <div class="post-info">
                <small>
                    <i class="el-icon-time"></i>
                    {{ new Date().toLocaleString() }}
                </small>
                <small>
                    <i class="el-icon-view"></i>
                    42
                </small>
            </div>
            <div class="post-image">
                <img src="https://www.berlin.de/binaries/asset/image_assets/5719603/ratio_2_1/1560241983/624x312/" alt="post image" class="post-img">
            </div>
        </header>
        <main class="post-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum, optio? Ad aliquid animi architecto atque aut blanditiis, corporis debitis dolorum esse fugiat fugit hic impedit inventore iure laborum maiores non obcaecati officiis praesentium quaerat quo sit soluta tenetur voluptas!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum, optio? Ad aliquid animi architecto atque aut blanditiis, corporis debitis dolorum esse fugiat fugit hic impedit inventore iure laborum maiores non obcaecati officiis praesentium quaerat quo sit soluta tenetur voluptas!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, harum, optio? Ad aliquid animi architecto atque aut blanditiis, corporis debitis dolorum esse fugiat fugit hic impedit inventore iure laborum maiores non obcaecati officiis praesentium quaerat quo sit soluta tenetur voluptas!</p>
        </main>
        <footer>
            <app-comment-form
                @created="createCommentHandler"
                v-if="canAddComment"
            />

            <div class="comments" v-if="false">
                <app-comment
                    v-for="comment in 4"
                    :key="comment"
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
    data: () => ({
        canAddComment: true,
    }),
    methods: {
        createCommentHandler () {
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