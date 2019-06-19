<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
        <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
            <h2>Авторизация</h2>
            <el-form-item label="Логин" prop="login">
                <el-input v-model.trim="controls.login" />
            </el-form-item>
            <el-form-item label="Пароль" prop="password">
                <el-input v-model.trim="controls.password" type="password" />
            </el-form-item>
            <el-form-item>
                <el-button
                        type="primary"
                        round
                        native-type="submit"
                        :loading="loading"
                >Войти</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    layout: 'empty',
    data: () => ({
        loading: false,
        controls: {
            login: '',
            password: '',
        },
        rules: {
            login: [
                { required: true, message: 'Логин не может быть пустым', trigger: 'blur' },
            ],
            password: [
                { required: true, message: 'Пароль не может быть пустым', trigger: 'blur' },
                { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' },
            ],
        }
    }),
    mounted() {
      const { message } = this.$route.query;

      switch (message) {
          case 'login':
              this.$message.info('Авторизуйтесь в системе!');
              break;
          case 'logout':
              this.$message.success('Вы вышли из системы');
              break;
      }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.loading = true;

                    const formData = {
                        login: this.controls.login,
                        password: this.controls.password,
                    };

                    try {
                        await this.$store.dispatch('auth/login', formData);
                        this.loading = false;
                        this.$router.push('/admin');
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