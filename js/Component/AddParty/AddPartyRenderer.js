'use-strict'
import React, { Component } from 'react'
import {
  View,
  Image,
  ImageBackground,
  ScrollView,
  ListView,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Keyboard
} from 'react-native'
import { StackNavigator } from "react-navigation";
import { connect } from 'react-redux'
import SearchParty from '../SearchParty/index';
// import { Field, reduxForm, getFormValues, getFormInitialValues, getFormNames } from "redux-form";
import styles from './styles'
// const PickerItem = Picker.Item;
import {
  Container,
  Content,
  Button,
  Text,
  Left,
  Body,
  Right,
  CardItem,
  Header,
  Icon,
  Input,
  Row,
  Col,
  Label,
} from 'native-base'

AddPartyRenderer = (addParty) => {
  return (
    <Container>
      <Header androidStatusBarColor="#000000" style={styles.header}>
        <Left style={{ flex: 1, flexDirection: 'row' }}>
          <Button
            transparent
            onPress={() => addParty.props.navigation.goBack()}
          >
            <Icon
              name='md-arrow-round-back'
              style={{ color: '#ffffff', fontSize: 25 }}
            />
          </Button>
          <Text style={{ alignSelf: 'center', color: '#ffffff' }}>
            Add Party
          </Text>
        </Left>

        <Body />
        <Right style={{ flex: 1 }}>
          <Button transparent  disabled={addParty.state.selectedParty===null?true:false}>
            <Text>Save</Text>
          </Button>
        </Right>
      </Header>
      <Content>
        <View>
          <Row>
            <Col size={15}>
              {/* <View
                style={{
                  margin: 5,
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 10
                }}
              > */}
                <Col size={7}>
                 <CardItem>
                   <Row>
                     <Label>
                       Party Details
                       </Label>
                     </Row>
                   </CardItem>
                </Col>
              {/* </View> */}
            </Col>
          </Row>
          <Row>
            <Col>
            { addParty.state.selectedParty==null?
              <View>
                <CardItem
                  button
                  activeOpacity={100}
                  style={{ backgroundColor: '#ffffff' }}
                  onPress={()=>addParty.props.navigation.navigate("SearchParty",{setData : (data) => addParty.setData(data)})}
                >
                  <Col size={2}>
                   <Icon name="user-circle-o" type="FontAwesome" style={{color:'#4964DA'}}/>
                  </Col>
                  <Col size={12}>
                  <Text style={{color:'#4964DA'}}>
                    +add Party
                    </Text>
                  </Col>
                  <Col size={1}>
                  <Icon name="ios-arrow-forward" type="Ionicons" />
                  </Col>
                </CardItem>
              </View>
              :
              <View>
                  <CardItem button style={{flexDirection:'column'}}>
                <Row>
                  <Col>
                    <Text>{addParty.state.selectedParty.name}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>{addParty.state.selectedParty.address}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Text>Current Balance: Rs.{addParty.state.selectedParty.balance} Dr</Text>
                  </Col>
                  </Row>
              </CardItem>
                </View> }
            </Col>
          </Row>
        </View>
      </Content>
    </Container>
  )
}
module.exports = AddPartyRenderer
