<script setup>
import OwnTable from '../OwnTable.vue'
</script>

<template>
  <OwnTable>
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
  </OwnTable>
</template>
