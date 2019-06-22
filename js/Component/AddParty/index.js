import React, { Component } from 'react';
import AddPartyRenderer from './AddPartyRenderer';
import { ActivityIndicator } from 'react-native';

export default class AddParty extends Component {

    static navigationOptions = {
        header:null

    };

    constructor(props) {
        super(props);
        this.state = {
          selectedParty:null
        }
    }
    setData=(data)=>{
      this.setState({selectedParty:data});

    }

    render() {
        if (this.state.loading) {
          return (
             <ActivityIndicator size="large" color="#0000ff" style={styles.loadingCenter} />
          );
        }
        return AddPartyRenderer(this);
    
      }
    
}