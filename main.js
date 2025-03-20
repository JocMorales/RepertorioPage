// Función para renderizar las canciones
function renderSongs(filteredSongs) {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";

  filteredSongs.forEach((song) => {
    const songCard = document.createElement("div");
    songCard.className = "song-card";
    songCard.innerHTML = `
      <h3 class="text-xl font-semibold text-gray-700">${song.cancion}</h3>
      <p class="text-gray-600"><strong>Artista:</strong> ${song.artista}</p>
      <p class="text-gray-600"><strong>Álbum:</strong> ${song.album}</p>
      <p class="text-gray-600"><strong>Nota:</strong> ${song.nota}</p>
      <p class="text-gray-600"><strong>Tipo:</strong> ${song.tipo}</p>

      <div class="hidden-content m-4">
          <iframe style="border-radius:12px" src="${song.spot}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          <a href="https://acordes.lacuerda.net/new_wine/yeshua_hamashiach.shtml" target="_blank" class="block m-5 custom-button inline-block">Buscar Notas</a>
      </div>  
      `;

    //funcion para mostrar targeta de spotify
    songCard.addEventListener("click", () => {
      const hiddenContent = songCard.querySelector(".hidden-content");
      hiddenContent.style.display = hiddenContent.style.display === "none" ? "block" : "none";
    });
    
    songList.appendChild(songCard);
  });
}


// Función para filtrar las canciones
function filterSongs(songs) {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedNote = document.getElementById("noteFilter").value;
  const selectedType = document.getElementById("typeFilter").value;

  const filteredSongs = songs.filter(
    (song) =>
      (song.cancion.toLowerCase().includes(searchTerm) ||
      song.artista.toLowerCase().includes(searchTerm)) &&
      (selectedNote === "" || song.nota === selectedNote) &&
      (selectedType === "" || song.tipo === selectedType)
  );
  renderSongs(filteredSongs);
}

// Cargar el archivo JSON y mostrar las canciones
fetch("data.json")
  .then((response) => response.json())
  .then((songs) => {
    // Mostrar todas las canciones al inicio
    renderSongs(songs);

    // Escuchar cambios en la barra de búsqueda y los filtros
    document.getElementById("searchInput").addEventListener("input", () => filterSongs(songs));
    document.getElementById("noteFilter").addEventListener("change", () => filterSongs(songs));
    document.getElementById("typeFilter").addEventListener("change", () => filterSongs(songs));
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });


    
    // Obtener el botón
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Mostrar u ocultar el botón según la posición del scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollToTopButton.classList.remove("hidden");
      } else {
        scrollToTopButton.classList.add("hidden");
      }
    });

    // Función para hacer scroll al principio de la página
    scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Scroll suave
      });
    });


    //loader

    window.addEventListener("load", () => {
      document.getElementById("loaderContainer").style.display = "none";
      // Mostrar el contenido de la página
      document.getElementById("content").style.display = "block";
    });
