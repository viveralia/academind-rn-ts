import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import { globalStyles } from "../../constants/styles";

export interface ButtonProps
  extends Omit<PressableProps, "style" | "children"> {
  children: TextProps["children"];
  mode?: "flat" | "default";
  style?: ViewProps["style"];
}

export default function Button({
  children,
  mode = "default",
  style,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <View style={style}>
      <Pressable style={({ pressed }) => pressed && styles.pressed} {...props}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: globalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: globalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: globalStyles.colors.primary100,
    borderRadius: 4,
  },
});
