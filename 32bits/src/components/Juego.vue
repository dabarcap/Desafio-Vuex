<script>
export default {
    props: ["videojuego","index"]
}
</script>

<template>
    <tr>
        <td>{{ videojuego.codigo }}</td>
        <td>{{ videojuego.nombre }}</td>
        <td>{{ videojuego.stock }}</td>
        <td>{{ videojuego.codigo }}</td>
        <td>
            <button @click="$emit('aumentar', index)">+</button>
            <button @click="$emit('disminuir', index)">-</button>
        </td>
    </tr>

</template>

<style scoped>

</style>
