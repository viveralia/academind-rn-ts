import {
  StyleSheet,
  ViewStyle,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from "react-native";

import { globalStyles } from "../../constants/styles";

interface InputProps extends ViewProps {
  label: string;
  textInputProps: TextInputProps;
  error?: boolean;
}

export default function Input({
  label,
  textInputProps,
  style,
  error,
  ...viewProps
}: InputProps): JSX.Element {
  const inputStyles: ViewStyle[] = [styles.input];

  if (textInputProps.multiline) inputStyles.push(styles.multiline);
  if (error) inputStyles.push(styles.invalidInput);

  return (
    <View style={[styles.container, style]} {...viewProps}>
      <Text style={[styles.label, error && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputProps} />
      {error && <Text style={styles.error}>Invalid format</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: globalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: globalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: globalStyles.colors.primary700,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  error: {
    fontSize: 12,
    marginTop: 4,
    color: globalStyles.colors.error50,
    fontWeight: "600",
  },
  invalidLabel: {
    color: globalStyles.colors.error50,
  },
  invalidInput: {
    backgroundColor: globalStyles.colors.error50,
  },
});
