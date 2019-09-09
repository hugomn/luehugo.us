import { css } from "styled-components";

export const color = (item, active = false, dark = false) => {
  if (active) {
    return css`
      color: ${ dark ? item.active.color.dark : item.active.color.light};
      ${hover(item, dark)};
    `;
  } else {
    return css`
      color: ${ dark ? item.color.dark : item.color.light};
      ${hover(item, dark)};
    `;
  }
};

export const hover = (item, dark = false) => css`
  &:hover {
    color: ${ dark ? item.hover.color.dark : item.hover.color.light};
  }
`;

