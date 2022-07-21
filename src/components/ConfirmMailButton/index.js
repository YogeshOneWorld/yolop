import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import Checkbox from '@assets/checkbox.svg'
import Mail from '@assets/mail.svg'
import Row from '@components/Row'
import { commonStyle } from '@utils/commonStyle'

export default function ConfirmButton({ icon, heading, title }) {
    return (
        <TouchableOpacity style={styles.button}>
            <Row>
                {icon && <View style={styles.icon}>
                    {icon}
                </View>
                }
                <View>
                    <Text style={styles.heading}>{heading}</Text>
                    <Text style={commonStyle.commonSmallText}>{title}</Text>
                </View>
            </Row>
        </TouchableOpacity>
    )
}
