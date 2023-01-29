import { Text, TextProps } from './Themed';

type MonoTextProps = {
  fontFamiliy?:
    | 'space-mono'
    | 'space-mono-bold'
    | 'space-mono-italic'
    | 'space-mono-bold-italic';
};

export function MonoText(props: TextProps & MonoTextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: props.fontFamiliy || 'space-mono' }]}
    />
  );
}
