<script setup>
import Table from './Table.vue'
</script>

<template>
  <Table>
    <template #head>
      <tr>
        <th>Sesion</th>
        <th>Date</th>
        <th>Acctions</th>
      </tr>
    </template>
    <template #body>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </template>
  </Table>
</template>
