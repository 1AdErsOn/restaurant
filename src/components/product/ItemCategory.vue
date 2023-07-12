<script setup>
import { ref } from 'vue'

const edit = ref(false)
const active = ref(true)
const data = ref('')
</script>

<template>
  <div class="items d-flex flex-column">
    <div v-if="!edit" class="input-group mb-1">
      <div class="input-group-text">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :checked="active"
            @change.prevent=""
          />
        </div>
        <span class="fw-bold fs-6 d-flex align-items-center">
          <slot></slot>
        </span>
      </div>
      <button type="button" class="btn btn-outline-primary" @click="edit = !edit">E</button>
      <button type="button" class="btn btn-outline-warning" @click.prevent="">A</button>
    </div>
    <div v-else class="input-group mb-1">
      <input v-model="data" type="text" class="form-control fw-bold" />
      <button class="btn btn-outline-success" type="button" @click="edit = !edit">Save</button>
    </div>
  </div>
</template>
