import BaseText from "../../elements/Text";

import { gridScale, fontSizes } from "../../utils";

const Text = BaseText.extend`
  color: inherit;
  font-size: ${fontSizes("small")};
  padding: ${gridScale(0.5)};
`;

/** @component */
export default Text;
