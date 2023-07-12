<script setup>
import { ref } from 'vue'
import OwnCard from '../OwnCard.vue'
import OwnCategory from './OwnCategory.vue'

const type = ref('')
const ratio = ref(false)
const cant = ref(false)
const category = ref(false)
const typeMode = ref('consu')
const handleChange = () => {
  if (type.value !== '') {
    typeMode.value = type.value
  }
}
</script>

<template>
  <div class="col-xl-4">
    <OwnCard v-if="!category">
      <template #head> Crear Nuevo Producto </template>
      <template #body>
        <!-- Form Group (Name)-->
        <div class="mb-3">
          <label class="small mb-1" for="addName">Nombre:</label>
          <input class="form-control" id="addName" type="text" placeholder="Enter Product Name" />
        </div>
        <!-- Form Group (Supplier)-->
        <div class="mb-3">
          <label class="small mb-1">Proveedor</label>
          <select class="form-select">
            <option value="">Select a Category:</option>
            <option value="1">Rico Pollo</option>
            <option value="2">Inca Cola</option>
          </select>
        </div>
        <!-- Form Group (Type)-->
        <div class="mb-3">
          <label class="small mb-1" for="addType">Tipo:</label>
          <select v-model="type" class="form-select" id="addType" @change="handleChange">
            <option value="">Seleciona un Tipo</option>
            <option value="consu">Consumible</option>
            <option value="alma">Almacenable</option>
            <option value="pollo">Pollo</option>
          </select>
        </div>
        <!-- Form Group (Pollo)-->
        <div class="mb-3" v-if="typeMode == 'pollo'">
          <div class="form-check form-switch">
            <input
              v-model="ratio"
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="seeRatio"
            />
            <label class="form-check-label" for="seeRatio">Proporcion:</label>
          </div>
          <!-- Form Group (Proporcion)-->
          <div v-show="ratio">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="ratio"
                id="inlineRadio1"
                value="8"
              />
              <label class="form-check-label" for="inlineRadio1">1 Entero</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="ratio"
                id="inlineRadio2"
                value="4"
              />
              <label class="form-check-label" for="inlineRadio2">1/2</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="ratio"
                id="inlineRadio3"
                value="2"
                checked
              />
              <label class="form-check-label" for="inlineRadio3">1/4</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="ratio"
                id="inlineRadio4"
                value="1"
              />
              <label class="form-check-label" for="inlineRadio4">1/8</label>
            </div>
          </div>
        </div>
        <!-- Form Group (Almacenable)-->
        <div class="mb-3" v-else-if="typeMode == 'alma'">
          <div class="form-check">
            <input v-model="cant" type="checkbox" class="form-check-input" id="seeCant" />
            <label class="form-check-label" for="seeCant">Cantidad</label>
          </div>
          <!-- Form Group (Cantidad)-->
          <div class="mb-3" v-show="cant">
            <label class="small mb-1" for="addCant">Cantidad:</label>
            <input
              class="form-control"
              id="addCant"
              type="number"
              placeholder="Enter Product Quantity"
            />
          </div>
        </div>
        <!-- Form Group (Precio)-->
        <div class="mb-3">
          <label class="small mb-1" for="addPrice">Precio:</label>
          <input
            class="form-control"
            id="addPrice"
            type="number"
            placeholder="Enter Product Price"
          />
        </div>
        <!-- Form Group (Type)-->
        <div class="mb-3">
          <label class="small mb-1">Categoria:</label>
          <select class="form-select">
            <option value="">Select a Category:</option>
            <option value="consu">Platos</option>
            <option value="alma">Bebidas</option>
            <option value="servi">Extras</option>
          </select>
        </div>
        <!-- Submit button-->
        <button class="btn btn-outline-primary" type="button">Crear Producto</button>
      </template>
    </OwnCard>
    <OwnCategory v-else />
  </div>
</template>
