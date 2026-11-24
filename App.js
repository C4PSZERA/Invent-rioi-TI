import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, SafeAreaView } from 'react-native';

// Simulação de dados de hardware (Notebooks do CDD)
const DATA = [
  { id: '1', modelo: 'Dell Latitude 3420', setor: 'Logística', status: 'Pendente' },
  { id: '2', modelo: 'Lenovo ThinkPad L14', setor: 'Financeiro', status: 'Pendente' },
  { id: '3', modelo: 'HP ProBook 445', setor: 'Vendas', status: 'Pendente' },
];

export default function AppInventario() {
  const [equipamentos, setEquipamentos] = useState(DATA);

  const marcarComoRevisado = (id) => {
    // Atualiza o status de forma imutável (boa prática de state no React)
    const novaLista = equipamentos.map(item => 
      item.id === id ? { ...item, status: 'Revisado' } : item
    );
    setEquipamentos(novaLista);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.modeloText}>{item.modelo}</Text>
      <Text style={styles.setorText}>Setor: {item.setor}</Text>
      
      {/* Pressable: componente de toque recomendado no React Native */}
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: item.status === 'Revisado' ? '#4CAF50' : '#2196F3' },
          pressed && { opacity: 0.7 }
        ]}
        onPress={() => marcarComoRevisado(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.status === 'Revisado' ? '✓ Concluído' : 'Marcar Revisado'}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Inventário TI - Ambev PR</Text>
      {/* FlatList renderiza só o que está na tela (melhor performance) */}
      <FlatList
        data={equipamentos}
        renderItem={renderItem}
        keyExtractor={item => item.id} // chave única de cada item
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 40 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  card: { 
    backgroundColor: '#fff', 
    padding: 15, 
    marginHorizontal: 16, 
    marginVertical: 8, 
    borderRadius: 8,
    elevation: 3 // Sombra no Android
  },
  modeloText: { fontSize: 18, fontWeight: 'bold' },
  setorText: { fontSize: 14, color: '#666', marginBottom: 10 },
  button: { padding: 12, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});