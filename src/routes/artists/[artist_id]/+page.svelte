<script>
  let { data } = $props();
</script>

<h1>Artist {data.artist.name}</h1>
<button type="button" class="btn btn-outline-secondary" style="" onclick={() => (window.location.href = "/artists")}>
  <i class="bi bi-arrow-left-short"></i> All Artists </button>
<div class="mt-3 border rounded p-3">
  <div class="row align-items-center">
    <div class="col-md-4">
      <img class="img-fluid w-75" src={data.artist.picture} alt={data.artist.name}/>
    </div>
    <div class="col-md-8">
      <p>Name: {data.artist.name}</p>
      <p>Genre: {data.artist.genre}</p>
      <p>Origin: {data.artist.origin}</p>
      <p>Biography: {data.artist.biography}</p>
    </div>
  </div>
</div>

<div class="mt-5 border rounded p-3">
  <h2>Festivals</h2>
  <table class="table table-striped table-bordered mt-3">
    <thead>
      <tr>
        <th style="width: 50%;">Festival</th>
        <th style="width: 50%;">Date</th>
      </tr>
    </thead>
    <tbody>
      {#each data.festivals as festival}
        <tr>
          <td style="width: 50%;"><a href={`/festivals/${festival._id}`}>{festival.name}</a></td>
          <td style="width: 50%;">
            <time datetime={festival.date}>
              {new Date(festival.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </time>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
