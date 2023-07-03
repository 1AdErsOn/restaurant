<script setup>
import System from './System.vue'
</script>

<template>
  <div class="d-flex" id="wrapper">
    <!-- Sidebar-->
    <div class="border-end">
      <div class="h5 border-bottom">Sistema de Venta</div>
      <div class="list-group list-group-flush">
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Dashboard</a
        >
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Shortcuts</a
        >
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Overview</a
        >
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Events</a
        >
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Profile</a
        >
        <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!"
          >Status</a
        >
      </div>
    </div>
    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav class="navbar navbar-expand-lg navbar-info border-bottom">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button type="button" class="btn btn-outline-danger">Danger</button>
        </div>
      </nav>
      <!-- Page content-->
      <div class="container-fluid">
        <System />
      </div>
    </div>
  </div>
</template>
