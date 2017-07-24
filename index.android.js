/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    Image
} from 'react-native';
import Header from './header'

export default class Weather extends Component {


    state = {
        name: 'Chiang Mai',
        icon: 'openweathermap.org/img/w/10d.png',
        temp: 'C',
        weather1: '',
        weather2: '',
        weather3: '',
        weather4: '',
        weather5: '',
        icon1: '',
        icon2: '',
        icon3: '',
        icon4: '',
        icon5: '',
        temp1: '',
        temp2: '',
        temp3: '',
        temp4: '',
        temp5: '',
        time1: '',
        time2: '',
        time3: '',
        time4: '',
        time5: '',
        bg: 'http://i2.getwestlondon.co.uk/incoming/article7287705.ece/ALTERNATES/s615/_JPF4232.jpg'


    };

    componentWillMount() {
        this.fetchData();
    }

    _log() {
        console.log(this.state)
    }

    updateName = (temp) => {
        this.setState({temp: temp})
    }


    _handleName(event) {
        var name = event.nativeEvent.text;
        this.fetchData()
        this.setState({
                name: name,
            },
            this._log
        );
    }

    _handlebg = (temp) => {
        this.setState({temp: temp})
    }

    fetchData() {
        var appid = '560588cff47ae8a8df0af3e66a968695';

        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + this.state.name + '&appid=' + appid)

            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({
                    weather1: responseJSON.list[0].weather[0].main,
                    icon1: 'openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
                    temp1: responseJSON.list[0].main.temp,
                    time1: responseJSON.list[0].dt,
                    weather2: responseJSON.list[8].weather[0].main,
                    icon2: 'openweathermap.org/img/w/' + responseJSON.list[8].weather[0].icon + '.png',
                    temp2: responseJSON.list[8].main.temp,
                    time2: responseJSON.list[8].dt,
                    weather3: responseJSON.list[16].weather[0].main,
                    icon3: 'openweathermap.org/img/w/' + responseJSON.list[16].weather[0].icon + '.png',
                    temp3: responseJSON.list[16].main.temp,
                    time3: responseJSON.list[16].dt,
                    weather4: responseJSON.list[24].weather[0].main,
                    icon4: 'openweathermap.org/img/w/' + responseJSON.list[24].weather[0].icon + '.png',
                    temp4: responseJSON.list[24].main.temp,
                    time4: responseJSON.list[24].dt,
                    weather5: responseJSON.list[32].weather[0].main,
                    icon5: 'openweathermap.org/img/w/' + responseJSON.list[32].weather[0].icon + '.png',
                    temp5: responseJSON.list[32].main.temp,
                    time5: responseJSON.list[32].dt

                });
                console.log(this.state.weather1)
                console.log(this.state.weather2)
                console.log(this.state.weather3)
                console.log(this.state.weather4)
                console.log(this.state.weather5)
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    fahrenheit(temp) {
        return (((temp - 273) * 9 / 5) + 32);

    }

    celsius(temp) {
        return (temp - 273.0);

    }

    temperature(num) {
        return (Math.round(num * 10) / 10);

    }

    timeStampToDay(timestamp) {
        var t = new Date(timestamp * 1000);
        var formatted = moment(t).format("MMMM");
        return formatted;
    }

    timeStampToMonth(timestamp) {
        var t = new Date(timestamp * 1000);
        var formatted = moment(t).format("dddd");
        return formatted;

    }

