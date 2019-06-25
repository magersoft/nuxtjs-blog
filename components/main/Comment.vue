<template>
    <el-card class="comment">
        <div class="comment-header">
            <small>{{ comment.name }}</small>
            <small>
                <i class="el-icon-time"></i>
                {{ comment.date | date('date') }}
            </small>
        </div>
        <div class="comment-text">
            {{ comment.text }}
        </div>
    </el-card>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style>
    .comment {
        margin-bottom: 1rem;
    }
    .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: .5rem;
    }
    .comment-text {
        white-space: pre-line;
    }
</style>