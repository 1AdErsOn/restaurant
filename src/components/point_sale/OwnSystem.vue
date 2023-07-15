<script setup>
import ProductsList from './ProductsList.vue'
</script>

<template>
  <div class="row">
    <div class="col-9 border-end">
      <ProductsList class="mt-3" />
      <!-- <h1 class="mt-4">Simple Sidebar</h1>
      <p>
        The starting state of the menu will appear collapsed on smaller screens, and will appear
        non-collapsed on larger screens. When toggled using the button below, the menu will
        change.
      </p>
      <p>
        Make sure to keep all page content within the
        <code>#page-content-wrapper</code>
        . The top navbar is optional, and just for demonstration. Just create an element with the
        <code>#sidebarToggle</code>
        ID which will toggle the menu when clicked.
      </p> -->
    </div>
    <div class="col-3">
      <div class="list-group mt-3">
        <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small>And some small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-body-secondary">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-body-secondary">And some muted small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-body-secondary">3 days ago</small>
          </div>
          <p class="mb-1">Some placeholder content in a paragraph.</p>
          <small class="text-body-secondary">And some muted small print.</small>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
