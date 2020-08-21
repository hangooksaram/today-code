import React, {View, Text} from 'react'

function ContentList ({item}){
    return(
        <View>
            <Text>
                {item.name}
                {item.content}
            </Text>
        </View>
    )
}

export default ContentList