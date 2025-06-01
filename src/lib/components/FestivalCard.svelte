<script>
  export let festival;
</script>

<a href={`/festivals/${festival._id}`} class="festival-card-link">
  <div class="festival-card">
    <div class="img-container">
      <img class="img-fluid" src={festival.poster} alt={festival.name} />
    </div>
    <div class="details">
      <div class="name artist-name">
        {festival.name}
      </div>
      <div class="artist-meta">
        <span class="location">{festival.location}</span>
        <span class="date">
          <time datetime={festival.date}>
            {new Date(festival.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </time>
        </span>
      </div>
    </div>
  </div>
</a>

<style>
  .festival-card-link {
    display: block;
    text-decoration: none;
    color: inherit;
    height: 100%;
  }

  .festival-card {
    background: #ffffff;
    border: 2px solid #e5e7eb;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: 220px;
    max-width: 300px;
    min-height: 380px;
    max-height: 420px;
    transition: box-shadow 0.2s, transform 0.2s;
    overflow: hidden;
  }

  .festival-card:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    transform: translateY(-2px) scale(1.02);
  }

  .img-container {
    width: 100%;
    aspect-ratio: 4/3;
    overflow: hidden;
    background: #f3f4f6;
    flex-shrink: 0;
    border-bottom: 1px solid #e5e7eb;
  }

  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .details {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }

  .name {
    font-size: 1.15rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #22223b;
  }

  .artist-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.97rem;
    color: #6b7280;
  }
</style>
