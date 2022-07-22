import { Text, View, FlatList } from 'react-native'
import React from 'react'
import styles from './styles'

export default function UserDetailBox({data}) {

    const renderItem = ({item}) => {
        return (
            <View style={styles.boxView}>
                <Text style={styles.heading}>{item.name}</Text>
                <Text style={styles.title}>{item.data}</Text>
            </View>
        )
    }

  return (
    <View>
     <FlatList 
     data={data}
     keyExtractor={(_item, index) => index.toString()}
     renderItem={renderItem}
     />
    </View>
  )
}
