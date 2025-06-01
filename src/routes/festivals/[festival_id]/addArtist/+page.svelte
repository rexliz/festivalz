<script>
    let { data } = $props();
    
</script>
  <h1>Add artist to {data.festival.name}</h1>

  <form method="POST" action="?/addArtist">

    <div class="mb-3">
      <label for="festivalId" class="form-label">FestivalId</label>
      <input name="festivalId" class="form-control" type="text" bind:value={data.festival._id} readonly />
    </div>
    <div class="mb-3">
      <label for="stage" class="form-label">Stage*</label>
      <input name="stage" class="form-control" type="text" required />
    </div>
    <div class="mb-3">
      <label for="time" class="form-label">Time*</label>
      <input name="time" class="form-control" type="time" required />
    </div>

    <div class="mb-3">
      <label for="artist" class="form-label">Artist*</label>
      <select name="artist" class="form-select" required>
        {#each data.artists as artist}
          <option name="artistId" value={artist._id}>{artist.name}</option>
        {/each}
      </select>
    </div>

    <button type="submit" class="btn btn-primary"> Add Artist to Festival </button>
    <button type="button" class="btn btn-secondary" onclick={() => window.history.back()}>Cancel</button>

  </form>