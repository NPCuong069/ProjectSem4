import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert, Button, ScrollView
} from 'react-native';
import { Searchbar } from 'react-native-paper';
const ForumScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ flex: 1, backgroundColor: "#b5b9bd", alignItems: 'center' }} justifyCenter alignCenter>
            
            <View padding={10} width={'99%'} >
                <Searchbar
                    placeholder="Tìm bài viết"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
             
            </View>
            <ScrollView width={'100%'}>
            <View justifyCenter width={'98%'} style={{
                backgroundColor: "white", borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }} >
                <View style={{ backgroundColor: '#ebeced', height: 40, borderColor: '#d3d5d7', borderBottomWidth: 1, alignItems: 'flex-end' }}>
                    <Button
                        title="Filter"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Xin tips học luật nhanh thuộc</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 30</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Luật sư nghèo hay giàu</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 28</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm qua, 7:18AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Bị chủ nhà trọ đuổi, cần tư vấn</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 22</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 24</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Chủ nhật, 3:19AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Nghĩa</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Học luật ở trường nào tốt nhất</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 23</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Thứ ba, 2:09PM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Trung</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Xin tips học luật nhanh thuộc</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 20</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Thứ sáu, 1:10PM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Xin vài công ty luật uy tín</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 19</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Cách nhận biết luật hết hạn</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 10</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Đại hội đại biểu</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: 10</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Tại sao ngành luật hết hot</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: -7</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row',borderBottomWidth: 1,  borderColor: '#d3d5d7', padding:8 }} >
                    <View style={{ flex: 4 }}>
                        <Text style={{fontSize:15, color:'#23497c'}}>Nên theo luật gì hiện nay</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 12 }}>Replies: 30</Text>
                        <Text style={{ fontSize: 12 }}>Vote: -10</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 12 }}>Hôm nay, 7:09AM</Text>
                        <Text  style={{ fontSize: 12 }}>Trần Khang</Text>
                    </View>
                </View>
                
                
                
            </View>
            </ScrollView>
        </View>
    )
}
export default ForumScreen;