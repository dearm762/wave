import { TouchableOpacity, View } from 'react-native'
import { Camera, Search } from 'lucide-react-native'

export default function MessagesHeaderRight() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => alert('This is a camera!')} style={{ marginRight: 20 }}>
				<Camera size={25} color="#000" />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => alert('This is a search!')} style={{ marginRight: 18 }}>
				<Search size={25} color="#000" />
			</TouchableOpacity>
		</View>
	)
}