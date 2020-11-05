import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { Messages } from '../constants/Messages'

class MessagesScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Animated.ScrollView>
          {Messages.map((user, i) => (
            <ListItem
              key={i}>
              <Avatar rounded source={user.pic} size='large'/>
              <ListItem.Content>
              <ListItem.Title style={styles.title}>
              {user.title}
                </ListItem.Title>
              <ListItem.Subtitle style={styles.subtitle}>
              {user.message}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
            </ListItem>
          ))}
        </Animated.ScrollView>
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

    // {Messages.map((user, i) => (
    //         <ListItem key={i}>
    //             <ListItem.Content>
    //               <ListItem.Title style={styles.title}>
    //                 {user.title}
    //               </ListItem.Title>
    //               <ListItem.Subtitle style={styles.subtitle}>
    //                 {user.message}
    //               </ListItem.Subtitle>
    //               <Avatar>
    //                 <Avatar.Accessory source={user.pic} size='large'/>
    //               </Avatar>
    //             </ListItem.Content>
    //           </ListItem>
    //       ))}


    // leftAvatar={{ source: user.pic, size: 'large' }}
    //           title={user.title}
    //           titleStyle={styles.title}
    //           subtitle={user.message}
    //           subtitleStyle={styles.subtitle}
    //           chevron
    //         />