import React, { Component } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from "react-native-base";

export default class InfoCard extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>About app</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                 Have you ever been in a situation where you remembered to do something and then immediately forgot?
                 Well, pinNote takes care of that problem for you, as all you have to do is type it in and evry time you check your notifications,youll be constantly reminded!
                 To create a new notification,enter your text in the box and press the save button
                 contact: banker.aryan@gmail.com
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>I CAN MAKE A FOOTER WAA</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}