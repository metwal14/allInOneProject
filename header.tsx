import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

const Header = (props: { imageLeft: any; textCenter: any; }) => {
    const {imageLeft,textCenter} = props;
    return (
            <View style={styles.headerContainer}>
                {/* left most container */}
                <View style={styles.flexContainers}>
                    <Image
                        style={styles.arrow}
                        source={imageLeft}
                    />
                </View>
                {/* center container */}
                <View style={styles.flexContainers}>
                    <Text style={{ textAlign: 'center' }}>{textCenter}</Text>
                </View>
                {/* For giving the space in the rightes most corner */}
                <View style={styles.flexContainers} />
            </View>
    )
}
export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: '2%',
    },
    arrow:{
        width: 15, 
        height: 15,
    },
    flexContainers:{
        flex: 1,
    }

});