
const formulario = document.getElementById("formPoke");

formulario.addEventListener("submit", async function(evento) {

    evento.preventDefault();

    const id = document.getElementById("idPoke").value;

    const msg = document.getElementById("msg");
    const resultado = document.getElementById("resultado");

    msg.textContent = "Buscando Pokémon...";
    resultado.style.display = "none";

    try {

        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado!");
        }

        const pokemon = await resposta.json();

        // 1 - Nome
        document.getElementById("nomePokemon").textContent =
            pokemon.name;

        // 2 - Imagem
        document.getElementById("imgPoke").src =
            pokemon.sprites.front_default;

        // 3 - Experiência base
        document.getElementById("basePoke").textContent =
            pokemon.base_experience;

        // 4 - Altura
        document.getElementById("alturaPoke").textContent =
            (pokemon.height / 10) + " metros";

        // 5 - Peso
        document.getElementById("pesoPoke").textContent =
            (pokemon.weight / 10) + " kg";

        // ID
        document.getElementById("idPokemon").textContent =
            pokemon.id;

        msg.textContent = "";

        resultado.style.display = "block";

    } catch (erro) {

        msg.textContent = "❌ Pokémon não encontrado! Tente outro ID.";

        resultado.style.display = "none";

    }

});
