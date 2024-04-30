import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Agendamento({ name, price, items}: {name: string, price: number, items: Array<string>}) {
  return (
    <TouchableOpacity activeOpacity={0.3}>
      <View style={styles.container}> 
        <Text style={[styles.name, styles.bold]}>{name}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
        <Text>{items.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#DCDCDC',
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'#00008B'
  },

  bold: {
    fontWeight: 'bold'
  },

  price: {
    fontSize: 13,
    color: '#FF8C00',
    fontWeight: 'bold'
  }
})