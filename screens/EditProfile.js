import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import ArrowBack from '../assets/svg/arrow_back_ios.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import ButtonCommon from '../components/ButtonCommon';
import { ScrollView } from 'react-native-gesture-handler';

const countries = [
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'},
];

export default function Information({navigation, route}) {
  const [openDate, setOpenDate] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [valueC, setValueC] = useState(null);
  const listCountries = countries.map(item => ({
    label: item.name,
    value: item.code,
  }));
  const [items, setItems] = useState(listCountries);

  const [openG, setOpenG] = useState(false);
  const [valueG, setValueG] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ]);

  const [date, setDate] = useState(new Date());

  const refInput = useRef();

  useEffect(() => {
    if (openCountry) {
      refInput?.current?.focus();
    } else {
      refInput?.current?.blur();
    }
  }, [openCountry]);

  const [textSearch, setTextSearch] = useState('');
  useEffect(() => {
    if (textSearch) {
      setItems(
        countries.reduce((array, item) => {
          if (item.name.toLowerCase().includes(textSearch.toLowerCase())) {
            array.push({label: item.name, value: item.code});
          }
          return array;
        }, []),
      );
    } else {
      setItems(countries.map(item => ({label: item.name, value: item.code})));
    }
  }, [textSearch]);

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const pressSaveBtn = () => {
    if (!fName || !lName || !email || !date || !valueG || !valueC) {
      setError('Please input your data');
    } else {
      navigation.navigate({
        name: 'MyProfile',
        params: {
          fName,
          lName,
          email,
          valueG,
          valueC,
          date: date.toISOString(),
        },
        merge: true,
      });
    }
    // console.log(date.toISOString())
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: 20,
        }}>
        <ArrowBack />
        <Text style={styles.text}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image
          style={styles.img}
          source={require('../assets/imgs/avatar.png')}
        />
      </View>
      
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>First Name</Text>
        <View style={styles.item}>
          <TextInput
            placeholder="Your first name"
            value={fName}
            onChangeText={setFName}
            style={{marginLeft: 5}}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Last Name</Text>
        <View style={styles.item}>
          <TextInput
            placeholder="Your last name"
            value={lName}
            onChangeText={setLName}
            style={{marginLeft: 5}}
          />
        </View>
      </View>
      <View style={[styles.itemContainer, {zIndex: 1}]}>
        <Text style={styles.itemText}>Gender</Text>
        <View style={styles.itemDropdown}>
          <DropDownPicker
            open={openG}
            value={valueG}
            items={gender}
            setOpen={setOpenG}
            setValue={setValueG}
            setItems={setGender}
          />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Birthday</Text>
        <View style={styles.item}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            title="Open"
            onPress={() => setOpenDate(true)}>
            <Text>{date ? date.toDateString() : 'MM/DD/YYYY'}</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            open={openDate}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
            onDateChange={(date) => { this.props.onDateChange && this.props.onDateChange(date);this.setState({ date }); }}
          />
        </View>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Email</Text>
        <View style={styles.item}>
          <TextInput
            placeholder="Example@gmail.com"
            value={email}
            onChangeText={setEmail}
            style={{marginLeft: 5}}
          />
        </View>
      </View>
      <View style={[styles.itemContainer]}>
        <Text style={styles.itemText}>Location</Text>
        <View style={styles.item}>
          {openCountry && (
            <TextInput
              ref={refInput}
              style={{
                padding: 10,
                borderWidth: 1,
                marginBottom: 10,
                backgroundColor: '#999',
                zIndex: 10,
              }}
              value={textSearch}
              onChangeText={setTextSearch}
              placeholder={'Search'}
            />
          )}
          <DropDownPicker
            open={openCountry}
            value={valueC}
            items={items}
            setOpen={setOpenCountry}
            setValue={setValueC}
            setItems={setItems}
          />
        </View>
      </View>
      {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}
      <ButtonCommon
        text="Save"
        customStyle={{
          width: '100%',
          marginTop: 100,
        }}
        onPress={pressSaveBtn}
      />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: 'red'
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 100,
  },
  img: {
    marginTop: 20,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    height: 55,
  },
  itemText: {
    width: '30%',
  },
  item: {
    // backgroundColor: 'red',
    width: '70%',
  },
  itemDropdown: {
    // backgroundColor: 'red',
    width: '70%',
    zIndex: 100,
  },
  errorText: {
    color: 'red',
    marginTop: 20,
  },
});
