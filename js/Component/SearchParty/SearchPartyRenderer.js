'use-strict'
import React, { Component } from 'react'
import {
  View,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
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
  CardItem,
  Header,
  Row,
  Col,
  Icon,
  Input
} from 'native-base'

const deviceHeight = Dimensions.get('window').height

SearchPartyRenderer = (searchParty) => {
 return(
  <Container>
      <Header androidStatusBarColor="#000000" style={styles.header}>
        <Left style={{ flex: 1, flexDirection: 'row' }}>
          <Button
            transparent
            onPress={() => searchParty.props.navigation.goBack()}
          >
            <Icon
              name='md-arrow-round-back'
              style={{ color: '#000000', fontSize: 25 }}
            />
          </Button>
          <Input
            style={{ justifyContent: 'center' }}
            placeholder='Enter Party Name..'
            value={searchParty.state.searchName}
            // onChangeText={(val) => message.setState({ friend: val })}
            onChangeText={(val) => searchParty.searchBusiness(val)}
          />
        </Left>

        <Body />
      </Header>
      <Content style={{flex:1}}>
      {searchParty.state.DupBusinessData.length>0?
        <View>
          <FlatList
            data={searchParty.state.DupBusinessData}
            renderItem={({ item, index }) => (
              <CardItem button style={{flexDirection:'column'}} onPress={()=>searchParty.modifyData(item)}>
                <Row>
                  <Col>
                    <Text>{item.name}</Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text>{item.address}</Text>
                  </Col>
                </Row>
              </CardItem>
            )}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.5}
            keyExtractor={item => item.id}
          />
        </View>
      :
      <View style={{justifyContent:'center', flex:1}}>
        <Row style={{ alignSelf:'center', marginTop:35}}>
          <Image
          style={{width:80,height:80}}
          source={require('../../../Image/SearchCross.png')}
        />
          </Row>
          <Row style={{ alignSelf:'center',marginVertical:10}}>
            <Text style={{fontSize:21,color:'#868686'}}>
              No Search Found For '{searchParty.state.searchName}'
              </Text>
            </Row>
            <Row style={{ alignSelf:'center',marginVertical:10}}>
              <Button style={{backgroundColor:'#26D367', width:250,height:50,borderRadius:19,justifyContent:'center'}}>
                <Text>
                  + Create Party
                  </Text>
                </Button>
              </Row>
        </View>
        }
      </Content>
    </Container>
  )
}
module.exports = SearchPartyRenderer
