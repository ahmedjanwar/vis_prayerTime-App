import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://192.168.114.65:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      {data ? (
        <>
        <Text>{data && data[0].Date}</Text>
        
        <Text>{data && data[0]["Hijri Date"]}</Text>
        
        </>
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};
