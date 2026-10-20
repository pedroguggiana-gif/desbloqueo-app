const DECKS = {
  cortocircuito: {
    name: "El Cortocircuito",
    emoji: "⚡",
    color: "yellow",
    short: "Cuando no tienes ideas.",
    description:
      "Úsalo cuando estés en blanco, atrapado en clichés o dando vueltas sobre las mismas soluciones. Sus cartas te obligan a romper asociaciones obvias, cambiar perspectivas y conectar cosas que normalmente no relacionarías.",
    useWhen: "Necesitas encontrar un camino completamente nuevo.",
    cards: [
      {
        id: "cortocircuito-1",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Rompe el patrón",
        question: "¿Qué patrón estás siguiendo sin darte cuenta? Rómpelo.",
        text: "Rompe el patrón: ¿Qué patrón estás siguiendo sin darte cuenta? Rómpelo.",
        tag: "Ruptura de patrones"
      },
      {
        id: "cortocircuito-2",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Haz lo contrario",
        question: "¿Qué pasaría si haces exactamente lo contrario de lo que estás intentando hacer?",
        text: "Haz lo contrario: ¿Qué pasaría si haces exactamente lo contrario de lo que estás intentando hacer?",
        tag: "Inversión"
      },
      {
        id: "cortocircuito-3",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Usa lo que tienes cerca",
        question: "Mira el objeto más cercano. ¿Cómo podría ayudarte a resolver esto?",
        text: "Usa lo que tienes cerca: Mira el objeto más cercano. ¿Cómo podría ayudarte a resolver esto?",
        tag: "Uso de recursos"
      },
      {
        id: "cortocircuito-4",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Quita lo indispensable",
        question: "Elimina lo que consideras indispensable. ¿Cómo lo resolverías sin eso?",
        text: "Quita lo indispensable: Elimina lo que consideras indispensable. ¿Cómo lo resolverías sin eso?",
        tag: "Simplificación"
      },
      {
        id: "cortocircuito-5",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Conviértelo en metáfora",
        question: "¿A qué otra situación se parece este problema?",
        text: "Conviértelo en metáfora: ¿A qué otra situación se parece este problema?",
        tag: "Metáfora"
      },
      {
        id: "cortocircuito-6",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Busca lo absurdo",
        question: "¿Cuál es la solución más absurda que se te ocurre? No intentes que sea buena.",
        text: "Busca lo absurdo: ¿Cuál es la solución más absurda que se te ocurre? No intentes que sea buena.",
        tag: "Absurdo"
      },
      {
        id: "cortocircuito-7",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Cambia al protagonista",
        question: "¿Qué pasaría si el brief estuviera dirigido a otro protagonista? Un animal, un objeto, un niño, un anciano, una máquina…",
        text: "Cambia al protagonista: ¿Qué pasaría si el brief estuviera dirigido a otro protagonista? Un animal, un objeto, un niño, un anciano, una máquina…",
        tag: "Cambio de protagonista"
      },
      {
        id: "cortocircuito-8",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Míralo con otros ojos",
        question: "¿Cómo lo resolvería alguien de 80 años que nunca ha visto algo parecido?",
        text: "Míralo con otros ojos: ¿Cómo lo resolvería alguien de 80 años que nunca ha visto algo parecido?",
        tag: "Perspectiva"
      },
      {
        id: "cortocircuito-9",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Quédate sin plata",
        question: "¿Cómo lo harías si tuvieras $0?",
        text: "Quédate sin plata: ¿Cómo lo harías si tuvieras $0?",
        tag: "Restricciones"
      },
      {
        id: "cortocircuito-10",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Palabra aleatoria",
        question: "Conecta el problema con [PALABRA AL AZAR]. Ej.: dinero, salud, personas, miedo, seguridad, amor, poder, tiempo, awareness…",
        text: "Palabra aleatoria: Conecta el problema con [PALABRA AL AZAR]. Ej.: dinero, salud, personas, miedo, seguridad, amor, poder, tiempo, awareness…",
        tag: "Asociación aleatoria"
      },
      {
        id: "cortocircuito-11",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Róbale una lógica a otro mundo",
        question: "¿Qué podríamos robarle a un videojuego, deporte, ritual, fiesta, casino, escuela…?",
        text: "Róbale una lógica a otro mundo: ¿Qué podríamos robarle a un videojuego, deporte, ritual, fiesta, casino, escuela…?",
        tag: "Analogía"
      },
      {
        id: "cortocircuito-12",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Invierte problema y solución",
        question: "¿Qué pasaría si el problema se convirtiera en la solución?",
        text: "Invierte problema y solución: ¿Qué pasaría si el problema se convirtiera en la solución?",
        tag: "Reencuadre"
      },
      {
        id: "cortocircuito-13",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Pon lo ignorado al centro",
        question: "¿Qué cosa normalmente ignoramos de este problema? Pónganla al centro.",
        text: "Pon lo ignorado al centro: ¿Qué cosa normalmente ignoramos de este problema? Pónganla al centro.",
        tag: "Insight"
      },
      {
        id: "cortocircuito-14",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Sería más increíble si…",
        question: "Termina la frase y deja que otro continúe: “Sería más increíble si…”",
        text: "Sería más increíble si…: Termina la frase y deja que otro continúe: “Sería más increíble si…”",
        tag: "Co-creación"
      },
      {
        id: "cortocircuito-15",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Cambia la emoción",
        question: "¿Qué pasa si en vez de provocar la emoción esperada provocamos miedo, orgullo, curiosidad, nostalgia, alivio, deseo…?",
        text: "Cambia la emoción: ¿Qué pasa si en vez de provocar la emoción esperada provocamos miedo, orgullo, curiosidad, nostalgia, alivio, deseo…?",
        tag: "Cambio emocional"
      },
      {
        id: "cortocircuito-16",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Cámbiale el objetivo",
        question: "Olvida por un momento lo que el brief quiere conseguir. ¿Qué otra cosa interesante podríamos lograr?",
        text: "Cámbiale el objetivo: Olvida por un momento lo que el brief quiere conseguir. ¿Qué otra cosa interesante podríamos lograr?",
        tag: "Cambio de objetivo"
      },
      {
        id: "cortocircuito-17",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Busca al tercero",
        question: "Tenemos A → B. ¿Qué elemento inesperado podríamos meter en medio para cambiar la relación?",
        text: "Busca al tercero: Tenemos A → B. ¿Qué elemento inesperado podríamos meter en medio para cambiar la relación?",
        tag: "Elemento inesperado"
      },
      {
        id: "cortocircuito-18",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Rompe la reacción esperada",
        question: "¿Qué pasaría si nadie hiciera lo que esperamos que haga?",
        text: "Rompe la reacción esperada: ¿Qué pasaría si nadie hiciera lo que esperamos que haga?",
        tag: "Ruptura de expectativas"
      },
      {
        id: "cortocircuito-19",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Cambia el verbo",
        question: "Si estamos intentando mostrar, ¿qué pasa si tenemos que esconder, perseguir, intercambiar, destruir, regalar, coleccionar o transformar?",
        text: "Cambia el verbo: Si estamos intentando mostrar, ¿qué pasa si tenemos que esconder, perseguir, intercambiar, destruir, regalar, coleccionar o transformar?",
        tag: "Cambio de acción"
      },
      {
        id: "cortocircuito-20",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Llévalo a otro mundo",
        question: "¿Cómo funcionaría esta idea en una cárcel, colegio, estadio, aeropuerto, fiesta, hospital…?",
        text: "Llévalo a otro mundo: ¿Cómo funcionaría esta idea en una cárcel, colegio, estadio, aeropuerto, fiesta, hospital…?",
        tag: "Cambio de contexto"
      },
      {
        id: "cortocircuito-21",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Cuestiona lo obvio",
        question: "¿Qué estamos dando por obvio? Elijan una cosa. Ahora supongan que es falsa.",
        text: "Cuestiona lo obvio: ¿Qué estamos dando por obvio? Elijan una cosa. Ahora supongan que es falsa.",
        tag: "Cuestionamiento"
      },
      {
        id: "cortocircuito-22",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: "Haz chocar extremos",
        question: "¿Cómo sería si fuera lujoso y barato, privado y público, enorme y diminuto, serio y ridículo al mismo tiempo?",
        text: "Haz chocar extremos: ¿Cómo sería si fuera lujoso y barato, privado y público, enorme y diminuto, serio y ridículo al mismo tiempo?",
        tag: "Contraste de extremos"
      },
      {
        id: "cortocircuito-23",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: null,
        question: "¿Qué pasa si haces exactamente lo contrario de lo que hace toda la categoría?",
        text: "¿Qué pasa si haces exactamente lo contrario de lo que hace toda la categoría?",
        tag: "Ruptura de categoría"
      },
      {
        id: "cortocircuito-24",
        deck: "El Cortocircuito",
        deckId: "cortocircuito",
        title: null,
        question: "Busca el elemento más aburrido del producto. ¿Cómo podría convertirse en protagonista?",
        text: "Busca el elemento más aburrido del producto. ¿Cómo podría convertirse en protagonista?",
        tag: "Revalorización del producto"
      }
    ]
  },

  tierra: {
    name: "Bájalo a la Tierra",
    emoji: "🌍",
    color: "green",
    short: "Cuando tienes la idea, pero no la ejecución.",
    description:
      "Úsalo cuando ya tengas un concepto, mensaje o insight, pero no sepas cómo convertirlo en una campaña interesante. Sus cartas te empujan a pensar en acciones, experiencias, espacios, objetos, sentidos e interacciones reales.",
    useWhen: "Necesitas transformar un concepto en algo que la gente pueda vivir, tocar, hacer o experimentar.",
    cards: [
      {
        id: "tierra-1",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Actúa físicamente la situación con tu equipo antes de escribir el guion.",
        text: "Actúa físicamente la situación con tu equipo antes de escribir el guion.",
        tag: "Prototipado físico"
      },
      {
        id: "tierra-2",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Cómo se experimenta esta idea si el usuario no puede usar los ojos?",
        text: "¿Cómo se experimenta esta idea si el usuario no puede usar los ojos?",
        tag: "Experiencia sensorial"
      },
      {
        id: "tierra-3",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Diseña una interacción donde el consumidor tenga que tocar o modificar algo en la calle.",
        text: "Diseña una interacción donde el consumidor tenga que tocar o modificar algo en la calle.",
        tag: "Interacción física"
      },
      {
        id: "tierra-4",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿En qué lugar real tendría más sentido que ocurriera esta idea?",
        text: "¿En qué lugar real tendría más sentido que ocurriera esta idea?",
        tag: "Contexto y ubicación"
      },
      {
        id: "tierra-5",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Si no pudieras usar una pantalla, ¿cómo funcionaría la campaña?",
        text: "Si no pudieras usar una pantalla, ¿cómo funcionaría la campaña?",
        tag: "Medios alternativos"
      },
      {
        id: "tierra-6",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Qué tendría que hacer físicamente una persona para activar la idea?",
        text: "¿Qué tendría que hacer físicamente una persona para activar la idea?",
        tag: "Activación"
      },
      {
        id: "tierra-7",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Cómo cambiaría la experiencia si ocurriera únicamente de noche?",
        text: "¿Cómo cambiaría la experiencia si ocurriera únicamente de noche?",
        tag: "Temporalidad"
      },
      {
        id: "tierra-8",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Convierte el eslogan en una acción que alguien pueda realizar.",
        text: "Convierte el eslogan en una acción que alguien pueda realizar.",
        tag: "Eslogan accionable"
      },
      {
        id: "tierra-9",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Qué objeto cotidiano podría convertirse en medio publicitario?",
        text: "¿Qué objeto cotidiano podría convertirse en medio publicitario?",
        tag: "Medio no convencional"
      },
      {
        id: "tierra-10",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Haz que el entorno responda físicamente al comportamiento de una persona. ¿Cómo?",
        text: "Haz que el entorno responda físicamente al comportamiento de una persona. ¿Cómo?",
        tag: "Entorno interactivo"
      },
      {
        id: "tierra-11",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Cómo podría sentirse esta idea usando únicamente sonido?",
        text: "¿Cómo podría sentirse esta idea usando únicamente sonido?",
        tag: "Diseño sonoro"
      },
      {
        id: "tierra-12",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Qué pasaría si la campaña solo existiera durante 30 segundos?",
        text: "¿Qué pasaría si la campaña solo existiera durante 30 segundos?",
        tag: "Restricción temporal"
      },
      {
        id: "tierra-13",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Lleva la idea al lugar exacto donde ocurre el problema que intenta resolver. ¿Qué ves?",
        text: "Lleva la idea al lugar exacto donde ocurre el problema que intenta resolver. ¿Qué ves?",
        tag: "Contextualización"
      },
      {
        id: "tierra-14",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Cómo podría una persona modificar físicamente la publicidad y dejar su huella en ella?",
        text: "¿Cómo podría una persona modificar físicamente la publicidad y dejar su huella en ella?",
        tag: "Participación del público"
      },
      {
        id: "tierra-15",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Si tuvieras que demostrar el beneficio sin decir una sola palabra, ¿qué harías?",
        text: "Si tuvieras que demostrar el beneficio sin decir una sola palabra, ¿qué harías?",
        tag: "Demostración del beneficio"
      },
      {
        id: "tierra-16",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Cómo convertirías el producto en parte de un juego?",
        text: "¿Cómo convertirías el producto en parte de un juego?",
        tag: "Gamificación"
      },
      {
        id: "tierra-17",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Diseña una acción que necesite dos desconocidos colaborando para funcionar.",
        text: "Diseña una acción que necesite dos desconocidos colaborando para funcionar.",
        tag: "Colaboración"
      },
      {
        id: "tierra-18",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "¿Qué podría oler, tocar, escuchar o mover el consumidor?",
        text: "¿Qué podría oler, tocar, escuchar o mover el consumidor?",
        tag: "Interacción multisensorial"
      },
      {
        id: "tierra-19",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Piensa en el recorrido cotidiano del público. ¿En qué momento podrías interrumpirlo de forma útil?",
        text: "Piensa en el recorrido cotidiano del público. ¿En qué momento podrías interrumpirlo de forma útil?",
        tag: "Intervención cotidiana"
      },
      {
        id: "tierra-20",
        deck: "Bájalo a la Tierra",
        deckId: "tierra",
        title: null,
        question: "Si tu concepto tuviera que convertirse mañana en una instalación física de 2×2 metros, ¿qué construirías?",
        text: "Si tu concepto tuviera que convertirse mañana en una instalación física de 2×2 metros, ¿qué construirías?",
        tag: "Instalación física"
      }
    ]
  },

  bomba: {
    name: "La Bomba",
    emoji: "💣",
    color: "red",
    short: "Cuando estás censurando demasiado tus ideas.",
    description:
      "Úsalo cuando estés pensando demasiado en lo que aprobará el cliente, el director creativo o el resto del equipo. Sus cartas te invitan a exagerar, sabotear y crear deliberadamente malas ideas para apagar el crítico interno y descubrir posibilidades que normalmente censurarías.",
    useWhen: "Necesitas perder el miedo a equivocarte y liberar ideas más arriesgadas.",
    cards: [
      {
        id: "bomba-1",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Escribe una idea que haga que despidan a toda la agencia inmediatamente.",
        text: "Escribe una idea que haga que despidan a toda la agencia inmediatamente.",
        tag: "Provocación extrema"
      },
      {
        id: "bomba-2",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Diseña una campaña donde el protagonista odie abiertamente tu producto.",
        text: "Diseña una campaña donde el protagonista odie abiertamente tu producto.",
        tag: "Antipublicidad"
      },
      {
        id: "bomba-3",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Hazlo ridículamente lento, aburrido o molesto de ver.",
        text: "Hazlo ridículamente lento, aburrido o molesto de ver.",
        tag: "Antiatracción"
      },
      {
        id: "bomba-4",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "¿Cuál sería la peor campaña posible para este brief? Descríbela.",
        text: "¿Cuál sería la peor campaña posible para este brief? Descríbela.",
        tag: "Peor escenario"
      },
      {
        id: "bomba-5",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Crea una idea que tu director creativo rechazaría en menos de cinco segundos.",
        text: "Crea una idea que tu director creativo rechazaría en menos de cinco segundos.",
        tag: "Ruptura de aprobación"
      },
      {
        id: "bomba-6",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "¿Cómo lograrías que absolutamente nadie quisiera comprar el producto?",
        text: "¿Cómo lograrías que absolutamente nadie quisiera comprar el producto?",
        tag: "Antiobjetivo"
      },
      {
        id: "bomba-7",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Exagera el problema del consumidor hasta niveles completamente ridículos.",
        text: "Exagera el problema del consumidor hasta niveles completamente ridículos.",
        tag: "Exageración"
      },
      {
        id: "bomba-8",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Diseña una campaña deliberadamente vergonzosa. Ahora encuentra una cosa rescatable de ella.",
        text: "Diseña una campaña deliberadamente vergonzosa. Ahora encuentra una cosa rescatable de ella.",
        tag: "Vergüenza creativa"
      },
      {
        id: "bomba-9",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Haz que el producto sea el villano de la historia.",
        text: "Haz que el producto sea el villano de la historia.",
        tag: "Inversión de roles"
      },
      {
        id: "bomba-10",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "¿Qué idea harías si supieras que jamás llegará a presentarse al cliente?",
        text: "¿Qué idea harías si supieras que jamás llegará a presentarse al cliente?",
        tag: "Libertad creativa"
      },
      {
        id: "bomba-11",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Piensa en algo que una marca “nunca haría”. Ahora imagina que lo hace.",
        text: "Piensa en algo que una marca “nunca haría”. Ahora imagina que lo hace.",
        tag: "Transgresión"
      },
      {
        id: "bomba-12",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Crea una idea que rompa una regla no escrita de la categoría.",
        text: "Crea una idea que rompa una regla no escrita de la categoría.",
        tag: "Ruptura de convenciones"
      },
      {
        id: "bomba-13",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Haz la campaña innecesariamente enorme para comunicar algo diminuto.",
        text: "Haz la campaña innecesariamente enorme para comunicar algo diminuto.",
        tag: "Desproporción"
      },
      {
        id: "bomba-14",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Ahora haz exactamente lo contrario: una acción diminuta para comunicar algo enorme.",
        text: "Ahora haz exactamente lo contrario: una acción diminuta para comunicar algo enorme.",
        tag: "Minimalismo extremo"
      },
      {
        id: "bomba-15",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Convierte el mayor cliché de la categoría en una parodia exagerada.",
        text: "Convierte el mayor cliché de la categoría en una parodia exagerada.",
        tag: "Parodia"
      },
      {
        id: "bomba-16",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "¿Qué ocurriría si el anuncio admitiera abiertamente que es publicidad?",
        text: "¿Qué ocurriría si el anuncio admitiera abiertamente que es publicidad?",
        tag: "Autorreferencia"
      },
      {
        id: "bomba-17",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Crea una idea cuyo objetivo sea incomodar durante cinco segundos al público.",
        text: "Crea una idea cuyo objetivo sea incomodar durante cinco segundos al público.",
        tag: "Incomodidad"
      },
      {
        id: "bomba-18",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Diseña algo que parezca un error antes de que el consumidor entienda la idea.",
        text: "Diseña algo que parezca un error antes de que el consumidor entienda la idea.",
        tag: "Engaño perceptivo"
      },
      {
        id: "bomba-19",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "¿Cuál sería una solución tan absurda al problema que te daría vergüenza decirla en voz alta? Dila igual.",
        text: "¿Cuál sería una solución tan absurda al problema que te daría vergüenza decirla en voz alta? Dila igual.",
        tag: "Idea prohibida"
      },
      {
        id: "bomba-20",
        deck: "La Bomba",
        deckId: "bomba",
        title: null,
        question: "Toma tu peor idea. ¿Qué pequeño elemento de ella podría convertirse en una idea realmente buena?",
        text: "Toma tu peor idea. ¿Qué pequeño elemento de ella podría convertirse en una idea realmente buena?",
        tag: "Rescate de ideas"
      }
    ]
  }
};

