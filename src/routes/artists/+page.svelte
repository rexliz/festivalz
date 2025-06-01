<script>
  let { data } = $props();
  let artists = data.artists;

  import ArtistCard from "$lib/components/ArtistCard.svelte";
</script>

<div class="container mt-3">
  <h1>List of all Artists</h1>

  <div class="row">
    {#each artists as artist}
      <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
        <ArtistCard {artist}></ArtistCard>
      </div>
    {/each}
  </div>
</div>

