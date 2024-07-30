import { TouchableOpacity, View } from 'react-native'
import { Search } from 'lucide-react-native'

export default function ContactsHeaderRight() {
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableOpacity onPress={() => alert('This is a search!')} style={{ marginRight: 18 }}>
				<Search size={25} color="#000" />
			</TouchableOpacity>
		</View>
	)
}