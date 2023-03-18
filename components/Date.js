import * as React from 'react';
import { Text, View } from 'react-native';


export default function App() {
  const [time, setTime] = React.useState();

  React.useEffect(() => {
    const timer = setInterval(() => {
        let h = new Date().getHours().toLocaleString();
        let m = new Date().getMinutes().toLocaleString();
        let s = new Date().getSeconds().toLocaleString();
      setTime(h + ':' + m + ':' + s);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View >
      <Text style={{ fontSize: 45,}}>{time}</Text>
    </View>
  );
}