const STORAGE_KEY = "desbloqueo-progress-v2";
try { localStorage.removeItem("desbloqueo-progress-v1"); } catch {}
const app = document.getElementById("app");

let state = {
  view: "home",
  activeDeckId: null
};

function shuffle(items) {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getDeckProgress(deckId) {
  const saved = loadProgress();
  const deck = DECKS[deckId];
  if (!deck) return null;
  const total = deck.cards.length;
  const progress = saved[deckId];

  const valid =
    progress &&
    Array.isArray(progress.order) &&
    progress.order.length === total &&
    Number.isInteger(progress.position) &&
    progress.position >= 0 &&
    progress.position <= total &&
    progress.order.every((n) => Number.isInteger(n) && n >= 0 && n < total);

  if (valid) return progress;

  const fresh = {
    order: shuffle(Array.from({ length: total }, (_, i) => i)),
    position: 0
  };

  saved[deckId] = fresh;
  saveProgress(saved);
  return fresh;
}

function setDeckProgress(deckId, progress) {
  const saved = loadProgress();
  saved[deckId] = progress;
  saveProgress(saved);
}

function playCardSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!window._audioCtx) window._audioCtx = new AudioCtx();
    const ctx = window._audioCtx;
    if (ctx.state === "suspended") ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch {
    // Audio optional / non-blocking
  }
}

