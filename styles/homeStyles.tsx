import { StyleSheet } from "react-native";
const H_PADDING = 10;

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7ed",
  },
  topMainView: {
    flexDirection: "row",
    marginHorizontal: H_PADDING,
    marginVertical: 10,
  },
  topView1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topView2: {
    flex: 5,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  topView3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topView4: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  topText1: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
  },
  topText2: {
    fontFamily: "PoppinsBold",
    fontSize: 24,
  },
  image1: {
    borderRadius: 100,
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  image2: {
    width: 30,
    height: 30,
  },
  balanceCard: {
    borderRadius: 20,
    marginHorizontal: H_PADDING,
    marginVertical: 10,
    padding: 20,
  },
  line: {
    height: 1,
    backgroundColor: "#ffffffff",
    marginVertical: 12,
  },
  view5: {
    flexDirection: "row",
  },
  view6: {
    flex: 1,
  },
  view7: {
    flex: 1,
  },
  topText3: {
    fontFamily: "PoppinsBold",
    fontSize: 24,
    color: "#ffffffff",
  },
  topText4: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    color: "#ffffffff",
  },
  topText5: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#ffffffff",
  },
  view8: {
    flexDirection: "row",
    marginHorizontal: H_PADDING,
    marginVertical: 10,
  },
  view9: {
    flex: 1,
    borderColor: "#5693adff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginRight: 5,
    backgroundColor: "#e1ebf0ff",
  },
  view10: {
    flex: 1,
    borderColor: "#af56b3ff",
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    marginRight: 5,
    backgroundColor: "#f4eef5ff",
  },
  topText6: {
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    color: "#020202ff",
  },
  topText7: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
    color: "#000000ff",
  },
});
