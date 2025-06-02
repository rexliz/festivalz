<script>
  import FestivalCard from "$lib/components/FestivalCard.svelte";

  let { data } = $props();
  let festivals = $state(data.festivals);
  let isChecked = $state(false);

  function handleToggle(event) {
    isChecked = !isChecked;

    if (isChecked) {
      festivals = festivals.filter((festival) => new Date(festival.date) > new Date());
    } else {
      festivals = data.festivals; // Reset to all festivals
    }
  }
</script>

<div class="container mt-3">
  <h1>All Festivals</h1>

  <div class="d-flex justify-content-between">
    <div class="mb-2">
      <button type="Button" class="btn btn-secondary" onclick={() => (window.location.href = "/festivals/create")}> 
        <i class="bi bi-plus"></i> Create Festival</button>
    </div>

    <div class="mb-2">
      <input
        id="show-upcoming"
        type="checkbox"
        bind:checked={isChecked}
        oninput={handleToggle}
      /> <!--sobald auf die Box geklick wird, wird die Funktion handleToggle aufgerufen-->
      <label for="show-upcoming">Show Upcoming Festivals</label>
    </div>
  </div>

  <div class="row">
    {#each festivals as festival}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <FestivalCard {festival}></FestivalCard>
      </div>
    {/each}
  </div>
</div>

<style>
  h1 {
    text-align: center;
  }
</style>
