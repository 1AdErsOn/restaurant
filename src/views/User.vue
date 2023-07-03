<script setup>
import { reactive, ref } from 'vue'
import Alert from '../components/Alert.vue'
import Table from '../components/Table.vue'
const alert = reactive({
  message: 'Users',
  variant: '',
  show: true
})
const showAlert = (message, variant = 'warning') => {
  alert.message = message
  alert.variant = variant
  alert.show = true
}
</script>

<template>
  <div class="card mt-3">
    <div class="card-body">
      <Alert :show="alert.show" :message="alert.message" />
      <Table>
        <template #head>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </template>
        <template #body>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>
              <button class="btn btn-success" @click="$router.push('/profile')">Perfil</button>
            </td>
          </tr>
        </template>
      </Table>
    </div>
  </div>
</template>

<style scoped></style>
