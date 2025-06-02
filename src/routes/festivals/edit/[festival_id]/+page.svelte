<script>
  let { data } = $props();
</script>

  <h1>Edit: {data.festival.name}</h1>
  <form method="POST" action="?/edit">
    <div class="mb-3">
      <label for="" class="form-label">Name*</label>
      <input name="name" class="form-control" type="text" bind:value={data.festival.name} required />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Location*</label>
      <input name="location" class="form-control" type="text" bind:value={data.festival.location} required/>
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Date*</label>
      <input name="date" class="form-control" type="date" bind:value={data.festival.date} required/>
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Description</label>
      <input name="description" class="form-control" type="text" bind:value={data.festival.description}/>
    </div>    

    <button type="submit" class="btn btn-primary"><i class="bi bi-floppy"></i> Save </button>
    <button type="button" class="btn btn-secondary" onclick={() => window.history.back()}>
      <i class="bi bi-x-circle"></i> Cancel</button>
  </form>