<template>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <h1 class="mb">Создать новый пост</h1>
        <el-form-item label="Название поста" prop="title">
            <el-input v-model="controls.title" />
        </el-form-item>
        <el-form-item label="Текст в формате .md или .html" prop="text">
            <el-input v-model="controls.text" type="textarea" resize="none" :rows="10" />
        </el-form-item>

        <el-button class="mb" type="success" plain @click="previewDialog = true">Предпросмотр</el-button>

        <el-upload
                class="mb"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleImageChange"
                :auto-upload="false"
                ref="upload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>

        <el-dialog
                title="Предпросмотр"
                :visible.sync="previewDialog">
            <div :key="controls.text">
                <vue-markdown>{{ controls.text }}</vue-markdown>
            </div>
        </el-dialog>

        <el-form-item>
            <el-button
                    type="primary"
                    round
                    native-type="submit"
                    :loading="loading"
            >Создать</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    data: () => ({
        previewDialog: false,
        loading: false,
        image: null,
        controls: {
            title: '',
            text: '',
        },
        rules: {
            text: [
                { required: true, message: 'Текст не может быть пустым', trigger: 'blur' },
            ],
            title: [
                { required: true, message: 'Название поста не может быть пустым', trigger: 'blur' }
            ]
        }
    }),
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid && this.image) {
                    this.loading = true;

                    const formData = {
                        title: this.controls.title,
                        text: this.controls.text,
                        image: this.image,
                    };

                    try {
                        await this.$store.dispatch('post/create', formData);
                        this.controls.title = '';
                        this.controls.text = '';
                        this.image = null;
                        this.$refs.upload.clearFiles();
                        this.$message.success('Пост создан');
                    } catch (e) {} finally {
                        this.loading = false;
                    }
                } else {
                    this.$message.warning('Загрузите файл');
                }
            })
        },
        handleImageChange(file, fileList) {
            this.image = file.raw;
        },
    }
}
</script>

<style lang="scss" scoped>
    form {
        width: 600px;
    }
</style>