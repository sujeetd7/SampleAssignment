import React, { Component } from 'react';
import SearchPartyRenderer from './SearchPartyRenderer';
import { ActivityIndicator } from 'react-native';

export default class SearchParty extends Component {

    static navigationOptions = {
        header:null

    };

    constructor(props) {
        super(props);
        this.state = {
          BusinessData:[
            {
              aliasName: 'Alpha Business',
              primaryContactId: '5b630bc5b4dbfe0014f68aba',
              gstBusinessType: 'regular',
              address: 'Gautam Tower, Near \'B\' Cabin, off Gokhale Road, Thane',
              city: 'Thane',
              state: 'MH',
              pincode: '400601',
              country: 'India',
              gstin: '26CVBPT2222T1Z5',
              name: 'Alpha Business Test 1533217732',
              industry: 'IT',
              pancard: 'CVBPT2222T',
              name: 'Alpha Business Test 1533217732',
              id: '5b630bc5b4dbfe0014f68ab9'
            },
            {
              aliasName: 'Jewl',
              primaryContactId: '5b654cdf881c1d0014f4f31f',
              gstBusinessType: 'Regular GST Business',
              address: 'Shop 123',
              city: 'Mumbai',
              state: 'MH',
              pincode: '400012',
              country: 'India',
              gstin: 'AJ122458493',
              name: 'Jewel',
              industry: '',
              pancard: '',
              id: '5b654cdf881c1d0014f4f31e'
            },
            {
              aliasName: 'Aakash',
              primaryContactId: '5b879d5dd1f79c0014a7353d',
              gstBusinessType: 'Regular GST Business',
              address: '36,Swami Dayanand Marg, 36,Swami Dayanand Marg, SHRI GANGANAGAR [ RAJ ]-335001',
              state: 'RJ',
              pincode: '335001',
              country: 'India',
              name: 'Aakash Ganga Cosmetics',
              id: '5b879d09d1f79c0014a7276a'
            },
            {
              aliasName: 'AGRA-A TO Z',
              primaryContactId: '5b879d14d1f79c0014a72cb9',
              gstBusinessType: 'Regular GST Business',
              address: '16/18,Satya Narayan Market, 16/18,Satya Narayan Market, Luhar Gali, Agra',
              state: 'UP',
              pincode: '0',
              country: 'India',
              name: 'AGRA-A TO Z IMMITATION JEWELLERS',
              id: '5b879d09d1f79c0014a7276b'
            },
            {
              aliasName: 'Raj',
              primaryContactId: '5b879d10d1f79c0014a72a38',
              gstBusinessType: 'Regular GST Business',
              address: 'Lohar Gali, Lohar Gali, 31/103,Vivek Complex, AGRA',
              state: 'UP',
              pincode: '0',
              country: 'India',
              name: 'AGRA KUMAR & BROS',
              id: '5b879d09d1f79c0014a7276c'
            }
          ],
          BalanceData:[
            {
              balance: "11000.50",
              isDebit: "true",
              name: "Alpha Business Test 1533217732",
              id: "5b630bc5b4dbfe0014f68ab9"
            },
            {
              balance: "15000",
              isDebit: "true",
              name: "Jewel",
              id: "5b654cdf881c1d0014f4f31e"
            },
            {
              balance: "20000",
              isDebit: "false",
              name: "Aakash Ganga Cosmetics",
              id: "5b879d09d1f79c0014a7276a"
            },
            {
              balance: "40000.00",
              isDebit: "true",
              name: "AGRA-A TO Z IMMITATION JEWELLERS",
              id: "5b879d09d1f79c0014a7276b"
            },
            {
              balance: "10000.50",
              isDebit: "false",
              name: "AGRA KUMAR & BROS",
              id: "5b879d09d1f79c0014a7276c"
            }
          ],
          searchName:'',
          DupBusinessData:[],

        }
    }

    componentDidMount=()=>{
      this.setState({DupBusinessData:this.state.BusinessData});

    }

    modifyData=(selectedData)=>{
      this.state.BalanceData.forEach(item=>{
        if(selectedData.id===item.id){
          selectedData.balance=item.balance
          selectedData.isDebit=item.isDebit
        }
      })
      this.props.navigation.state.params.setData(selectedData);
      this.props.navigation.goBack()
    }

    searchBusiness=(val)=>{
      let BusinessName = '';
    let DupMessage = [];
    // this.setState({ friend: val },
    //   () => {
        BusinessName = val ?val : '';
        DupBusiness = [];
        // this.state.copyMessages = this.state.messages
        {
          this.state.BusinessData  ?
          this.state.BusinessData.forEach((item, index) => {
            if (item.name.toLowerCase().includes(BusinessName.toLowerCase()) 
              // item.senderMiddleName.toLowerCase().includes(BusinessName.toLowerCase()) ||
              // item.senderLastName.toLowerCase().includes(BusinessName.toLowerCase())
              ){
              DupBusiness.push(item);
            }
            // this.setState({ copyMessages: DupMessage,friend: val  });
          }) : null
          this.setState({ DupBusinessData: DupBusiness,searchName: val  });
        }

    }

    render() {
        if (this.state.loading) {
          return (
             <ActivityIndicator size="large" color="#0000ff" style={styles.loadingCenter} />
          );
        }
        return SearchPartyRenderer(this);
    
      }
    
}