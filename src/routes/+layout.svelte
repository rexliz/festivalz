<script>
  import "./styles.css";
  import { page } from '$app/state';

  let { children } = $props();

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
          <a class="nav-link { page.url.pathname.startsWith('/festivals') ? 'active' : '' }" href="/festivals">Festivals</a> 
          <!--nur falls class active ist wird, wird style verwendet-->
        </li>
        <li class="nav-item">
          <a class="nav-link { page.url.pathname.startsWith('/artists') ? 'active' : '' }" href="/artists">Artists</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3 pt-5">
  {@render children()}
</div>

<style>
.navbar-nav .active {
  font-weight: bold;
  color: #2f4e77;
}
</style>
