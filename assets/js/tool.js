// Tool // Calculadora

const data = [{
    id: 1,
    titulo: "Caminar",
    imagen: "https://images.unsplash.com/photo-1487956382158-bb926046304a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371",
    calorias: "1 hora Caminando quema aproximadamente 356 calorias.",
  },
  {
    id: 1,
    titulo: "Correr",
    imagen: "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372",
    calorias: "1 hora corriendo quema aproximadamente 788 calorias.",
  },
  {
    id: 1,
    titulo: "Nadar",
    imagen: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670",
    calorias: "1 hora nadando quema aproximadamente 630 calorias.",
  },
  {
    id: 1,
    titulo: "Saltar la Cuerda",
    imagen: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2380",
    calorias: "1 hora Saltando la Cuerda quema aproximadamente 898 calorias.",
  },
  {
    id: 1,
    titulo: "Bicicleta",
    imagen: "https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870",
    calorias: "1 hora de ciclismo quema aproximadamente 430 calorias.",
  },
  {
    id: 1,
    titulo: "Musculacion",
    imagen: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
    calorias: "1 hora de musculacion quema aproximadamente 225 calorias.",
  }
];

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const gender = getSelectedValue('gender')
  const age = getInputNumberValue('age')
  const weight = getInputNumberValue('weight')
  const height = getInputNumberValue('height')
  const activityLevel = getSelectedValue('activity_level')

  const tmb = Math.round(
    gender === 'female' ?
    (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) :
    (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );

  const maintenance = Math.round(tmb * Number(activityLevel))
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450

  const waterD =
    gender === 'female' ?
    ((weight * 35) / 1000) :
    ((weight * 35) / 1000)

  const idealW =
    gender === 'female' ?
    (height - 108) :
    (height - 105)

  const app = document.getElementById("app");
  for (const ejercicio of data) {
    app.innerHTML += `
      <div class="col exer col-12 col-md-6 col-lg-4">
      <div class="card" >
        <img src="${ejercicio.imagen}"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${ejercicio.titulo}</h5>
          <p class="card-text">${ejercicio.calorias}.</p>
        </div>
      </div>
    </div>
    `;
  }

  const layout = `
    <h2>Aquí esta tu Resultado:</h2>

    <div class="result-content">        
      <div class="mb">
        <p>Su metabolismo basal es de <strong>${tmb} calorias</strong>.</p>
        <p class= "more">
        La tasa metabólica basal (TMB) es la cantidad mínima de energía que necesita tu cuerpo para sobrevivir realizando las funciones básicas, tales como respirar, parpadear, filtrar la sangre, regular la temperatura del cuerpo o sintetizar hormonas.
        </p>
      </div>

      <div class="info">
        <p class= "more">
          Para manter su peso usted necesita consumir aproximadamente <strong>${maintenance} calorias</strong>.
          Para perder su peso usted necesita consumir aproximadamente <strong>${loseWeight} calorias</strong>.
          Para ganar su peso usted necesita consumir aproximadamente <strong>${gainWeight} calorias</strong>.
        </p>
      </div>

      <div class="idealw">
        <p class= "more"> Su peso ideal aproximado debería ser <strong> ${idealW} kilogramos</strong>.</p>
      </div>

      <br>
      <h5>Algunos consejos saludables:</h5> 
      <br>
      <div class="water">
        <p class= "more">
          Manetener la hidratacion, usted debería consumir al menos <strong>${waterD} litros de agua por día</strong>.
        </p>
      </div>

      <p class= "more">
        La hidratación del cuerpo es importante para transportar hidratos de carbono, proteínas, vitaminas, minerales y otros nutrientes esenciales, así como oxígeno, a las células. De esta forma, las células son capaces de producir la energía necesaria para un buen funcionamiento del cuerpo
      </p>
      <br>
      <h6>Realizar Ejercicio Diariamente</h6>
      <p class= "more">
        El nivel saludable recomendado de actividad física es de 30-50 minutos de ejercicio moderado durante al menos cinco días a la semana. 
      </p>
      <br>
    </div>
  `

  const result = document.getElementById('result')

  result.innerHTML = layout;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}