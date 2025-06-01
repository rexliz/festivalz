<script>
  export let artist;
</script>

<a href={`/artists/${artist._id}`} class="artist-card-link">
  <div class="artist-card">
    <div class="artist-img-container">
      <img src={artist.picture} alt={artist.name} class="artist-img" />
      <div class="artist-name-overlay">
        {artist.name}
      </div>
    </div>
  </div>
</a>

<style>
  /* Artist Card Styles */
  .artist-card-link {
    text-decoration: none;
    color: inherit;
  }

  .artist-card {
    border-radius: 1rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition:
      transform 0.15s,
      box-shadow 0.15s;
    background: #fff;
    cursor: pointer;
  }

  .artist-card:hover {
    transform: translateY(-4px) scale(1.03);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
  }

  .artist-img-container {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .artist-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .artist-name-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    color: #fff;
    padding: 0.75rem 1rem;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: left;
  }
</style>
