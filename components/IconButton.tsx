import { Pressable, PressableProps, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type IconName = typeof MaterialIcons["name"];

type Props = {
  size?: number;
  materialIcon: (pressed: boolean) => IconName | IconName;
  color?: string;
} & PressableProps;

export default function IconButton({
  size = 28,
  color = "#fff",
  materialIcon,
  ...props
}: Props): JSX.Element {
  const sizeStyles = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <Pressable style={[sizeStyles, styles.container]} {...props}>
      {({ pressed }) => {
        function getIcon(): IconName {
          if (typeof materialIcon === "string") return materialIcon as IconName;
          return materialIcon(pressed) as IconName;
        }

        return (
          <MaterialIcons
            style={pressed && { opacity: 0.35 }}
            name={getIcon() as any}
            size={size * 0.75}
            color={color}
          />
        );
      }}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
