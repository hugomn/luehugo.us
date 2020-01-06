import styled from "styled-components";
import { flexbox, layout, space, color } from "styled-system";

export const FixedContainer = styled("section")(
  {
    maxWidth: ({ theme }) => theme.maxWidth,
    margin: "0 auto"
  },
  color,
  flexbox,
  layout,
  space
);

FixedContainer.displayName = "FixedContainer";

FixedContainer.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...flexbox.propTypes,
  ...layout.propTypes,
};
