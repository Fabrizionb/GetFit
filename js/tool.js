// Tool // Calculadora

const data = [{
    id: 0,
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
    id: 2,
    titulo: "Nadar",
    imagen: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670",
    calorias: "1 hora nadando quema aproximadamente 630 calorias.",
  },
  {
    id: 3,
    titulo: "Saltar la Cuerda",
    imagen: "https://images.unsplash.com/photo-1514994667787-b48ca37155f0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2380",
    calorias: "1 hora Saltando la Cuerda quema aproximadamente 898 calorias.",
  },
  {
    id: 4,
    titulo: "Bicicleta",
    imagen: "https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870",
    calorias: "1 hora de ciclismo quema aproximadamente 430 calorias.",
  },
  {
    id: 5,
    titulo: "Musculacion",
    imagen: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
    calorias: "1 hora de musculacion quema aproximadamente 225 calorias.",
  }
];

const basal = "La tasa metabólica basal (TMB) es la cantidad mínima de energía que necesita tu cuerpo para sobrevivir realizando las funciones básicas, tales como respirar, parpadear, filtrar la sangre, regular la temperatura del cuerpo o sintetizar hormonas."

const hidratacion = "La hidratación del cuerpo es importante para transportar hidratos de carbono, proteínas, vitaminas, minerales y otros nutrientes esenciales, así como oxígeno, a las células. De esta forma, las células son capaces de producir la energía necesaria para un buen funcionamiento del cuerpo"


const tablacorporal = `Nivel de peso:</br>
Menos de 18.5           Bajo peso</br>
Entre 18.5 – 24.9      Normal</br>
Entre 25.0 – 29.9      Sobrepeso</br>
Entre 30.0 o más      Obesidad</br>`

const corporal = `<p>El índice de masa corporal (IMC) es un número que se calcula con base en el peso y la estatura de la persona.</br>
Para la mayoría de las personas, el IMC es un indicador confiable de la gordura y se usa para identificar las categorías de peso que pueden llevar a problemas de salud.</p>`

const sueño = `
<ul class="result">Dormir lo suficiente puede traerte muchos beneficios. Puede ayudarte a:
<li class="result">Enfermarte con menos frecuencia.</li>
<li class="result">Mantenerte en un peso saludable.</li>
<li class="result">Reducir el riesgo de tener problemas graves de salud, como diabetes y enfermedades del corazón.</li>
<li class="result">Disminuir el estrés y mejorar el estado de ánimo.</li>
<li class="result">Pensar con más claridad y desempeñarte mejor en el trabajo y en los estudios.</li>
<li class="result">Llevarte mejor con los demás.</li>
<li class="result">Tomar mejores decisiones y evitar lesiones (por ejemplo, cada año suceden miles de accidentes causados por conductores somnolientos).</li>
</ul>
`
const ejericio =
  `
<ul class="result">Beneficios de practicar ejercicio todos los días
<li class="result">Controlar el peso.</li>
<li class="result">Mejorar el estado de ánimo, aumentar la autoestima y energía.</li>
<li class="result">Reducir el riesgo de padecer enfermedades cardiovasculares y aliviar los síntomas de las enfermedades crónicas.</li>
<li class="result">Reducir el riesgo de cáncer.</li>
<li class="result">Tener músculos más fuertes.</li>
<li class="result">Mejorar el estado de la piel y prevenir el envejecimiento prematuro.</li>
<li class="result">Oxigenar las arterias y aumentar la capacidad pulmonar, lo que a su vez reduce la fatiga.</li>
</ul>
`

const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function SweetTrigger() {
  
  let timerInterval
  Swal.fire({
      title: 'Calculando  ',
      imageUrl: '../images/avocado-workout.gif',

      imageAlt: 'Custom image',
      html: 'Se cerrara automaticamente en <b></b> milisegundos y mostrará los resultados.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
          }, 100)
      },
      willClose: () => {
          clearInterval(timerInterval)
      }
  }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
  });

}