function triggerHaptic() {
  if (navigator.vibrate) {
    try { navigator.vibrate(12); } catch {}
  }
}

function resetDeck(deckId) {
  const total = DECKS[deckId].cards.length;
  setDeckProgress(deckId, {
    order: shuffle(Array.from({ length: total }, (_, i) => i)),
    position: 0
  });
  playCardSound();
  triggerHaptic();
  render();
}

function goHome() {
  state.view = "home";
  state.activeDeckId = null;
  if (location.hash) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  render();
}

function openDeck(deckId) {
  if (!DECKS[deckId]) return;
  state.view = "deck";
  state.activeDeckId = deckId;
  if (location.hash !== `#${deckId}`) {
    location.hash = deckId;
  }
  render();
}

function nextCard() {
  const deckId = state.activeDeckId;
  const deck = DECKS[deckId];
  const progress = getDeckProgress(deckId);

  if (progress.position < deck.cards.length) {
    progress.position += 1;
    setDeckProgress(deckId, progress);
    playCardSound();
    triggerHaptic();
  }

  render();
}

function previousCard() {
  const deckId = state.activeDeckId;
  const progress = getDeckProgress(deckId);

  if (progress.position > 0) {
    progress.position -= 1;
    setDeckProgress(deckId, progress);
    playCardSound();
    triggerHaptic();
  }

  render();
}

