<script>
  let { data } = $props();
</script>

<div class="container mt-3">
  <h1 class="mt-5">Festival ({data.festival.name})</h1>
  <button
    type="button"
    class="btn btn-success text-white"
    style="background-color: #28a745; border-color: #28a745;"
    onclick={() => (window.location.href = "/festivals")}
  >
    <i class="bi bi-arrow-left-short"></i>
    All Festivals
  </button>
  <div class="mt-3 border rounded p-3">
    <div class="row align-items-center">
      <h2 class="text-center">Festival Details</h2>
      <div class="col-md-4">
        <img
          class="img-fluid w-75"
          src={data.festival.poster}
          alt="Festival Poster"
        />
      </div>
      <div class="col-md-8">
        <p>Name: {data.festival.name}</p>
        <p>
          Date:
          <time datetime={data.festival.date}>
            {new Date(data.festival.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </time>
        </p>
        <p>Location: {data.festival.location}</p>
        <p>Description: {data.festival.description}</p>
        <div class="mt-3">
          <form method="POST" action="?/delete">
            <button
              type="Button"
              class="btn btn-secondary"
              onclick={() =>
                (window.location.href = "/festivals/edit/" + data.festival._id)}
            >
              <i class="bi bi-pencil"></i>
              Edit
            </button>
            <input type="hidden" name="id" value={data.festival._id} />
            <button class="btn btn-danger">
              <i class="bi bi-trash3"></i>
              Delete Festival
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5 border rounded p-3">
    <h2>Lineup</h2>
    <p>Artists: {data.artists.length}</p>
    <table class="table table-striped table-bordered mt-3">
      <thead>
        <tr>
          <th>Artist</th>
          <th>Stage</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {#each data.artists as artist}
          <tr>
            <td><a href={`/artists/${artist._id}`}>{artist.name}</a></td>
            <!-- <td>{artist.name}</td> -->
            <td>{artist.stage}</td>
            <td>{artist.lineupTime}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="mt-3">
      <button
        type="Button"
        class="btn btn-secondary"
        onclick={() =>
          (window.location.href = `/festivals/${data.festival._id}/addArtist`)}
      >
        <i class="bi bi-plus"></i>
        Add artist</button
      >
    </div>
  </div>
</div>