function handleSubmit(event) {
  event.preventDefault();
  SweetTrigger()
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

  // Lose Gain Weight Calculator
  const maintenance = Math.round(tmb * Number(activityLevel))
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450


  // Hidratation Calculator
  const waterD =
    gender === 'female' ?
    ((weight * 35) / 1000) :
    ((weight * 35) / 1000)

  // Ideal Weaight Calculator
  const idealW =
    gender === 'female' ?
    (height - 108) :
    (height - 105)

  // Exercise Cal burn 
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

  //Imc Calculator

  function imc() {
    normalWeight = getInputNumberValue('weight')
    normalHeight = getInputNumberValue('height')

    normalHeight = normalHeight / 100

    normalHeight = Math.pow(normalHeight, 2)

    total = normalWeight / normalHeight
    totalshow = total.toFixed(2)
    totalText = ``

    if (total <= 18) {
      totalText =
        `
    <p>Su indice de Masa Corporal es: <strong>${totalshow}</strong></br>
    Usted tiene Bajo Peso.</br>
    ${corporal}</br>
    ${tablacorporal}</br></p>
    `
    } else if (total > 18 && total <= 24) {
      totalText =
        `
    <p>Su indice de Masa Corporal es: <strong>${totalshow}</strong></br>
    <div class="alert alert-success" role="alert">
    Usted tiene Peso Normal.
    </div></br>
    </br>
    ${corporal}</br>
    ${tablacorporal}</br></p>
    `
    } else if (total >= 25 && total <= 29) {
      totalText =
        `
    <p>Su indice de Masa Corporal es: <strong>${totalshow}</strong></br>
    <div class="alert alert-danger" role="alert">
    Usted tiene Sobrepeso.
    </div></br>
    </br>
    ${corporal}</br>
    ${tablacorporal}</br></p>
    `
    } else if (total > 30) {
      totalText =
        `
    <p>Su indice de Masa Corporal es: <strong>${totalshow}</strong></br>
    <div class="alert alert-danger" role="alert">
    Usted tiene Obesidad.
    </div></br>
    </br>
    ${corporal}</br>
    ${tablacorporal}</br></p>
    `
    }
  }
  imc()


  //Sleep Calculator

  function sleep() {
    const ageSleep = getInputNumberValue('age')
    amount = 0
    sleepText =
      `
  <p>Usted debería tener aproximadamente entre horas de sueño al día.</p>
  `
    if (ageSleep < 1) {
      amount = "12 a 16"
      sleepText =
        `
  <p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
  `
    } else if (ageSleep >= 1 && age <= 2) {
      amount = "11 a 14"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else if (ageSleep >= 3 && age <= 5) {
      amount = "10 a 13"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else if (ageSleep >= 6 && age <= 12) {
      amount = "6 a 12"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else if (ageSleep >= 13 && age <= 18) {
      amount = "13 a 18"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else if (ageSleep >= 19 && age <= 64) {
      amount = "7 a 9"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else if (ageSleep > 65) {
      amount = "7 a 8"
      sleepText =
        `
<p>Usted debería tener aproximadamente entre ${amount} horas de sueño al día.</p>
`
    } else {

    }
  }
  sleep()


  // Results Layout
  const layout = `
  <h2 class="text-center">Aquí esta tu Resultado:</h2>

  <div class="result-content mx-auto">  
    <div class="imc more">${totalText}     
    
      <p>Su metabolismo basal es de <strong>${tmb} calorias</strong>.</p>
      <p class= "more">
      </p>
      ${basal}
    </div>
    <br>
    <div class="info">
      <p class= "more">
        Para manter su peso usted necesita consumir aproximadamente <strong>${maintenance} calorias</strong>.<br>
        Para perder su peso usted necesita consumir aproximadamente <strong>${loseWeight} calorias</strong>.<br>
        Para ganar su peso usted necesita consumir aproximadamente <strong>${gainWeight} calorias</strong>.<br>
        Su peso ideal aproximado debería ser <strong> ${idealW} kilogramos</strong>.
      </p>
    </div>

    <br>
    <div class="info">
    <h6>Algunos consejos saludables:</h6> 
    <br>
    <div class="water">
      <h6>Manetener la hidratacion</h6>
      <p class= "more">
        Usted debería consumir al menos <strong>${waterD} litros de agua por día</strong>.
      </p>
      <p  class= "more">${hidratacion}</p>
    </div>
    <br>
     <div class="sleep">
      <h6>Descansar correctamente</h6>
      <p  class= "more">${sleepText}</p>
      <p  class= "more">${sueño}</p>
    </div>
    <br>
    <div class="exercise">
      <h6>Realizar Ejercicio Diariamente</h6>
      <p class= "more">
      El nivel saludable recomendado de actividad física es de 30-50 minutos de ejercicio moderado durante al menos cinco días a la semana. 
      </p>
      <p  class= "more">${ejericio}</p>
      <h6>Debajo encontraras algunas actividades con su gasto calorico aproximado por hora.</h6>
    </div>
    <br>
  </div>
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