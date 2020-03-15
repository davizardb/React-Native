import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.light,
    lineHeight: 21,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
// export const Container = styled.View`
//   display: flex;
//   background: '#7A91CA';
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
// `;

// export const WelcomeTitle = styled.Text`
//   font-size: 24px;
//   color: '#fff';
//   font-weight: bold;
// `;

// export const WelcomeDescription = styled.Text`
//   font-size: 14px;
//   color: '#fff';
//   margin-top: 10px;
//   margin: 20px;
//   text-align: center;
//   line-height: 21px;
//   margin-bottom: 20px;
// `;

// export const InputText = styled.TextInput`
//   background: '#fff';
//   align-self: stretch;
//   height: 44px;
//   border-radius: 3px;
//   font-size: 12px;
//   padding: 20px 20px;
// `;

// export const ButonTouch = styled.TouchableOpacity`
//   background: '#444A5A';
//   align-self: stretch;
//   height: 44;
//   border-radius: 3px;
//   margin-top: 10px;
//   justify-content: center;
//   align-items: center;
// `;

// export const ButtonText = styled.Text`
//   font-size: 12px;
//   color: '#fff';
//   font-weight: bold;
// `;
// export const ErrorText = styled.Text`
//   color: '#FF5A5A';
//   font-size: 12px;
//   margin-top: 10px;
// `;
