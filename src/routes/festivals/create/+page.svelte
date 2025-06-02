<script>
  let { form } = $props();
</script>

<h1>Create a new festival</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name*</label>
    <input name="name" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Location*</label>
    <input name="location" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Date*</label>
    <input name="date" class="form-control" type="date" required />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Description</label>
    <textarea name="description" class="form-control" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary"><i class="bi bi-floppy"></i> Create Festival </button>
  <button type="button" class="btn btn-secondary" onclick={() => window.history.back()}>
  <i class="bi bi-x-circle"></i> Cancel</button>
</form>

{#if form?.success}
  <p>Festival created</p>
{/if}
