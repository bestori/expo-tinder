import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Avatar, ListItem, ListItemProps } from 'react-native-elements'
import { Messages } from '../constants/Messages'

class MessagesScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          {Messages.map((user, i) => (
            <ListItem key={i}>
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    {user.title}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>
                    {user.message}
                  </ListItem.Subtitle>
                  <Avatar>
                    <Avatar.Accessory source={user.pic} size='large'/>
                  </Avatar>
                  <ListItem.Chevron />
                </ListItem.Content>
              </ListItem>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#3F3F3F',
  },
  subtitle: {
    color: '#A5A5A5',
  },
})

export default MessagesScreen
