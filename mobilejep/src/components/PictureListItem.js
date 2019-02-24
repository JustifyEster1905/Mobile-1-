import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './common';
import { connect } from 'react-redux';

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex:1
    }
};

const PictureListItem = ({pict}) => {
    const {user, image, caption} = pict;
    const {headerContentStyle ,headerTextStyle, thumbnailStyle, thumbnailContainerStyle, imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style = {thumbnailStyle} source = {{ uri: image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{user}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                style={imageStyle}
                source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{user}: {caption}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

const mapStateToProps = (state) => {
    const { user } = state.auth;

    return { user };
}

export default connect(mapStateToProps, {})(PictureListItem);