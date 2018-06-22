import BaseIcon from "../../elements/Icon";

import { gridScale } from "../../utils";

const Icon = BaseIcon.extend`
  color: inherit;
  padding: ${gridScale(0.5)};
`;

/** @component */
export default Icon;