    showTemp(temp) {
        if (this.state.temp == 'C') {
            return this.temperature(this.celsius(temp))
        } else {
            return this.temperature(this.fahrenheit(temp))
        }
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Image source={{uri: this.state.bg}} style={styles.backgroundImage}>
                    < Header myState={'Weather forecast'}/>
                    <View style={styles.container}>

                        <Text style={{fontSize: 18, color: '#e57373', flex: 1}}>
                            My Location
                        </Text>
                        <TextInput style={{width: 100, flex: 1,}} onSubmitEditing={(event) => this._handleName(event)}/>
                        <Picker style={{flex: 1, color: '#e57373'}} selectedValue={this.state.temp}
                                onValueChange={this.updateName}>
                            <Picker.Item label="Celsius" value="C"/>
                            <Picker.Item label="Fahrenheit" value="F"/>

                        </Picker>

                    </View>
                    <View style={styles.weatherContainer}>
                        <Text style={styles.cityName}>
                            {this.state.name}
                        </Text>

                        <View style={{flexDirection: 'row', alignSelf: 'center'}}>

                            <View style={{flex: 1}}>
                                <Image style={styles.centerImage}
                                       source={{uri: 'http://' + this.state.icon1, isStatic: true}}
                                       resizeMode='cover'>
                                </Image>
                                <Text style={styles.center}> {this.state.weather1}</Text>
                                <Text style={styles.center}>{this.showTemp(this.state.temp1)}</Text>
                                <Text style={styles.center}>{this.timeStampToDay(this.state.time1)}</Text>
                                <Text style={styles.center}>{this.timeStampToMonth(this.state.time1)}</Text>


                            </View>
                            <View style={{flex: 1}}>
                                <Image source={{uri: 'http://' + this.state.icon2, isStatic: true}}
                                       style={{width: 50, height: 50}} resizeMode='cover'>
                                </Image>
                                <Text style={styles.center}> {this.state.weather2}</Text>
                                <Text style={styles.center}>{this.showTemp(this.state.temp2)}</Text>
                                <Text style={styles.center}>{this.timeStampToDay(this.state.time2)}</Text>
                                <Text style={styles.center}>{this.timeStampToMonth(this.state.time2)}</Text>

                            </View>
                            <View style={{flex: 1}}>
                                <Image source={{uri: 'http://' + this.state.icon3, isStatic: true}}
                                       style={{width: 50, height: 50}} resizeMode='cover'>
                                </Image>
                                <Text style={styles.center}> {this.state.weather3}</Text>
                                <Text style={styles.center}>{this.showTemp(this.state.temp3)}</Text>
                                <Text style={styles.center}>{this.timeStampToDay(this.state.time3)}</Text>
                                <Text style={styles.center}>{this.timeStampToMonth(this.state.time3)}</Text>

                            </View>
                            <View style={{flex: 1}}>
                                <Image source={{uri: 'http://' + this.state.icon4, isStatic: true}}
                                       style={{width: 50, height: 50}} resizeMode='cover'>
                                </Image>
                                <Text style={styles.center}> {this.state.weather4}</Text>
                                <Text style={styles.center}>{this.showTemp(this.state.temp4)}</Text>
                                <Text style={styles.center}>{this.timeStampToDay(this.state.time4)}</Text>
                                <Text style={styles.center}>{this.timeStampToMonth(this.state.time4)}</Text>

                            </View>
                            <View style={{flex: 1}}>
                                <Image source={{uri: 'http://' + this.state.icon5, isStatic: true}}
                                       style={{width: 50, height: 50}} resizeMode='cover'>
                                </Image>
                                <Text style={styles.center}>{this.state.weather5}</Text>
                                <Text style={styles.center}>{this.showTemp(this.state.temp5)}</Text>
                                <Text style={styles.center}>{this.timeStampToDay(this.state.time5)}</Text>
                                <Text style={styles.center}>{this.timeStampToMonth(this.state.time5)}</Text>

                            </View>
                        </View>

                    </View>
                    <View style={styles.weatherContainer}>
                        <Picker
                            selectedValue={this.state.bg}
                            onValueChange={(itemValue, itemIndex) => this.setState({bg: itemValue})}>

                            <Picker.Item label="Sunny"
                                         value="http://i2.getwestlondon.co.uk/incoming/article7287705.ece/ALTERNATES/s615/_JPF4232.jpg"/>
                            <Picker.Item label="Thunderstorm"
                                         value="https://fthmb.tqn.com/oqv9GcRFVVgcm1HdaFdSEg1D0Sg=/1280x847/filters:no_upscale():fill(FFCC00,1)/about/92173281-56a2acf75f9b58b7d0cd4cee.jpg"/>
                            <Picker.Item label="Snow"
                                         value="http://clv.h-cdn.co/assets/16/01/980x490/landscape-1451931547-snowquotesindex.jpg"/>
                            <Picker.Item label="Cloudy"
                                         value="https://s-media-cache-ak0.pinimg.com/736x/62/fb/e9/62fbe9a1145526ebf1f7fc795236100c--stormy-sea-cloudy-day.jpg"/>

                        </Picker>
                    </View>
                </Image>
            </View>






        );
    }
}

var moment = require('moment');
styles = require('./Styles');
/*const styles = StyleSheet.create({
 container: {W
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
 },
 welcome: {
 fontSize: 20,
 textAlign: 'center',
 margin: 10,
 },
 instructions: {
 textAlign: 'center',
 color: '#333333',
 marginBottom: 5,
 },
 });*/

AppRegistry.registerComponent('Weather', () => Weather);
