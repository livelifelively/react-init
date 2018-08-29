import Enzyme from "enzyme/build/index";
import EnzymeAdapter from "enzyme-adapter-react-16/build/index";

Enzyme.configure({
  adapter: new EnzymeAdapter
});
