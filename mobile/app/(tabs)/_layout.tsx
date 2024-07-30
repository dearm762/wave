import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Bolt, MessageCircle, UsersRound } from 'lucide-react-native'
import MessagesHeaderRight from '@/components/tabs/header/messages-right'
import ContactsHeaderRight from '@/components/tabs/header/contacts-right'

export default function TabsLayout() {
  return (
    <>
      <StatusBar style='dark' />
      <Tabs initialRouteName='messages' screenOptions={{
        tabBarLabelStyle: {
          fontSize: 12
        }
      }}>
        <Tabs.Screen
          name="messages"
          options={{
            title: 'Messages',
            headerTitleAlign: 'left',
            headerRight: () => <MessagesHeaderRight />,
            tabBarIcon: ({ color, size }) => (
              <MessageCircle size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="contacts"
          options={{
            title: 'Contacts',
            headerRight: () => <ContactsHeaderRight />,
            tabBarIcon: ({ color, size }) => (
              <UsersRound size={size} color={color} />
            )
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Bolt size={size} color={color} />
            )
          }}
        />
      </Tabs>
    </>
  )
}
