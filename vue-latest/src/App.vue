<template>
  <nav>
    <RouterLink to="/">Counter</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
    <RouterLink to="/react-clone">React</RouterLink>
    <RouterLink to="/meli-clone">Store</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
