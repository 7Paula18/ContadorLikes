import React, { useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert
} from "react-native";

export default function App() {

  // Estado que almacena la cantidad de likes
  const [likes, setLikes] = useState(0);

  // Estado que almacena los registros
  const [registros, setRegistros] = useState([]);

  // Función que se ejecuta al pulsar el botón
  const agregarLike = () => {

    // Aumentar la cantidad de likes
    const nuevoLike = likes + 1;
    setLikes(nuevoLike);

    // Obtener la hora actual
    const hora = new Date().toLocaleTimeString("es-CO", {
      hour12: false
    });

    // Reiniciar el contador y eliminar los registros
    const reiniciarContador = () => {
      setLikes(0);
      setRegistros([]);
    };

    // Crear el nuevo registro
    const nuevoRegistro = {
      id: Date.now().toString(),
      numero: nuevoLike,
      hora: hora
    };

    // Agregar el registro al inicio de la lista
    setRegistros((anteriores) => [
      nuevoRegistro,
      ...anteriores
    ]);
  };

  return (
    <View style={styles.contenedor}>

      <Text style={styles.titulo}>
        Contador de Likes
      </Text>

      <Text style={styles.descripcion}>
        Presiona el botón para registrar un like.
      </Text>

      <View style={styles.tarjeta}>

        <Text style={styles.subtitulo}>
          Total de Likes
        </Text>

        <Text style={styles.contador}>
          {likes}
        </Text>

        <TouchableOpacity
          style={styles.boton}
          onPress={agregarLike}
        >
          <Text style={styles.textoBoton}>
            Me gusta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonReiniciar}
          onPress={reiniciarContador}
        >
          <Text style={styles.textoBotonReiniciar}>
            Reiniciar contador
           </Text>
        </TouchableOpacity>

      </View>

      <Text style={styles.subtitulo}>
        Registro de Likes
      </Text>

      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.mensaje}>
            Todavía no hay likes registrados.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.fila}>
            <View>
              <Text style={styles.numeroLike}>
                Like #{item.numero}
              </Text>

              <Text style={styles.textoHora}>
                Registro realizado
              </Text>
            </View>

            <Text style={styles.textoHora}>
              {item.hora}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

// Estilos de la aplicación
const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 25,
    paddingTop: 65
  },

  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#263445",
    marginBottom: 10
  },

  descripcion: {
    textAlign: "center",
    color: "#555",
    marginBottom: 25
  },

  tarjeta: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30
  },

  subtitulo: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#263445"
  },

  contador: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 15
  },

  boton: {
    backgroundColor: "#16a34a",
    paddingVertical: 13,
    paddingHorizontal: 35,
    borderRadius: 8
  },

  textoBoton: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },

  mensaje: {
    textAlign: "center",
    color: "#777",
    marginTop: 10
  },

  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 8,
    borderRadius: 8
  },

  textoFila: {
    fontSize: 14,
    color: "#333"
  },

  botonReiniciar: {
    backgroundColor: "#dc2626",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 12 
  },

  textoBotonReiniciar: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },

  numeroLike: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#2563eb"
},

textoHora: {
  fontSize: 13,
  color: "#64748b"
},

});
