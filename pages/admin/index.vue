<template>
    <h1>Admin page</h1>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
}
</script>