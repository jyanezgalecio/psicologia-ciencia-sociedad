/*
 * Psicología, Ciencia y Sociedad — Asistente educativo autónomo v1.0
 * Licencia MIT. Gratis, sin servicios externos ni recopilación de datos.
 * Edite CONFIG para personalizar el nombre y textos de la interfaz.
 * Edite conocimiento.json (si se aloja en el mismo directorio) para ampliar el contenido.
 */
(function () {
  'use strict';
  if (document.getElementById('psc-chatbot-root')) return;

  const CONFIG = {
    nombre: 'Asistente educativo',
    sitio: 'Psicología, Ciencia y Sociedad',
    descripcion: 'Conceptos claros, ejemplos y aprendizaje crítico',
    bienvenida: '¡Hola! Soy el asistente de Psicología, Ciencia y Sociedad. Puedo ayudarte a comprender conceptos y explorar temas de psicología, educación e investigación. ¿Sobre qué te gustaría aprender?',
    pie: 'Orientación educativa · Sin diagnóstico ni atención clínica · Sin almacenamiento de mensajes'
  };
  const DEFAULT_KNOWLEDGE = [{"tema":"Presentación","preguntas":["que puedes hacer","como funciona el asistente","que haces","ayuda","menu","opciones","que es este chatbot"],"respuesta":"Soy un asistente educativo de Psicología, Ciencia y Sociedad. Puedo explicar conceptos, presentar ejemplos, ayudarte a diferenciar teorías y sugerir preguntas de estudio.\n\nMis respuestas provienen de una base de contenidos previamente redactados; esta versión no genera respuestas nuevas con IA. Si no encuentro un tema, te lo diré.","relacionadas":["¿Qué es la psicología del desarrollo?","¿Qué es una hipótesis?","¿Qué es la ciudadanía digital?"]},{"tema":"Psicología","preguntas":["que es la psicologia","definicion de psicologia","psicologia como ciencia","que estudia la psicologia"],"respuesta":"La psicología estudia científicamente la conducta y los procesos mentales en relación con los contextos biológicos, psicológicos, históricos y sociales. Investiga, por ejemplo, cómo aprendemos, recordamos, sentimos, nos desarrollamos y nos relacionamos.\n\nLa pluralidad de enfoques teóricos hace importante distinguir sus supuestos y métodos.","relacionadas":["¿Qué es la psicología del desarrollo?","¿Qué es el método científico?"]},{"tema":"Desarrollo","preguntas":["psicologia del desarrollo","desarrollo humano","que es el desarrollo psicologico","etapas del desarrollo humano"],"respuesta":"La psicología del desarrollo estudia los cambios y continuidades en los procesos físicos, cognitivos, afectivos y psicosociales a lo largo del ciclo vital.\n\nEjemplo: la regulación emocional cambia desde la infancia hasta la adultez, en interacción con relaciones, cultura y experiencias. Las edades de las etapas son orientativas y no delimitaciones universales.","relacionadas":["¿Qué caracteriza la adolescencia?","¿Qué es la adultez emergente?"]},{"tema":"Desarrollo","preguntas":["asimilacion y acomodacion","diferencia entre asimilacion y acomodacion","asimilacion","acomodacion","piaget esquemas","piaget"],"respuesta":"Para Piaget, la asimilación incorpora experiencias a esquemas que ya existen; la acomodación modifica los esquemas cuando los anteriores resultan insuficientes.\n\nEjemplo: un niño llama «perro» a un gato usando un esquema previo (asimilación). Al aprender a diferenciarlos, reorganiza su esquema (acomodación). Ambos procesos participan en la adaptación cognitiva.","relacionadas":["¿Qué es el desarrollo cognitivo?","¿Qué es la zona de desarrollo próximo?"]},{"tema":"Desarrollo","preguntas":["desarrollo cognitivo","cognicion infantil","cambios cognitivos en la infancia"],"respuesta":"El desarrollo cognitivo comprende transformaciones en la atención, la memoria, el lenguaje, la resolución de problemas y otras formas de representar el mundo.\n\nNo depende únicamente de la maduración: también influyen las interacciones, las oportunidades de aprendizaje y el entorno sociocultural.","relacionadas":["¿Qué es la memoria de trabajo?","¿Qué es la zona de desarrollo próximo?"]},{"tema":"Desarrollo","preguntas":["zona de desarrollo proximo","vygotsky","vigotsky","zdp","andamiaje"],"respuesta":"La zona de desarrollo próximo, propuesta por Vygotsky, alude a lo que una persona todavía no resuelve de forma independiente, pero puede lograr con orientación o colaboración más competente.\n\nEjemplo: una estudiante organiza una argumentación científica con preguntas orientadoras y progresivamente logra hacerlo por sí misma. «Andamiaje» es una noción posterior relacionada con la provisión y retiro gradual de apoyos.","relacionadas":["¿Qué es el aprendizaje?","¿Qué es la evaluación formativa?"]},{"tema":"Desarrollo","preguntas":["apego","teoria del apego","vinculo afectivo"],"respuesta":"El apego se refiere a vínculos afectivos significativos que ofrecen seguridad y favorecen la exploración, especialmente durante el desarrollo temprano. Su estudio se asocia con Bowlby y Ainsworth.\n\nLos patrones de apego describen regularidades relacionales; no deben utilizarse como etiquetas rígidas ni para predecir de forma determinista la personalidad.","relacionadas":["¿Qué es el desarrollo socioemocional?","¿Qué caracteriza la adolescencia?"]},{"tema":"Desarrollo","preguntas":["adolescencia","desarrollo adolescente","que caracteriza la adolescencia"],"respuesta":"La adolescencia es un período de transformaciones físicas, cognitivas, afectivas y sociales. Incluye cambios puberales, mayor elaboración de identidad y modificaciones en vínculos con pares y adultos.\n\nNo existe una experiencia adolescente única: las trayectorias dependen de condiciones familiares, socioculturales y materiales.","relacionadas":["¿Qué es la adultez emergente?","¿Qué es el bienestar digital?"]},{"tema":"Desarrollo","preguntas":["adultez emergente","adultez temprana","emerging adulthood","arnett"],"respuesta":"La adultez emergente es un concepto propuesto por Jeffrey Arnett para describir, en determinados contextos socioculturales, un período de exploración de identidad y transiciones vitales, aproximadamente entre los 18 y 29 años.\n\nNo es una etapa universal: factores económicos, culturales y oportunidades educativas modifican su pertinencia.","relacionadas":["¿Qué caracteriza la adolescencia?","¿Qué es el desarrollo psicológico?"]},{"tema":"Desarrollo","preguntas":["desarrollo socioemocional","desarrollo socioafectivo","regulacion emocional"],"respuesta":"El desarrollo socioemocional comprende la evolución de las emociones, la autorregulación, la empatía, el autoconcepto y la participación en relaciones sociales.\n\nEjemplo: aprender a nombrar una emoción, comunicarla y buscar apoyo en una situación frustrante requiere habilidades que se desarrollan en interacción.","relacionadas":["¿Qué es el apego?","¿Qué es la convivencia escolar?"]},{"tema":"Aprendizaje","preguntas":["aprendizaje","que es el aprendizaje","definicion de aprendizaje","aprendizaje humano"],"respuesta":"El aprendizaje implica cambios relativamente duraderos en conocimientos, capacidades o comportamientos asociados con la experiencia. Las diferentes corrientes psicológicas explican sus mecanismos de formas distintas.\n\nEjemplo: practicar una estrategia de estudio y mejorar la capacidad de recuperar información; no basta observar un cambio pasajero por fatiga o maduración.","relacionadas":["¿Qué es el condicionamiento operante?","¿Qué es el aprendizaje significativo?"]},{"tema":"Aprendizaje","preguntas":["condicionamiento operante","refuerzo","reforzamiento","skinner"],"respuesta":"En el condicionamiento operante, las consecuencias de una conducta influyen sobre su probabilidad futura. El reforzamiento aumenta la conducta; el castigo busca disminuirla. «Positivo» significa añadir un estímulo y «negativo», retirarlo: no equivalen a bueno y malo.\n\nEjemplo: permitir una pausa después de completar una tarea puede reforzar la conducta si esta aumenta posteriormente.","relacionadas":["¿Cuál es la diferencia entre refuerzo negativo y castigo?","¿Qué es el aprendizaje?"]},{"tema":"Aprendizaje","preguntas":["refuerzo negativo y castigo","diferencia entre refuerzo negativo y castigo","reforzamiento negativo","castigo negativo"],"respuesta":"El refuerzo negativo aumenta una conducta porque, tras realizarla, se retira una condición aversiva. El castigo busca reducir una conducta, mediante presentación o retiro de consecuencias.\n\nEjemplo: ajustarse el cinturón para detener una alarma molesta puede reforzar esa conducta negativamente. Retirar un privilegio tras una infracción es un ejemplo de castigo negativo si disminuye la conducta.","relacionadas":["¿Qué es el condicionamiento operante?","¿Qué es el aprendizaje?"]},{"tema":"Aprendizaje","preguntas":["aprendizaje significativo","ausubel","conocimientos previos","significatividad"],"respuesta":"El aprendizaje significativo, asociado a Ausubel, ocurre cuando nuevas ideas se relacionan de manera sustantiva y no arbitraria con conocimientos previos relevantes.\n\nEjemplo: comprender la memoria de trabajo conectándola con experiencias de atención y resolución de tareas, en lugar de repetir una definición de memoria.","relacionadas":["¿Qué es la memoria de trabajo?","¿Qué es la evaluación formativa?"]},{"tema":"Aprendizaje","preguntas":["memoria de trabajo","working memory","funcion ejecutiva memoria","modelo baddeley"],"respuesta":"La memoria de trabajo es el sistema de capacidad limitada que permite mantener y manipular temporalmente información relevante para una tarea. Participa en lectura, razonamiento y resolución de problemas.\n\nEjemplo: retener el inicio de una consigna mientras se procesan sus instrucciones posteriores. No debe confundirse con una simple «bodega» pasiva de datos.","relacionadas":["¿Qué es la atención?","¿Qué es el aprendizaje significativo?"]},{"tema":"Aprendizaje","preguntas":["atencion","atencion selectiva","procesos atencionales","concentracion"],"respuesta":"La atención comprende procesos que seleccionan y priorizan información según metas y demandas del entorno. Puede estudiarse, entre otras modalidades, como atención selectiva, sostenida o dividida.\n\nEjemplo: escuchar una explicación en una sala ruidosa exige seleccionar señales relevantes y regular distractores.","relacionadas":["¿Qué es la memoria de trabajo?","¿Qué es el TDAH?"]},{"tema":"Educación","preguntas":["psicologia educacional","psicologia escolar","diferencia psicologia educacional escolar","que hace un psicologo escolar"],"respuesta":"La psicología educacional estudia procesos de enseñanza, aprendizaje y desarrollo en contextos educativos. La psicología escolar aplica conocimientos psicológicos a necesidades de comunidades educativas, con énfasis en prevención, apoyos, convivencia e inclusión.\n\nAmbas se superponen; su alcance depende del marco institucional y profesional.","relacionadas":["¿Qué es la convivencia escolar?","¿Qué es la educación inclusiva?"]},{"tema":"Educación","preguntas":["convivencia escolar","clima escolar","conflictos escolares"],"respuesta":"La convivencia escolar se refiere a la calidad de las relaciones, prácticas, normas y formas de participación que configuran la vida cotidiana en la comunidad educativa.\n\nTrabajarla requiere prevención, participación de estudiantes y familias, resolución dialogada de conflictos y protección de derechos, no solo sanciones.","relacionadas":["¿Qué es el acoso escolar?","¿Qué es la educación inclusiva?"]},{"tema":"Educación","preguntas":["bullying","acoso escolar","ciberbullying","ciberacoso"],"respuesta":"El acoso escolar suele definirse por conductas agresivas repetidas y un desequilibrio de poder. El ciberacoso utiliza medios digitales y puede extender su impacto por difusión, persistencia y dificultad para evitar el contacto.\n\nNo todo conflicto entre estudiantes es bullying. Ante sospechas, corresponde documentar hechos, activar los protocolos institucionales y proteger a quienes participan sin exponerlos públicamente.","relacionadas":["¿Qué es la convivencia escolar?","¿Qué es la ciudadanía digital?"]},{"tema":"Educación","preguntas":["educacion inclusiva","inclusion educativa","diseno universal para el aprendizaje","dua","ajustes razonables"],"respuesta":"La educación inclusiva busca identificar y remover barreras para la presencia, participación y aprendizaje de todas las personas. El Diseño Universal para el Aprendizaje propone diversificar formas de acceso, participación y expresión; los apoyos individualizados pueden complementar estas medidas.\n\nEjemplo: ofrecer material escrito, audio y distintos modos de demostrar aprendizajes, manteniendo objetivos formativos claros.","relacionadas":["¿Qué es el TDAH?","¿Qué es la psicología educacional?"]},{"tema":"Educación","preguntas":["evaluacion formativa","retroalimentacion educativa","feedback aprendizaje"],"respuesta":"La evaluación formativa recoge e interpreta evidencias durante el proceso de aprendizaje para ajustar enseñanza y estrategias de estudio.\n\nUna retroalimentación útil indica qué se logró, qué necesita mejorarse y cuál es el siguiente paso. Ejemplo: explicar por qué una hipótesis no es contrastable y proponer una reformulación.","relacionadas":["¿Qué es el aprendizaje significativo?","¿Qué es una hipótesis?"]},{"tema":"Educación","preguntas":["tdah","deficit atencional","trastorno por deficit de atencion","hiperactividad"],"respuesta":"El TDAH es una condición del neurodesarrollo asociada con patrones persistentes de inatención y/o hiperactividad-impulsividad que pueden afectar distintos ámbitos de la vida. Su valoración clínica considera historia, contexto y funcionamiento; no se establece por una conducta aislada.\n\nEn educación suelen ayudar consignas claras, apoyos organizativos, ajustes razonables y coordinación entre escuela, familia y profesionales, según necesidades individuales. Este asistente no realiza diagnósticos.","relacionadas":["¿Qué es la atención?","¿Qué es la educación inclusiva?"]},{"tema":"Educación","preguntas":["tea","autismo","trastorno del espectro autista","persona autista"],"respuesta":"El autismo es una condición del neurodesarrollo caracterizada por diferencias en comunicación e interacción social y por patrones restringidos o repetitivos de conducta, intereses o actividades, con gran heterogeneidad entre personas.\n\nLos apoyos deben ser individualizados y respetuosos de preferencias, accesibilidad y autonomía. No corresponde inferir un diagnóstico a partir de una descripción breve.","relacionadas":["¿Qué es la educación inclusiva?","¿Qué es la convivencia escolar?"]},{"tema":"Investigación","preguntas":["metodo cientifico","investigacion cientifica","que es la ciencia"],"respuesta":"La investigación científica produce conocimiento mediante preguntas delimitadas, procedimientos explícitos, evidencia revisable y argumentación crítica. Los métodos pueden ser cuantitativos, cualitativos o mixtos, según las preguntas y supuestos del estudio.\n\nLa reproducibilidad, la transparencia y la revisión crítica son importantes, aunque se expresan de manera distinta según el diseño.","relacionadas":["¿Qué es una hipótesis?","¿Qué es un experimento?"]},{"tema":"Investigación","preguntas":["hipotesis","que es una hipotesis","hipotesis cientifica","formular hipotesis"],"respuesta":"Una hipótesis es una proposición provisional susceptible de contrastarse con evidencia bajo condiciones determinadas.\n\nEjemplo: «En estudiantes universitarios, aumentar las interrupciones durante una tarea de lectura reducirá, en promedio, el rendimiento de comprensión, respecto de una condición sin interrupciones». La formulación permite definir variables y un procedimiento de prueba.","relacionadas":["¿Qué es una variable?","¿Qué es un experimento?"]},{"tema":"Investigación","preguntas":["variable independiente y dependiente","variable independiente","variable dependiente","variables en un experimento"],"respuesta":"En un diseño experimental, la variable independiente es la condición manipulada y la variable dependiente es el resultado observado. También pueden registrarse variables de control o covariables.\n\nEjemplo: si se compara una lectura con y sin interrupciones, la condición de interrupciones es la variable independiente y el puntaje de comprensión es la dependiente.","relacionadas":["¿Qué es un experimento?","¿Qué es una hipótesis?"]},{"tema":"Investigación","preguntas":["experimento","psicologia experimental","diseno experimental","grupo control","aleatorizacion"],"respuesta":"Un experimento busca examinar posibles efectos causales mediante la manipulación de una condición y la comparación de resultados, procurando controlar explicaciones alternativas. La asignación aleatoria, cuando es factible, ayuda a reducir sesgos.\n\nEjemplo: asignar al azar participantes a una tarea con interrupciones o sin ellas y comparar su desempeño.","relacionadas":["¿Qué es una variable independiente?","¿Cuál es la diferencia entre correlación y causalidad?"]},{"tema":"Investigación","preguntas":["correlacion y causalidad","correlacion no implica causalidad","diferencia correlacion causalidad","correlacion"],"respuesta":"Una correlación indica asociación estadística entre variables, pero no demuestra por sí sola que una cause la otra. Puede existir confusión por terceras variables, causalidad inversa o coincidencias.\n\nEjemplo: observar asociación entre tiempo de pantalla y dificultades de sueño no permite concluir, sin más evidencia, que uno cause lo otro.","relacionadas":["¿Qué es un experimento?","¿Qué es una variable independiente?"]},{"tema":"Investigación","preguntas":["validez y confiabilidad","validez","fiabilidad","confiabilidad","confiabilidad instrumentos"],"respuesta":"La fiabilidad o confiabilidad refiere a la consistencia de las puntuaciones bajo determinadas condiciones. La validez concierne a qué tan bien la evidencia y la teoría respaldan la interpretación y uso propuestos de esas puntuaciones.\n\nUn instrumento puede dar resultados consistentes y aun así no medir adecuadamente el constructo que pretende evaluar.","relacionadas":["¿Qué es una encuesta?","¿Qué es una hipótesis?"]},{"tema":"Investigación","preguntas":["encuesta","cuestionario","instrumento de investigacion","preguntas encuesta"],"respuesta":"Una encuesta es un procedimiento de recopilación sistemática de información mediante preguntas estandarizadas. La calidad depende del propósito, formulación de ítems, muestreo, aplicación y análisis.\n\nEjemplo: para estudiar usos académicos de IA generativa conviene diferenciar frecuencia de uso, propósitos y prácticas de verificación, evitando preguntas que sugieran una respuesta deseada.","relacionadas":["¿Qué es la validez?","¿Qué es la ética de la investigación?"]},{"tema":"Investigación","preguntas":["imryd","estructura de un articulo cientifico","articulo cientifico","introduccion metodos resultados discusion"],"respuesta":"IMRyD designa una estructura habitual de artículos empíricos: Introducción, Métodos, Resultados y Discusión. La introducción plantea el problema y objetivo; los métodos explican cómo se investigó; los resultados presentan los hallazgos; y la discusión interpreta sus alcances y limitaciones.\n\nLa estructura exacta depende de la revista y del enfoque metodológico.","relacionadas":["¿Qué es una hipótesis?","¿Qué es la ética de la investigación?"]},{"tema":"Investigación","preguntas":["etica de la investigacion","consentimiento informado","principios eticos investigacion","participantes investigacion"],"respuesta":"La ética de la investigación con personas exige, entre otros criterios, respeto por la autonomía, evaluación de riesgos y beneficios, confidencialidad, selección justa y consentimiento informado cuando corresponda.\n\nEjemplo: una encuesta con estudiantes debe explicar el carácter voluntario de la participación y evitar consecuencias académicas por no responder.","relacionadas":["¿Qué es una encuesta?","¿Qué es un experimento?"]},{"tema":"Investigación","preguntas":["metodo cualitativo y cuantitativo","investigacion cualitativa","investigacion cuantitativa","metodos mixtos"],"respuesta":"La investigación cuantitativa utiliza mediciones y procedimientos de análisis numérico para responder preguntas delimitadas. La cualitativa examina significados, experiencias y procesos mediante materiales como entrevistas u observaciones. Los métodos mixtos articulan ambas aproximaciones.\n\nLa elección depende de la pregunta investigativa, no de una jerarquía general entre métodos.","relacionadas":["¿Qué es el método científico?","¿Qué es una encuesta?"]},{"tema":"Investigación","preguntas":["sesgo de seleccion","sesgo de confirmacion","sesgos investigacion","deseabilidad social"],"respuesta":"Un sesgo es una fuente sistemática de distorsión en la obtención, análisis o interpretación de evidencia. Por ejemplo, la deseabilidad social puede llevar a responder como se considera socialmente aceptable, y la selección no representativa limita la generalización.\n\nConviene anticipar sesgos en el diseño y transparentar limitaciones del estudio.","relacionadas":["¿Qué es una encuesta?","¿Qué es la validez?"]},{"tema":"Investigación","preguntas":["media mediana moda","tendencia central","estadistica descriptiva"],"respuesta":"La media aritmética es la suma de los valores dividida por su número; la mediana es el valor central tras ordenar los datos; y la moda, el valor más frecuente.\n\nEjemplo: en 2, 3 y 10, la media es 5 y la mediana es 3. Una media puede verse afectada por valores extremos.","relacionadas":["¿Qué son la varianza y la desviación estándar?","¿Qué es una correlación?"]},{"tema":"Investigación","preguntas":["varianza y desviacion estandar","varianza","desviacion estandar","dispersion estadistica","rango estadistico"],"respuesta":"El rango es la diferencia entre el valor máximo y el mínimo. La varianza cuantifica la dispersión respecto de la media usando desviaciones elevadas al cuadrado; la desviación estándar es su raíz cuadrada y se expresa en las unidades originales.\n\nEjemplo: dos grupos pueden tener igual promedio de puntajes, pero distinta dispersión. La varianza poblacional divide por N; la estimación muestral habitual divide por n−1.","relacionadas":["¿Qué son la media y la mediana?","¿Qué es una correlación?"]},{"tema":"Ciudadanía digital","preguntas":["ciudadania digital","ciudadano digital","convivencia digital"],"respuesta":"La ciudadanía digital implica participar en entornos digitales de manera crítica, ética, segura y respetuosa de los derechos propios y ajenos. Incluye privacidad, evaluación de información, cuidado del bienestar y responsabilidad en interacciones.\n\nEjemplo: antes de reenviar una publicación, verificar su fuente y considerar si vulnera la privacidad de alguien.","relacionadas":["¿Qué es el bienestar digital?","¿Cómo verificar información en internet?"]},{"tema":"Ciudadanía digital","preguntas":["bienestar digital","tiempo de pantalla","pantallas y bienestar","uso equilibrado de pantallas"],"respuesta":"El bienestar digital alude a una relación equilibrada y deliberada con las tecnologías, atendiendo a descanso, sueño, vínculos, aprendizaje y autonomía.\n\nNo existe un número único de horas óptimo para todas las personas: importan contenido, contexto, etapa del desarrollo y posibles interferencias con actividades significativas.","relacionadas":["¿Cuáles son los riesgos de TikTok?","¿Qué es la ciudadanía digital?"]},{"tema":"Ciudadanía digital","preguntas":["tiktok riesgos","riesgos de tiktok","peligros de tiktok","redes sociales adolescentes"],"respuesta":"Entre los riesgos posibles de TikTok y otras plataformas están la exposición a contenidos inapropiados, la recopilación de datos, el contacto no deseado, las interacciones hostiles y los patrones de uso difíciles de regular. No todas las personas experimentan los mismos efectos.\n\nComo estrategias educativas conviene revisar privacidad, conversar sin culpabilizar, desarrollar criterio frente a algoritmos y acordar pautas de uso ajustadas a la edad y el contexto.","relacionadas":["¿Qué es el bienestar digital?","¿Qué es el ciberacoso?"]},{"tema":"Ciudadanía digital","preguntas":["verificar informacion en internet","fake news","desinformacion","fuentes confiables","pensamiento critico digital"],"respuesta":"Para evaluar una afirmación en internet conviene identificar quién la publica, comprobar la fecha, rastrear la fuente original y contrastar con información independiente. Un contenido viral no es necesariamente verdadero.\n\nEjemplo: ante un video que atribuye un estudio a una universidad, buscar el artículo original antes de darlo por válido.","relacionadas":["¿Qué es la ciudadanía digital?","¿Cómo usar la IA para estudiar?"]},{"tema":"Ciudadanía digital","preguntas":["inteligencia artificial estudiar","ia generativa educacion","uso de chatgpt estudiantes","como usar la ia para estudiar","ia en la universidad"],"respuesta":"La IA generativa puede apoyar el aprendizaje cuando se usa para explorar explicaciones, contrastar perspectivas, practicar preguntas y recibir retroalimentación. También puede producir respuestas erróneas o referencias inexistentes.\n\nUna práctica recomendable es intentar resolver primero, pedir después una explicación alternativa y verificar afirmaciones con fuentes confiables, respetando las reglas académicas sobre su uso.","relacionadas":["¿Qué es la ciudadanía digital?","¿Cómo verificar información en internet?"]},{"tema":"Acerca del proyecto","preguntas":["sobre este sitio","sobre la pagina","quien creo esta pagina","psicologia ciencia y sociedad","contacto","autor de la pagina"],"respuesta":"Este asistente acompaña el proyecto educativo Psicología, Ciencia y Sociedad, orientado a estudiantes universitarios y público general.\n\nEsta versión responde desde una base local de conceptos. Para consultar secciones específicas o datos de contacto, utiliza la navegación del sitio; todavía no tengo su mapa de contenidos cargado.","relacionadas":["¿Qué puedes hacer?","¿Qué es la psicología?"]}];
  let knowledge = DEFAULT_KNOWLEDGE;

  const css = `
:host { all: initial; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #172d40; }
*, *::before, *::after { box-sizing: border-box; }
button, input { font: inherit; }
button { cursor: pointer; }
button:focus-visible, input:focus-visible { outline: 3px solid #71c9b6; outline-offset: 2px; }
.psc-trigger { position: fixed; right: 22px; bottom: 22px; z-index: 2147482999; display: flex; align-items: center; gap: 10px; border: 0; border-radius: 999px; color: #fff; padding: 13px 18px; font-weight: 700; font-size: 14px; background: #126b70; box-shadow: 0 7px 28px rgba(0, 44, 52, .25); transition: transform .2s, background .2s; }
.psc-trigger:hover { background: #0b565b; transform: translateY(-2px); }
.psc-trigger svg { display: block; width: 21px; height: 21px; fill: none; stroke: currentColor; stroke-width: 2; }
.psc-panel { position: fixed; bottom: 84px; right: 22px; z-index: 2147482999; width: min(390px, calc(100vw - 24px)); height: min(570px, calc(100dvh - 108px)); min-height: 295px; display: flex; flex-direction: column; background: #fff; border: 1px solid #d7e3e5; border-radius: 18px; box-shadow: 0 15px 55px rgba(14, 44, 55, .22); overflow: hidden; }
.psc-panel[hidden] { display: none; }
.psc-head { background: #103b50; color: #fff; display: flex; align-items: center; gap: 10px; padding: 15px 15px 14px; }
.psc-emblem { border-radius: 13px; background: #0c7b79; width: 42px; height: 42px; display: grid; place-items: center; font-size: 22px; flex: 0 0 auto; }
.psc-title-wrap { min-width: 0; flex: 1; }
.psc-title { font-size: 15px; font-weight: 750; line-height: 1.25; margin: 0; }
.psc-subtitle { font-size: 11px; opacity: .85; margin: 3px 0 0; }
.psc-iconbutton { color: #fff; background: transparent; border: 0; border-radius: 7px; width: 32px; height: 32px; font-size: 21px; flex: 0 0 auto; }
.psc-iconbutton:hover { background: rgba(255, 255, 255, .13); }
.psc-status { background: #ecf7f2; color: #245d4c; border-bottom: 1px solid #d8ede3; padding: 7px 13px; text-align: center; font-size: 11px; }
.psc-log { padding: 15px 13px; overflow-y: auto; min-height: 0; overscroll-behavior: contain; flex: 1; background: #f6f9f9; display: flex; flex-direction: column; gap: 11px; }
.psc-msg { display: flex; flex-direction: column; gap: 6px; max-width: 92%; }
.psc-msg--bot { align-self: flex-start; }
.psc-msg--user { align-self: flex-end; align-items: end; }
.psc-bubble { padding: 11px 13px; border-radius: 14px; font-size: 13px; line-height: 1.55; white-space: pre-line; overflow-wrap: anywhere; }
.psc-msg--bot .psc-bubble { background: #fff; border: 1px solid #dfe9e9; border-top-left-radius: 4px; }
.psc-msg--user .psc-bubble { background: #126b70; color: #fff; border-bottom-right-radius: 4px; }
.psc-suggestions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 2px; }
.psc-chip { background: #e8f3f2; color: #115c61; border: 1px solid #bcdcd7; border-radius: 50px; padding: 7px 10px; font-size: 11px; text-align: left; line-height: 1.25; }
.psc-chip:hover { background: #d3eae7; }
.psc-form { display: flex; align-items: center; gap: 7px; border-top: 1px solid #e1e7e9; background: white; padding: 9px 11px; }
.psc-input { background: #f2f6f7; color: #172d40; border: 1px solid #d8e3e5; border-radius: 12px; padding: 10px 12px; font-size: 13px; min-width: 0; flex: 1; }
.psc-input::placeholder { color: #5b7482; }
.psc-send { background: #126b70; color: white; border: 0; border-radius: 11px; height: 39px; width: 42px; font-size: 19px; flex: 0 0 auto; }
.psc-send:hover { background: #0b565b; }
.psc-foot { background: #fff; padding: 1px 12px 9px; text-align: center; color: #59707b; font-size: 10px; line-height: 1.35; }
@media (max-width: 600px) { .psc-trigger { right: 12px; bottom: max(12px, env(safe-area-inset-bottom)); padding: 13px 15px; } .psc-panel { right: 12px; bottom: calc(70px + env(safe-area-inset-bottom)); height: calc(100dvh - 94px - env(safe-area-inset-bottom)); max-height: 600px; border-radius: 15px; } }
@media (prefers-reduced-motion: reduce) { .psc-trigger { transition: none; } }
`;

  const icons = {
    bubble: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 20l.9-4A8.5 8.5 0 1 1 20 11.5z"/></svg>'
  };
  const mount = document.createElement('div');
  mount.id = 'psc-chatbot-root';
  document.body.appendChild(mount);
  const shadow = mount.attachShadow({mode: 'open'});
  const style = document.createElement('style');
  style.textContent = css;
  shadow.appendChild(style);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  const trigger = el('button', 'psc-trigger');
  trigger.type = 'button';
  trigger.innerHTML = icons.bubble + '<span>Haz una pregunta</span>';
  trigger.setAttribute('aria-label', 'Abrir asistente educativo');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'psc-chat-panel');
  const panel = el('section', 'psc-panel');
  panel.id = 'psc-chat-panel';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', CONFIG.nombre);
  const header = el('header', 'psc-head');
  const emblem = el('div', 'psc-emblem', '✦');
  emblem.setAttribute('aria-hidden', 'true');
  const titleWrap = el('div', 'psc-title-wrap');
  titleWrap.append(el('p', 'psc-title', CONFIG.nombre), el('p', 'psc-subtitle', CONFIG.sitio));
  const reset = el('button', 'psc-iconbutton', '↻');
  reset.type = 'button';
  reset.title = 'Reiniciar conversación';
  reset.setAttribute('aria-label', 'Reiniciar conversación');
  const close = el('button', 'psc-iconbutton', '×');
  close.type = 'button';
  close.title = 'Cerrar asistente';
  close.setAttribute('aria-label', 'Cerrar asistente');
  header.append(emblem, titleWrap, reset, close);
  const status = el('div', 'psc-status', '● Disponible siempre · Respuestas desde contenidos locales');
  const log = el('div', 'psc-log');
  log.setAttribute('role', 'log');
  log.setAttribute('aria-label', 'Conversación');
  log.setAttribute('aria-live', 'polite');
  log.setAttribute('aria-relevant', 'additions');
  const form = el('form', 'psc-form');
  const input = el('input', 'psc-input');
  input.type = 'text';
  input.autocomplete = 'off';
  input.maxLength = 450;
  input.placeholder = 'Escribe tu pregunta…';
  input.setAttribute('aria-label', 'Tu pregunta');
  const submit = el('button', 'psc-send', '➤');
  submit.type = 'submit';
  submit.title = 'Enviar pregunta';
  submit.setAttribute('aria-label', 'Enviar pregunta');
  form.append(input, submit);
  const foot = el('footer', 'psc-foot', CONFIG.pie);
  panel.append(header, status, log, form, foot);
  shadow.append(trigger, panel);

  const normalize = (text) => String(text || '')
    .toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ').replace(/\s+/g, ' ').trim();
  const stop = new Set('que como cual cuales cuando donde por para con sin una uno unas unos este esta eso esa los las del al en de la el y o es un se su sus me te a mi lo por favor puedo necesito quiero dime explica explicar sobre mas acerca segun diferencia entre cuanto desde'.split(' '));
  function tokens(value) {
    return [...new Set(normalize(value).split(' ').filter(w => w.length > 2 && !stop.has(w)))];
  }
  function overlapScore(a, b) {
    if (!a.length || !b.length) return 0;
    const matched = a.filter(w => b.includes(w)).length;
    if (!matched) return 0;
    // Se favorece la coincidencia de los términos de la pregunta.
    return 17 * (matched / a.length) + 10 * (matched / b.length);
  }
  function findAnswer(question) {
    const query = normalize(question);
    const qWords = tokens(question);
    if (!query || !qWords.length) return null;
    const results = knowledge.map(item => {
      let best = 0;
      for (const variant of item.preguntas) {
        const variantNorm = normalize(variant);
        if (query === variantNorm) { best = 150; break; }
        if (variantNorm.length >= 6 && query.includes(variantNorm)) {
          // Se priorizan las expresiones específicas, no palabras aisladas como «apego».
          best = Math.max(best, 40 + Math.min(25, tokens(variant).length * 5));
        }
        const words = tokens(variant);
        const similarity = overlapScore(qWords, words);
        best = Math.max(best, similarity);
      }
      best = Math.max(best, overlapScore(qWords, tokens(item.tema)) * .45);
      return { item, score: best };
    }).sort((a, b) => b.score - a.score);
    if (results[0] && results[0].score >= 14) return results[0];
    return null;
  }
  function addMessage(text, sender, questions) {
    const wrapper = el('div', 'psc-msg psc-msg--' + sender);
    const bubble = el('div', 'psc-bubble', text);
    wrapper.appendChild(bubble);
    if (sender === 'bot' && Array.isArray(questions) && questions.length) {
      const chips = el('div', 'psc-suggestions');
      questions.slice(0, 3).forEach(q => {
        const chip = el('button', 'psc-chip', q);
        chip.type = 'button';
        chip.addEventListener('click', () => ask(q));
        chips.appendChild(chip);
      });
      wrapper.appendChild(chips);
    }
    log.appendChild(wrapper);
    log.scrollTop = log.scrollHeight;
  }
  const basics = ['¿Qué es la psicología del desarrollo?', '¿Qué es la memoria de trabajo?', '¿Qué es un experimento?'];
  function resetChat() {
    log.replaceChildren();
    addMessage(CONFIG.bienvenida, 'bot', basics);
  }
  function ask(value) {
    const question = String(value || '').trim();
    if (!question) return;
    addMessage(question, 'user');
    input.value = '';
    const qNorm = normalize(question);
    const sensitive = /(suicid|suicidio|matarme|quitarme la vida|autoles|hacerme dano|hacerse dano|me quiero morir)/.test(qNorm);
    if (sensitive) {
      addMessage('Siento que estés pasando por una situación difícil. Este asistente educativo no puede atender emergencias ni valorar riesgos personales. Si hay peligro inmediato, contacta los servicios de emergencia de tu localidad o acude a urgencias. Si puedes, habla ahora con alguien de confianza que pueda acompañarte.', 'bot');
      return;
    }
    const result = findAnswer(question);
    if (!result) {
      addMessage('Todavía no tengo una respuesta preparada y no quiero inventarla. Puedes reformular la pregunta o elegir uno de estos temas disponibles:', 'bot', [
        '¿Qué es el aprendizaje?', '¿Qué es la psicología educacional?', '¿Qué es la ciudadanía digital?'
      ]);
    } else {
      const intro = result.score < 35 ? 'Encontré un contenido relacionado con tu consulta:\n\n' : '';
      addMessage(intro + result.item.respuesta, 'bot', result.item.relacionadas);
    }
  }
  function setOpen(open) {
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
    trigger.setAttribute('aria-label', open ? 'Cerrar asistente educativo' : 'Abrir asistente educativo');
    trigger.querySelector('span').textContent = open ? 'Cerrar chat' : 'Haz una pregunta';
    if (open) input.focus(); else trigger.focus();
  }
  trigger.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));
  reset.addEventListener('click', () => { resetChat(); input.focus(); });
  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); input.focus(); });
  shadow.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) setOpen(false); });
  resetChat();

  // Se puede actualizar el contenido sin modificar el JavaScript:
  // al publicarse en GitHub Pages, el archivo conocimiento.json se carga localmente.
  // Si falta o es inválido, se conserva la base integrada en este archivo.
  if (location.protocol !== 'file:' && typeof fetch === 'function') {
    const script = document.currentScript;
    const jsUrl = script && script.src ? script.src : location.href;
    const knowledgeUrl = new URL('conocimiento.json', jsUrl);
    fetch(knowledgeUrl, { cache: 'no-store' }).then(r => {
      if (!r.ok) throw new Error('Archivo adicional no disponible');
      return r.json();
    }).then(data => {
      if (Array.isArray(data) && data.length && data.every(x =>
        x && typeof x.respuesta === 'string' && x.respuesta.length &&
        Array.isArray(x.preguntas) && x.preguntas.length &&
        Array.isArray(x.relacionadas) && typeof x.tema === 'string')) {
        knowledge = data;
      }
    }).catch(() => { /* Respaldo autónomo disponible. */ });
  }
})();
