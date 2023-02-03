import { PropsWithChildren } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";

import colors from "../../constants/colors";

interface Props
  extends PropsWithChildren,
    Omit<PressableProps, "children" | "style">,
    Pick<ViewProps, "style"> {}

export default function PrimaryButton({
  children,
  style,
  ...props
}: Props): JSX.Element {
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        android_ripple={{ color: colors.primary500 }}
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressed,
        ]}
        {...props}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: colors.primary600,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
