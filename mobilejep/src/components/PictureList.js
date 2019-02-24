import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getPictureList } from '../actions';
import PictureListItem from './PictureListItem';

const styles = {
    paddingView: {
        flex: 1
    }
};

class PictureList extends Component {
    componentDidMount() {
        this.props.getPictureList();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ pictList }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(pictList);
        this.dataSource._dataBlob.s1 = this.dataSource._dataBlob.s1.reverse()
    }

    renderRow = ({pict}) => {
        return <PictureListItem pict={pict} navigation={this.props.navigation} />
    }

    render() {
        const {paddingView} = styles;
        return (
            <View style={paddingView}>
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        </View>
        );
    }
}

const mapStateToProps = (state) => {
    const pictList = _.map(state.pictList, (val, uid) => {
        return { ...val, uid };
    });
    return { pictList };
};

export default connect(mapStateToProps, { getPictureList })(PictureList);
