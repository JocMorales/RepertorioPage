//BASE DE DATOS

export const songs = [
    //Seccion de New Wine
      { artista: "New wine", cancion: "Yeshua Ha-Mashiach", album: "Encuentro sobrenatural", nota: "Am", tipo: "Rapida" },
      { artista: "New wine", cancion: "Mi Dios es bueno", album: "Encuentro sobrenatural", nota: "Cm", tipo: "Rapida" },
      { artista: "New wine", cancion: "El rey de gloria", album: "Encuentro sobrenatural", nota: "Bm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Gloria Revelada", album: "Encuentro sobrenatural", nota: "Cm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Movimiento de gloria", album: "Encuentro sobrenatural", nota: "Em", tipo: "Rapida" },
      { artista: "New wine", cancion: "Cordero y Leon", album: "Encuentro sobrenatural", nota: "C", tipo: "Lenta" },
      { artista: "New wine", cancion: "Yo Soy Sobrenatural", album: "Sonidos del reino", nota: "Gm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Levanto alabanzas", album: "Hambre por el Dios vivo", nota: "Am", tipo: "Rapida" },
      { artista: "New wine", cancion: "En alta voz", album: "Encuentranos Espiritu santo", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Hazlo otra vez", album: "Encuentranos Espiritu santo", nota: "A", tipo: "Rapida" },
      { artista: "New wine", cancion: "Rompimiento", album: "Encuentranos Espiritu santo", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Aceleracion", album: "Encuentranos Espiritu santo", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Necesito un encuentro", album: "Encuentranos Espiritu santo", nota: "Dm", tipo: "Lenta" },
      { artista: "New wine", cancion: "Sonido de transformacion", album: "Vientos de gloria", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Lluvia", album: "Vientos de gloria", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Que los cielos se Abran Hoy", album: "Vientos de gloria", nota: "Dm", tipo: "Lenta" },
      { artista: "New wine", cancion: "Vientos de gloria", album: "Vientos de gloria", nota: "Dm", tipo: "Lenta" },
      { artista: "New wine", cancion: "EL tiempo es ya", album: "Yahweh", nota: "A", tipo: "Rapida" },
      { artista: "New wine", cancion: "Mega Fe", album: "Yahweh", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Dios sin limites", album: "Yahweh", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Unidad en el espiritu", album: "Yahweh", nota: "Dm", tipo: "Rapida" },
      { artista: "New wine", cancion: "Como en el cielo", album: "Yahweh", nota: "A", tipo: "Lenta" },
      { artista: "New wine", cancion: "Tu Bondad", album: "Yahweh", nota: "D", tipo: "Lenta" },
      { artista: "New wine", cancion: "Dia y noche", album: "Yahweh", nota: "Em", tipo: "Lenta" },

      //Seccion de Miel San Marcos
      { artista: "Miel San Marcos", cancion: "Canto, Danzo Salto", album: "Avivamiento2", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Yo Vencere", album: "Avivamiento2", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Eres Dios", album: "Avivamiento1", nota: "Bm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Es tu presencia", album: "Avivamiento1", nota: "G", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Regocijate oh Moradora de Sion", album: "Avivamiento1", nota: "Em", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "El Santo de Israel", album: "Avivamiento1", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Hay Libertad", album: "Avivamiento1", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Levantate Señor", album: "Avivamiento1", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Vino Celestial", album: "Avivamiento1", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Cuando pienso", album: "Avivamiento1", nota: "C", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Grande y fuerte", album: "Dios es real", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Glorificate", album: "Dios es real", nota: "F", tipo: "Lenta" },
      { artista: "Miel San Marcos", cancion: "Unidos", album: "Proezas", nota: "Bm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Agragecido", album: "Proezas", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Los muros caeran", album: "Proezas", nota: "Cm", tipo: "rapida" },
      { artista: "Miel San Marcos", cancion: "No callare", album: "Proezas", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Llego el tiempo", album: "Proezas", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Oleo de alegria", album: "Proezas", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "El señor es mi rey", album: "Proezas", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Cristo no esta muerto", album: "Proezas", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Remolineando", album: "Proezas", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "A Ti Atribuimos la gloria", album: "Proezas", nota: "G", tipo: "Lenta" },
      { artista: "Miel San Marcos", cancion: "Intro(introduccion album)", album: "Como en el cielo", nota: "Bm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Deciende", album: "Como en el cielo", nota: "Bm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Como en el cielo", album: "Como en el cielo", nota: "C", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Rey vencedor", album: "Como en el cielo", nota: "F", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Fiesta", album: "Como en el cielo", nota: "Cm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Viene ya", album: "Como en el cielo", nota: "Am", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Dios esta aqui", album: "Como en el cielo", nota: "Bm", tipo: "Lenta" },
      { artista: "Miel San Marcos", cancion: "No hay lugar mas alto", album: "Como en el cielo", nota: "A", tipo: "Lenta" },
      { artista: "Miel San Marcos", cancion: "Danzo en el rio", album: "Pentecostes", nota: "Bm", tipo: "Rapida" },
      { artista: "Miel San Marcos", cancion: "Libre", album: "Pentecostes", nota: "Bm", tipo: "Lenta" },

    //Seccion de Toma tu lugar
    { artista: "Toma tu lugar", cancion: "Besos tus pies", album: "Uniendo cielo y tierra", nota: "C", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Padre nuestro", album: "Adora a Jesus", nota: "Bm", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Soy tu hijo", album: "Adora a Jesus", nota: "C", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Digno", album: "Adora a Jesus", nota: "A", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Al que esta sentado en el trono", album: "Adora a Jesus", nota: "A", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Toma tu lugar", album: "Adora a Jesus", nota: "D", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Para siempre Danzaremos", album: "Adora a Jesus", nota: "Bm", tipo: "Rapida" },
    { artista: "Toma tu lugar", cancion: "Uno en cristo(espontaneo)", album: "Uno en Cristo", nota: "C", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Sea la Luz", album: "Uno en Cristo", nota: "A", tipo: "Rapida" },
    { artista: "Toma tu lugar", cancion: "Fiesta en la luz(espontaneo)", album: "Uno en Cristo", nota: "A", tipo: "Rapida" },
    { artista: "Toma tu lugar", cancion: "Abba nunca falla", album: "Casa de Oracion", nota: "A", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Enseñanos a ser familia(espontaneo)", album: "Casa de Oracion", nota: "A", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Solo quiero verte a ti(Lindo, lindo es)", album: "Casa de Oracion", nota: "Am", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "En honor a ti", album: "Maranatha2", nota: "C", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Que ruja el leon", album: "Version toma tu lugar", nota: "Cm", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Ven Habitar", album: "Hogar dulce hogar", nota: "Am", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Atre mi corazon", album: "Toma tu lugar", nota: "Am", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Besame", album: "Toma tu lugar", nota: "G", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Hermoso no vuelo atras", album: "Dia y noche", nota: "G", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Eres Digno(Puente)", album: "Version Hashem", nota: "Bm", tipo: "Lenta" },
    { artista: "Toma tu lugar", cancion: "Cristo eres hermoso", album: "Dia y noche", nota: "Bm", tipo: "Rapida" },

    //Seccion de CTUE
    { artista: "CTUE", cancion: "En el nombre de Jesus", album: "Mi esperanza", nota: "C", tipo: "Rapida" },
    { artista: "CTUE", cancion: "Medley Que todos los pueblos ", album: "Mi esperanza", nota: "...", tipo: "Rapida" },
    { artista: "CTUE", cancion: "Es el tiempo", album: "Mi esperanza", nota: "C", tipo: "Rapida" },
    { artista: "CTUE", cancion: "Deseo eterno/Como en el cielo/Jeshua", album: "Mi esperanza", nota: "...", tipo: "Lenta" },
    { artista: "CTUE", cancion: "Hermoso nombre/Hay poder", album: "Mi esperanza", nota: "Bm", tipo: "Lenta" },

    //Seccion de Christine D'Clario
    { artista: "Christine D'Clario", cancion: "Yahweh", album: "Eterno Live", nota: "C", tipo: "Rapida" },

    //Seccion de Marcos barrientos
    { artista: "Marcos barrientos", cancion: "El señor esta en este lugar", album: "MB Auditorio Nacional", nota: "Em", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Amor sin condicion", album: "MB Auditorio Nacional", nota: "G", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Hossana", album: "MB Auditorio Nacional", nota: "Bm", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "No hay nadie como tu", album: "MB Auditorio Nacional", nota: "G", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Mas de ti", album: "MB Auditorio Nacional", nota: "G", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Fuego", album: "Vientos Mas fuego", nota: "A", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "De gloria en gloria", album: "Amanece", nota: "D#", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Cielo y tierra", album: "Amanece", nota: "Db", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Rey de reyes", album: "Amanece", nota: "D", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Desciende", album: "Amanece", nota: "B", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Lo unico que quiero", album: "Amanece", nota: "A", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "En una sola voz", album: "Amanece", nota: "A", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Nada es imposible", album: "Ilumina", nota: "A", tipo: "Rapida" },
    { artista: "Marcos barrientos", cancion: "Dios de lo imposible", album: "El encuentro", nota: "C", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Ven, espiritu, ven", album: "Encuentro con Dios", nota: "", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Dame de beber", album: "Encuentro con Dios", nota: "G", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Quiero mas de tu espiritu", album: "Encuentro con Dios", nota: "G", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Mi tesoro", album: "Exaltado", nota: "C", tipo: "Lenta" },
    { artista: "Marcos barrientos", cancion: "Reprice Her our praises/Hossana", album: "Transformados", nota: "Am", tipo: "Rapida" },

    //Geovani Canelo
    { artista: "Geovani Canelo", cancion: "La voz de mi amado", album: "Version Hashem", nota: "Am", tipo: "Rapida" },

    //CCINT
    { artista: "CCINT", cancion: "Bueno es Dios/Grita canta danza/yo tengo gozo", album: "Mi lugar secreto", nota: "...", tipo: "Rapida" },
    { artista: "CCINT", cancion: "Danza de amor/Cantos de liberacion/La mesa", album: "Una fuerte lluvia", nota: "...", tipo: "Rapida" },

    //ECCOS
    { artista: "ECCOS", cancion: "Santo por siempre", album: "Version CCINT", nota: "C", tipo: "Lenta" },
      
    //Evan Craft
    { artista: "Evan Craft", cancion: "Alaba", album: "Version Evan Craft", nota: "C", tipo: "Rapida" },

    //Averly Murillo
    { artista: "Averly Murillo", cancion: "Quien Podra", album: "Version Hashem", nota: "C#m", tipo: "Lenta" },
    { artista: "Averly Murillo", cancion: "Mesias ven", album: "Version Hashem", nota: "C#m", tipo: "Lenta" },

    //Jordan Mateo
    { artista: "Jordan Mateo", cancion: "Jeshua/La iglesia/Que ruja el leon", album: "Version Hashem", nota: "...", tipo: "Lenta" },

    //Zequi Alamo
    { artista: "Zequi Alamo", cancion: "Es tu amor", album: "Version Hashem", nota: "F#m", tipo: "Lenta" },

    //Monte Santo
    { artista: "Monte Santo", cancion: "La sumanita", album: "Version New Wine", nota: "C", tipo: "Lenta" },
    { artista: "Monte Santo", cancion: "Santo es el que vive", album: "Version Hashem", nota: "Am", tipo: "Lenta" },

    //Grace Rodriguez
    { artista: "Grace Rodriguez", cancion: "Nadie puede detenerle", album: "Version Hashem", nota: "Bm", tipo: "Lenta" },

    //Oasis Ministry
    { artista: "Oasis Ministry", cancion: "Pablo y silas(solo puente)", album: "Version Hashem", nota: "Bm", tipo: "Lenta" },
    { artista: "Oasis Ministry", cancion: "Yahweh se manifestara", album: "Version Hashem", nota: "Bm", tipo: "Lenta" },

    //Ebenezer
    { artista: "Ebenezer", cancion: "Desierto en paraiso", album: "Version Hashem", nota: "Gm", tipo: "Rapida" },

    //Hashem
    { artista: "Hashem", cancion: "No me busques en el mismo lugar", album: "Version Hashem", nota: "Am", tipo: "Rapida" },
    { artista: "Hashem", cancion: "Aleluya -Sebaot", album: "Version Hashem", nota: "Bm", tipo: "Lenta" },
    { artista: "Hashem", cancion: "Rio de Fuego", album: "Version Hashem", nota: "A", tipo: "Lenta" },
    { artista: "Hashem", cancion: "El canto de la tortola", album: "Version Hashem", nota: "Am", tipo: "Rapida" },
    { artista: "Hashem", cancion: "El lenguage de la fe", album: "Version Hashem", nota: "Am", tipo: "Rapida" },

    // Agrega más canciones aquí...
    ];