function getTotalCardCount() {
  return Object.values(DECKS).reduce((acc, d) => acc + (d.cards ? d.cards.length : 0), 0);
}

function renderShell(content, showBack = false) {
  const totalCards = getTotalCardCount();
  app.innerHTML = `
    <main class="app-shell">
      <header class="topbar">
        <button class="brand ghost-btn" data-home aria-label="Volver al inicio">
          <span class="brand-mark">↗</span>
          <span>DESBLOQUEO</span>
        </button>
        ${showBack ? `<button class="ghost-btn" data-home aria-label="Ver todos los mazos">← Todos los mazos</button>` : `<span class="ghost-btn" style="cursor:default">${totalCards} cartas</span>`}
      </header>
      ${content}
    </main>
  `;

  document.querySelectorAll("[data-home]").forEach((el) => {
    el.addEventListener("click", goHome);
  });
}

function renderHome() {
  const tiles = Object.entries(DECKS).map(([id, deck]) => {
    const progress = loadProgress()[id];
    const total = deck.cards.length;
    const current = progress && Number.isInteger(progress.position) ? Math.min(progress.position, total) : 0;
    const progressLabel = current > 0 ? (current >= total ? " · Completado" : ` · Carta ${current + 1}/${total}`) : "";

    return `
      <article class="deck-tile ${deck.color}" data-deck="${id}" tabindex="0" role="button" aria-label="Abrir ${deck.name}">
        <div>
          <div class="deck-icon">${deck.emoji}</div>
        </div>
        <div>
          <h2>${deck.name}</h2>
          <p>${deck.short}</p>
          <div class="deck-meta">
            <span>${deck.cards.length} cartas${progressLabel}</span>
            <span class="deck-arrow">→</span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  renderShell(`
    <section class="hero">
      <div class="eyebrow">Estrategias creativas · Para publicistas</div>
      <h1>¿Dónde estás bloqueado?</h1>
      <p>No busques la respuesta correcta. Elige el tipo de bloqueo que tienes y deja que una carta te obligue a mirar el problema desde otro lugar.</p>
    </section>

    <section class="deck-grid" aria-label="Barajas creativas">
      ${tiles}
    </section>

    <p class="small-print">Las cartas no generan la idea por ti. Funcionan como detonantes para empujarte fuera de tus asociaciones habituales.</p>
  `);

  document.querySelectorAll("[data-deck]").forEach((tile) => {
    const id = tile.dataset.deck;
    tile.addEventListener("click", () => openDeck(id));
    tile.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDeck(id);
      }
    });
  });
}

function attachSwipeListeners(element) {
  let touchStartX = 0;
  let touchStartY = 0;

  element.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  element.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Horizontal swipe threshold 45px and dominant over vertical
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextCard();
      } else {
        previousCard();
      }
    }
  }, { passive: true });
}

function renderDeck() {
  const deckId = state.activeDeckId;
  const deck = DECKS[deckId];
  if (!deck) {
    goHome();
    return;
  }

  const progress = getDeckProgress(deckId);
  const total = deck.cards.length;
  const finished = progress.position >= total;

  if (finished) {
    renderShell(`
      <section class="deck-screen">
        <div class="deck-header">
          <div class="deck-title-wrap">
            <div class="eyebrow">${deck.emoji} ${deck.name}</div>
            <h1>Mazo completado.</h1>
            <p>Ya viste las ${total} cartas sin repetir ninguna.</p>
          </div>
        </div>

        <div class="done-card">
          <div class="done-icon">${deck.emoji}</div>
          <h2>Se acabaron las cartas.</h2>
          <p>Si quieres volver a usar este mazo, mézclalo de nuevo. El orden será completamente distinto.</p>
          <button class="primary-btn" id="reshuffle">Mezclar de nuevo</button>
        </div>

        <div class="controls">
          <button class="secondary-btn" id="previous">← Ver carta anterior</button>
        </div>
      </section>
    `, true);

    document.getElementById("reshuffle").addEventListener("click", () => resetDeck(deckId));
    document.getElementById("previous").addEventListener("click", previousCard);
    return;
  }

  const cardIndex = progress.order[progress.position];
  const card = deck.cards[cardIndex];
  const viewedNumber = progress.position + 1;
  const percentage = Math.round((viewedNumber / total) * 100);

  const cardTitle = typeof card === "object" ? card.title : null;
  const cardTag = typeof card === "object" ? card.tag : "";
  const cardQuestion = typeof card === "object" ? (card.question || card.text) : card;

  renderShell(`
    <section class="deck-screen">
      <div class="deck-header">
        <div class="deck-title-wrap">
          <div class="eyebrow">${deck.emoji} Baraja creativa</div>
          <h1>${deck.name}</h1>
          <p>${deck.description}</p>
          <div class="use-when"><strong>Úsalo cuando:</strong>&nbsp; ${deck.useWhen}</div>
        </div>
      </div>

      <div class="card-stage" id="card-stage">
        <div class="fake-card one ${deck.color}" aria-hidden="true"></div>
        <div class="fake-card two ${deck.color}" aria-hidden="true"></div>

        <article class="prompt-card ${deck.color}${cardTitle ? " has-title" : ""}" id="active-card" key="${deckId}-${progress.position}" tabindex="0" role="region" aria-label="Carta ${viewedNumber} de ${total}">
          <div class="card-topline">
            <span>${deck.emoji} ${deck.name}</span>
            <span class="card-number">${viewedNumber}/${total}</span>
          </div>

          <div class="card-body">
            ${cardTitle ? `<h2 class="card-title">${cardTitle}</h2>` : ""}
            ${cardTag ? `<div class="card-tag-wrap"><span class="card-tag">${cardTag}</span></div>` : ""}
            <div class="prompt-text">${cardQuestion}</div>
          </div>

          <div class="card-note">
            No intentes resolverla de inmediato. Dale una vuelta, llévala al brief y observa qué asociaciones nuevas aparecen.
          </div>
        </article>
      </div>

      <div class="controls">
        ${progress.position > 0 ? `<button class="secondary-btn" id="previous">← Anterior</button>` : ""}
        <button class="primary-btn" id="next">${viewedNumber === total ? "Terminar mazo" : "Siguiente carta →"}</button>
      </div>

      <div class="progress-wrap">
        <div class="progress-row">
          <span>${viewedNumber} de ${total} cartas</span>
          <span>${percentage}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar" style="width:${percentage}%"></div>
        </div>
      </div>
    </section>
  `, true);

  document.getElementById("next").addEventListener("click", nextCard);
  const prev = document.getElementById("previous");
  if (prev) prev.addEventListener("click", previousCard);

  const cardStage = document.getElementById("card-stage");
  if (cardStage) attachSwipeListeners(cardStage);
}

function render() {
  if (state.view === "deck" && state.activeDeckId && DECKS[state.activeDeckId]) {
    renderDeck();
  } else {
    renderHome();
  }
}

function hydrateFromHash() {
  const deckId = location.hash.replace("#", "").trim();
  if (deckId && DECKS[deckId]) {
    state.view = "deck";
    state.activeDeckId = deckId;
  } else {
    state.view = "home";
    state.activeDeckId = null;
  }
}

window.addEventListener("hashchange", () => {
  hydrateFromHash();
  render();
});

document.addEventListener("keydown", (e) => {
  if (state.view !== "deck") return;
  if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;

  if (e.key === "ArrowRight" || e.key === " ") {
    if (e.key === " ") e.preventDefault();
    const deckId = state.activeDeckId;
    const progress = getDeckProgress(deckId);
    const total = DECKS[deckId].cards.length;
    if (progress.position >= total) {
      resetDeck(deckId);
    } else {
      nextCard();
    }
  } else if (e.key === "ArrowLeft") {
    previousCard();
  } else if (e.key === "Escape") {
    goHome();
  }
});

hydrateFromHash();
render();
