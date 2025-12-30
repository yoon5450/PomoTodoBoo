<script setup lang="ts"></script>

<template>
  <div class="main-header">
    <div class="logo">PomoTodoBoo</div>
    <nav class="menu">
      <ul class="header-links">
        <li><RouterLink to="/">TODOS</RouterLink></li>
        <li><RouterLink to="/stat">STAT</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.main-header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.logo {
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}

.menu {
  position: absolute;
  right: 20px;
}

.header-links {
  display: flex;
  text-decoration: none;
  list-style: none;
}
</style>
