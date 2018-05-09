import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerSpace: {
    marginTop: 60,
    marginBottom: 40
  },
  headerSpaceIphoneX: {
    marginTop: 88,
    marginBottom: 82
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(100, 53, 201, 0.1)',
    paddingTop: 6,
    paddingBottom: 6,
    flex: 1
  },
  itemImage: {
    width: 99,
    height: 138,
    margin: 6
  },
  itemContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    color: '#000',
    marginBottom: 2
  },
  itemOriginalTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 10
  },
  itemMeta: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 10
  },
  averageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  ratingTextWrapper: {
    backgroundColor: '#FFCE00',
    borderColor: '#FFCE00',
    borderRadius: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 10
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#000'
  },
  boxWrapper: {
    flexDirection: 'row'
  },
  boxTextWrapper: {
    backgroundColor: '#e5120c',
    borderColor: '#e5120c',
    borderWidth: 1,
    borderRadius: 3,
    paddingTop: 1,
    paddingBottom: 1,
    paddingRight: 5,
    paddingLeft: 5
  },
  boxText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    fontWeight: '900'
  },
  title: {
    fontSize: 26,
    color: '#e5120c',
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 2,
    lineHeight: 33,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300'
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: 'rgba(0, 0, 0, 0.8)',
    lineHeight: 26
  },
  detailImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 6
  },
  detailImage: {
    width: 120,
    height: 180,
    margin: 6
  },
  detailContent: {
    flex: 1,
    marginLeft: 13,
    marginTop: 6
  },
  detailText: {
    fontSize: 14,
    fontFamily: 'Helvetica Neue',
    color: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 5
  },
  detailSummaryWrapper: {
    paddingTop: 20
  },
  detailSummary: {
    marginBottom: 15,
    paddingLeft: 6,
    paddingRight: 6
  },
  loadMoreWrapper: {
    marginVertical: 20,
    alignSelf: 'center'
  },
  loadMoreText: {
    color: 'rgba(0, 0, 0, 0.3)'
  },
  inputWrapper: {
    paddingTop: 7,
    paddingLeft: 7,
    paddingRight: 7,
    borderColor: "rgba(100, 53, 201, 0.1)",
    borderBottomWidth: 1
  },
  input: {
    height: 50
  },
  inputLoading: {
    position: 'absolute',
    top: 20,
    right: 10
  },
  searchHeader: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    marginTop: 30,
    marginLeft: 10
  },
  searchText: {
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    color: '#aaa',
    marginBottom: 6
  },
  deleteIcon: {
    width: 20,
    height: 20,
    margin: 10,
    opacity: 0.6
  }
})
