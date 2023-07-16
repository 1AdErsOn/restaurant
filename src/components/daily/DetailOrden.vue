<script setup>
import ItemOrder from './ItemOrder.vue'
</script>

<template>
  <div class="row">
    <div class="col col-md-8">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">Ref. Venta</th>
            <td>Shop/0003</td>
          </tr>
          <tr>
            <th scope="row">Fecha</th>
            <td>date</td>
          </tr>
          <tr>
            <th scope="row">Session</th>
            <td>POS/0001</td>
          </tr>
          <tr>
            <th scope="row">Usuario</th>
            <td>Aderson</td>
          </tr>
          <tr>
            <th scope="row">Cliente</th>
            <td>Aderson</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col col-md-4">
      <h5>Pago</h5>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="badge bg-primary rounded-pill">Fecha</span>
          Some date
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="badge bg-primary rounded-pill">Metodo de Pago</span>
          Efectivo
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="badge bg-primary rounded-pill">Importe</span>
          96
        </li>
      </ul>
    </div>
    <ItemOrder />
    <div class="col col-md-8">
      <h5>Otra Informacion</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Numero de Recibo</strong> Pedido-0001</li>
        <li class="list-group-item">
          <div class="input-group">
            <span class="input-group-text" id="basic-addon1">Nota</span>
            <input type="text" class="form-control" aria-describedby="basic-addon1" />
          </div>
        </li>
      </ul>
    </div>
    <div class="col col-md-4">
      <table class="table table-bordered border-primary">
        <tbody>
          <tr>
            <th scope="row">Descuento</th>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>96</td>
          </tr>
          <tr>
            <th scope="row">Margen</th>
            <td>96</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
