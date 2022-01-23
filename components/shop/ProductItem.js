import React from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Image, Button, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = props => {
    return (<View style={styles.product}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.image}}/>
        </View>
        <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.buttons}>
            <Button color={Colors.primary} title='View Details' onPress={props.onViewDetails}/>
            <Button color={Colors.primary} title='To Cart' onPress={props.onAddToCart}/>
        </View>
    </View>)
};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 1},
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 300,
        margin: 20
    },
    imageContainer: {
      width: '100%',
      height: '60%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 16,
        marginVertical: 4
    },
    price: {
        fontSize: 16,
        color: 'grey'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }

});

ProductItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    onViewDetails: PropTypes.func,
    onAddToCart: PropTypes.func
}

export default ProductItem;