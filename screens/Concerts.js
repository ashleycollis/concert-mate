import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios'
import { ticketMasterApiKey } from '../constants/ApiKeys';

export default class Concert extends Component {
    state = {
        tableHead: ['Event', 'Date', "Venue", "Price Range"],
        tableData: [],
        concerts: []
    };

    componentDidMount() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?limit=50&source=ticketmaster&classificationName=music&dmaId=345&apikey=${ticketMasterApiKey}`)
            .then(response => this.setState({
                    tableData: response['data']['_embedded']['events'].filter(event =>
                        event['priceRanges'] && event['priceRanges'].length > 0
                    ).map(x =>
                        [
                            x['name'],
                            x['dates']['start']['localDate'],
                            x['_embedded']['venues'][0]['name'],
                            "$" + x['priceRanges'][0]['min'] + " - " + "$" + x['priceRanges'][0]['max']
                        ]
                    ).sort(function(a, b) {
                        let dateA = a[1];
                        let dateB = b[1];
                        if (dateA < dateB) {
                            return -1;
                        }
                        if (dateA > dateB) {
                            return 1;
                        }
                        return 0;
                    })
                })
            )
    }

    render() {
        const state = this.state;
        return (
            <ScrollView style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 60, paddingBottom: 100, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});