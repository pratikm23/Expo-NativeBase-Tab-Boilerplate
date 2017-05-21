import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  tabLabel: {
    margin: 8,
    fontSize: 13,
    color: '#fff',
  },

  tabIndicator: {
    backgroundColor: '#FFEB3B',
  },
  textColor:{
    color:'#ffffff'
  },
  quoteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  quoteMarks: {
    alignSelf: 'flex-start',
    color: '#E91E63',
    fontSize: 36,
    left: -8,
    bottom: -42,
    marginTop: -64,
  },

  quoteText: {
    color: '#222',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    margin: 8,
  },

  quoteAuthor: {
    color: '#888',
    fontSize: 12,
    fontStyle: 'italic',
  },

  button: {
    margin: 16,
    color: '#0084FF',
  },

  selectedTab: {
    backgroundColor: '#0084FF',
  },
});

