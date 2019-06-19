<template>
    <el-menu
            router
            :default-active="$route.path"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :style="{ height: '100%' }">
        <el-menu-item v-for="item of items" :key="item.name" :index="item.url">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data: () => ({
       items: [
           { name: 'Аналитика', url: '/admin', icon: 'el-icon-menu' },
           { name: 'Создать', url: '/admin/create', icon: 'el-icon-edit' },
           { name: 'Посты', url: '/admin/list', icon: 'el-icon-tickets' },
           { name: 'Пользователи', url: '/admin/user', icon: 'el-icon-service' },
           { name: 'Выйти', url: '/admin/logout', icon: 'el-icon-setting' },
       ]
    }),
}
</script>

<style scoped>

</style>