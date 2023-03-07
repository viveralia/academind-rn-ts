import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface IconButtonProps {
  icon: string;
  size: number;
  color: string;
  onPress: PressableProps["onPress"];
}

export default function IconButton({
  icon,
  size,
  color,
  onPress,
}: IconButtonProps): JSX.Element {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <Ionicons name={icon as any} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
