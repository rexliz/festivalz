<script>
  import ArtistCard from "$lib/components/ArtistCard.svelte";

  let { data } = $props();
  let artists = $state(data.artists);
</script>

<div class="container mt-3">
  <h1>All Artists</h1>

  <div class="row">
    {#each artists as artist}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <ArtistCard {artist}></ArtistCard>
      </div>
    {/each}
  </div>
</div>

