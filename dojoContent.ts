export const DOJO_HTML_CONTENT = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Dojo del Prompting 🥋</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Bungee&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Sans', sans-serif;
            background-color: #111827; /* Gris oscuro de Tailwind */
        }
        .dojo-header {
            font-family: 'Bungee', cursive;
        }
        .challenge-card {
            background-color: #1F2937; /* Gris un poco más claro */
            border-left-width: 8px;
            transition: all 0.3s ease-in-out;
        }
        .challenge-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }
        .belt-white { border-color: #E5E7EB; }
        .belt-blue { border-color: #3B82F6; }
        .belt-black { border-color: #EF4444; }

        textarea {
            background-color: #374151;
            color: #F9FAFB;
            border: 2px solid #4B5563;
        }
        textarea:focus {
            border-color: #60A5FA;
            outline: none;
        }
        .sensei-feedback {
            background-color: #111827;
            border: 1px solid #4B5563;
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            display: none; /* Oculto por defecto */
        }
        .ki-points {
            font-size: 1.5rem;
            font-weight: bold;
            color: #34D399; /* Verde esmeralda */
            text-shadow: 0 0 10px #34D399;
        }
        .btn-eval {
            transition: background-color 0.3s, transform 0.2s;
        }
        .btn-eval:hover {
            transform: scale(1.05);
        }
        .btn-eval:disabled {
            cursor: not-allowed;
            opacity: 0.6;
        }
        #graduation-card {
             background: linear-gradient(145deg, #1F2937, #374151);
        }
    </style>
</head>
<body class="text-gray-200">

    <div class="container mx-auto p-4 md:p-8 max-w-4xl">

        <!-- INTRODUCCIÓN AL DOJO -->
        <header class="text-center mb-12">
            <h1 class="dojo-header text-4xl md:text-6xl text-white mb-4">El Dojo del Prompting 🥋</h1>
            <p class="text-lg text-gray-400 max-w-3xl mx-auto">
                ¡Bienvenido, aspirante a Maestro del Prompt! Aquí no leerás teoría; la pondrás en práctica. Tu oponente es la ambigüedad. Tu arma es la precisión. Tu aliado es Gemini-Sensei.
            </p>
        </header>

        <!-- DESAFÍO 1: CINTURÓN BLANCO -->
        <div id="challenge-1" class="challenge-card belt-white rounded-lg p-6 mb-8 shadow-lg">
            <h2 class="text-2xl font-bold text-white mb-2">Cinturón Blanco: El Camino del Principiante</h2>
            <p class="text-blue-400 font-semibold mb-4">Puntos de Ki a ganar: 100</p>
            <h3 class="text-xl font-bold text-gray-300 mb-2">Desafío 1: La Petición Clara</h3>
            <p class="mb-4 text-gray-400"><strong>Tu Misión:</strong> Eres un organizador de eventos. Corrige el prompt "ideas para fiesta" para que sea específico para una fiesta de cumpleaños infantil, usando los 4 pilares: Persona, Tarea, Contexto y Formato.</p>
            <div class="prompt-area">
                <label for="prompt-1" class="block mb-2 font-semibold text-gray-300">Caja de Prompt del Alumno:</label>
                <textarea id="prompt-1" rows="5" class="w-full p-3 rounded-md focus:ring-2 focus:ring-blue-500" placeholder="Escribe tu prompt aquí..."></textarea>
                <button onclick="evaluarCinturonBlanco()" class="btn-eval mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Evaluar mi Técnica</button>
            </div>
            <div id="feedback-1" class="sensei-feedback"></div>
        </div>

        <!-- DESAFÍO 2: CINTURÓN AZUL -->
        <div id="challenge-2" class="challenge-card belt-blue rounded-lg p-6 mb-8 shadow-lg">
            <h2 class="text-2xl font-bold text-white mb-2">Cinturón Azul: El Arte del Contexto</h2>
            <p class="text-green-400 font-semibold mb-4">Puntos de Ki a ganar: 250</p>
            <h3 class="text-xl font-bold text-gray-300 mb-2">Desafío 2: El Eco del Estilo</h3>
            <p class="mb-4 text-gray-400"><strong>Tu Misión:</strong> Eres un Community Manager. Usa la técnica "Few-Shot Prompting" (dar ejemplos) para que Gemini genere 3 tuits para un museo de ciencia con un tono curioso, divertido y educativo.</p>
            <div class="prompt-area">
                <label for="prompt-2" class="block mb-2 font-semibold text-gray-300">Caja de Prompt del Alumno:</label>
                <textarea id="prompt-2" rows="8" class="w-full p-3 rounded-md focus:ring-2 focus:ring-green-500" placeholder="Escribe tu prompt aquí. ¡Recuerda darle ejemplos a Gemini!"></textarea>
                <button onclick="evaluarCinturonAzul()" class="btn-eval mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">Mostrar mi Estilo</button>
            </div>
            <div id="feedback-2" class="sensei-feedback"></div>
        </div>

        <!-- DESAFÍO 3: CINTURÓN NEGRO -->
        <div id="challenge-3" class="challenge-card belt-black rounded-lg p-6 mb-8 shadow-lg">
            <h2 class="text-2xl font-bold text-white mb-2">Cinturón Negro: La Mente Multimodal</h2>
            <p class="text-red-400 font-semibold mb-4">Puntos de Ki a ganar: 500</p>
            <h3 class="text-xl font-bold text-gray-300 mb-2">Desafío 3: El Veredicto del Analista</h3>
            <p class="mb-4 text-gray-400"><strong>Tu Misión:</strong> Eres una estratega de marketing. Analiza el gráfico de ventas y pide a Gemini un análisis estratégico completo y recomendaciones, dividiendo tu petición en fases.</p>
             <div class="my-4 p-4 bg-gray-900 rounded-lg text-center">
                <p class="mb-2 text-gray-400">[Simulación de carga de imagen]</p>
                <img src="https://placehold.co/600x300/1F2937/FFFFFF?text=Gr%C3%A1fico+de+Ventas" alt="Gráfico de ventas de ejemplo" class="mx-auto rounded-md shadow-md">
                 <p class="text-xs text-gray-500 mt-2">Café (azul), Té (verde), Chocolate (naranja) por trimestres.</p>
            </div>
            <div class="prompt-area">
                <label for="prompt-3" class="block mb-2 font-semibold text-gray-300">Caja de Prompt Multimodal:</label>
                <textarea id="prompt-3" rows="8" class="w-full p-3 rounded-md focus:ring-2 focus:ring-red-500" placeholder="Escribe tu prompt multimodal aquí..."></textarea>
                <button onclick="evaluarCinturonNegro()" class="btn-eval mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">Desatar Análisis Estratégico</button>
            </div>
            <div id="feedback-3" class="sensei-feedback"></div>
        </div>
        
        <!-- CEREMONIA DE GRADUACIÓN -->
        <div id="graduation-card" class="text-center p-8 rounded-lg shadow-2xl">
            <h2 class="text-3xl font-bold text-white mb-4">Ceremonia de Graduación del Dojo</h2>
            <p class="text-xl text-gray-300">Tu Ki Total Acumulado:</p>
            <p id="total-ki" class="text-7xl font-bold text-yellow-400 my-4" style="text-shadow: 0 0 15px #FBBF24;">0</p>
            <div id="graduation-rank" class="mt-4 text-2xl text-white font-bold">
                Aún no has comenzado tu viaje...
            </div>
        </div>
    </div>

    <script>
        let totalKi = 0;

        function actualizarKiTotal(puntos) {
            totalKi += puntos;
            const totalKiElement = document.getElementById('total-ki');
            // Animación de conteo
            let start = parseInt(totalKiElement.innerText);
            let end = totalKi;
            if (start === end) return;
            let duration = 1000;
            let range = end - start;
            let current = start;
            let increment = end > start ? 1 : -1;
            let stepTime = Math.abs(Math.floor(duration / range));
            let timer = setInterval(() => {
                current += increment;
                totalKiElement.innerText = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
            
            actualizarRango();
        }

        function actualizarRango() {
            const rankElement = document.getElementById('graduation-rank');
            if (totalKi >= 850) {
                rankElement.innerHTML = '<span class="text-red-400">¡Extraordinario, Maestro de Dojo! (Cinturón Negro)</span><p class="text-lg font-normal text-gray-300 mt-2">Combinas modalidades y estrategias con la fluidez de un verdadero experto.</p>';
            } else if (totalKi >= 350) {
                 rankElement.innerHTML = '<span class="text-blue-400">¡Impresionante, Cinturón Azul!</span><p class="text-lg font-normal text-gray-300 mt-2">Entiendes que el contexto y el ejemplo son poder.</p>';
            } else if (totalKi > 0) {
                rankElement.innerHTML = '<span class="text-gray-300">¡Felicidades, Cinturón Blanco!</span><p class="text-lg font-normal text-gray-300 mt-2">Has dado tus primeros pasos firmes en el camino del prompting.</p>';
            } else {
                 rankElement.innerHTML = 'Aún no has comenzado tu viaje...';
            }
        }

        function evaluarCinturonBlanco() {
            const prompt = document.getElementById('prompt-1').value.toLowerCase();
            const feedbackEl = document.getElementById('feedback-1');
            let pilares = 0;
            let feedbackHTML = '<strong>Feedback del Sensei:</strong> ';
            let kiPoints = 0;

            // 1. Persona
            if (prompt.includes('experto') || prompt.includes('organizador') || prompt.includes('actúa como')) {
                pilares++;
            }
            // 2. Tarea
            if (prompt.includes('dame') || prompt.includes('genera') || prompt.includes('ideas') || prompt.includes('lista')) {
                pilares++;
            }
            // 3. Contexto
            if (prompt.includes('niño') || prompt.includes('infantil') || prompt.includes('7 años') || prompt.includes('dinosaurios')) {
                pilares++;
            }
            // 4. Formato
            if (prompt.includes('lista') || prompt.includes('numerada') || prompt.includes('tabla') || prompt.includes('formato')) {
                pilares++;
            }
            
            if (pilares === 4) {
                kiPoints = 100;
                feedbackHTML += \`¡Misión Cumplida! Has dominado los 4 pilares. Tu prompt es claro, conciso y poderoso. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else if (pilares === 3) {
                kiPoints = 50;
                feedbackHTML += \`¡Casi perfecto! Has usado \${pilares} de 4 pilares. Revisa cuál te falta para la maestría total. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else if (pilares >= 1) {
                kiPoints = (pilares === 2) ? 25 : 10;
                feedbackHTML += \`Buen comienzo. Has usado \${pilares} de 4 pilares. Recuerda, un herrero no solo pide 'metal', pide 'acero de Damasco'. Sé más específico. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else {
                 kiPoints = 0;
                 feedbackHTML += \`Recuerda, joven aprendiz. Define mi rol (Persona), tu objetivo (Tarea), el universo de la petición (Contexto) y la forma del resultado (Formato). ¡Inténtalo de nuevo! <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            }

            feedbackEl.innerHTML = feedbackHTML;
            feedbackEl.style.display = 'block';
            document.querySelector('#challenge-1 button').disabled = true;
            actualizarKiTotal(kiPoints);
        }
        
        function evaluarCinturonAzul() {
            const prompt = document.getElementById('prompt-2').value;
            const feedbackEl = document.getElementById('feedback-2');
            let kiPoints = 0;
            let feedbackHTML = '<strong>Feedback del Sensei:</strong> ';
            
            const tieneEjemplos = (prompt.match(/ejemplo/gi) || []).length >= 2 || (prompt.match(/tuit:/gi) || []).length >= 2 || (prompt.includes('🐙') && prompt.includes('🌍'));
            const tieneTarea = prompt.toLowerCase().includes('genera') || prompt.toLowerCase().includes('crea');

            if (tieneEjemplos && tieneTarea) {
                kiPoints = 250;
                feedbackHTML += \`¡Maestría en el ejemplo! Has enseñado a la IA el estilo exacto. El eco repite el sonido que le das. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else if (tieneEjemplos || (prompt.match(/ejemplo/gi) || []).length === 1) {
                kiPoints = 75;
                 feedbackHTML += \`Vas por buen camino, pero un solo ejemplo puede no ser suficiente. Proporciona al menos dos para definir un estilo claro. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else {
                kiPoints = 25;
                feedbackHTML += \`Para que Gemini aprenda un estilo, muéstrale el estilo. Dale un mapa (ejemplos), no solo el destino. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            }

            feedbackEl.innerHTML = feedbackHTML;
            feedbackEl.style.display = 'block';
            document.querySelector('#challenge-2 button').disabled = true;
            actualizarKiTotal(kiPoints);
        }

        function evaluarCinturonNegro() {
            const prompt = document.getElementById('prompt-3').value.toLowerCase();
            const feedbackEl = document.getElementById('feedback-3');
            let fases = 0;
            let kiPoints = 0;
            let feedbackHTML = '<strong>Feedback del Sensei:</strong> ';

            // Observar
            if (prompt.includes('analiza') || prompt.includes('observa') || prompt.includes('describe el gráfico')) fases++;
            // Interpretar
            if (prompt.includes('tendencia') || prompt.includes('insight') || prompt.includes('rendimiento')) fases++;
            // Estrategizar
            if (prompt.includes('estratég') || prompt.includes('recomienda') || prompt.includes('acción') || prompt.includes('propón')) fases++;
            // Formatear
            if (prompt.includes('formato') || prompt.includes('secciones') || (prompt.includes('análisis') && prompt.includes('recomendaciones'))) fases++;

            if (fases === 4) {
                kiPoints = 500;
                feedbackHTML += \`¡Has alcanzado la Iluminación del Prompt! No solo le has pedido a Gemini que sea tus ojos, sino tu cerebro estratégico. Has combinado visión y acción. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else if (fases === 3) {
                 kiPoints = 300;
                 feedbackHTML += \`¡Técnica de alto nivel! Has pedido análisis y estrategia. Un toque final en el formato de la respuesta te daría el control absoluto. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else if (fases >= 1) {
                kiPoints = (fases === 2) ? 150 : 50;
                feedbackHTML += \`Bien, estás yendo más allá de la simple descripción. Ahora piensa en el siguiente paso: ¿qué acción tomarías con esa información? Pide estrategia. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            } else {
                 kiPoints = 0;
                 feedbackHTML += \`Estás viendo la imagen, pero no la estás usando. Pide a la IA que la analice, interprete y que te proponga una estrategia basada en ella. <br>Puntuación: <span class="ki-points">\${kiPoints} Ki</span>\`;
            }
            
            feedbackEl.innerHTML = feedbackHTML;
            feedbackEl.style.display = 'block';
            document.querySelector('#challenge-3 button').disabled = true;
            actualizarKiTotal(kiPoints);
        }
    </script>
</body>
</html>
`;
