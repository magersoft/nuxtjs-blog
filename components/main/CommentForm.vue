<template>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <h1>Добавить комментарий</h1>
        <el-form-item label="Ваше имя" prop="name">
            <el-input v-model="controls.name" />
        </el-form-item>
        <el-form-item label="Ваш комментарий" prop="text">
            <el-input
                type="textarea"
                v-model="controls.text"
                resize="none"
                :rows="2"
            />
        </el-form-item>
        <el-form-item>
            <el-button
                type="primary"
                round
                native-type="submit"
                :loading="loading"
            >Отправить</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    props: {
        postId: {
            type: String,
            required: true,
        }
    },
    data: () => ({
        loading: false,
        controls: {
            name: '',
            text: '',
        },
        rules: {
            name: [
                { required: true, message: 'Имя не может быть пустым', trigger: 'blur' },
            ],
            text: [
                { required: true, message: 'Введите комментарий', trigger: 'blur' },
            ],
        }
    }),
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true;

                    const formData = {
                        name: this.controls.name,
                        text: this.controls.text,
                        postId: this.postId,
                    };

                    try {
                        const newComment = await this.$store.dispatch('comment/create', formData);
                        this.$emit('created', newComment);
                        this.$message.success('Комментарий добавлен!');
                    } catch (e) {
                        this.loading = false;
                    }
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>