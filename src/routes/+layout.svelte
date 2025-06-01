<script>
  import "./styles.css";
  import { page } from '$app/stores';

  // Helper to check if a link is active
  $: currentPath = $page.url.pathname;
  const isActive = (path) => currentPath.startsWith(path);
</script>

<nav class="navbar fixed-top navbar-expand-lg navbar-primary bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Festivalz</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link {isActive('/festivals') ? 'active' : ''}" href="/festivals">Festivals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {isActive('/artists') ? 'active' : ''}" href="/artists">Artists</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3 pt-5">
  <slot />
</div>

<style>
.navbar-nav .active {
  font-weight: bold;
  color: #2f4e77;
}
</style>
