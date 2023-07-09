<template>
  <table class="table table-hover">
    <thead>
      <slot name="head"> </slot>
    </thead>
    <tbody class="table-group-divider">
      <slot name="body"> </slot>
    </tbody>
  </table>
</template>
