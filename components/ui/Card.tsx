import { StyleSheet, View, ViewProps } from "react-native";

import colors from "../../constants/colors";

export default function Card({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 26,
    backgroundColor: colors.primary500,
    marginHorizontal: 24,
    borderRadius: 6,
    elevation: 6,
    shadowColor: colors.primary800,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
});
