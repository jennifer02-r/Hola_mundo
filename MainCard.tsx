import { View, Text } from "react-native";

interface Props {
  loading: boolean;
}

function MainCard({ loading }: Props) {
  return (
    <View>
      {loading ? <Text>Cargando...</Text> : <Text>Contenido Listo!</Text>}
    </View>
  );
}

export default MainCard;
