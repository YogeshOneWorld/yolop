import {  View } from 'react-native'
import React from 'react'
import styles from './styles'


export default function UserImage({ icon, editIcon, editIconbgColor }) {
    return (
        <View style={styles.background}>
            {icon}
            {editIcon &&
                <View style={[styles.editImage, { backgroundColor: editIconbgColor }]}>
                    {editIcon}
                </View>
            }
        </View>


    )
}
