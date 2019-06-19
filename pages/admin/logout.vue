<template>
    <div>logout</div>
</template>

<script>
    export default {
        layout: 'admin',
        middleware: ['admin-auth'],
        async beforeCreate() {
            await this.$store.dispatch('auth/logout');
            this.$router.push('/admin/login?message=logout');
        }
    }
</script>