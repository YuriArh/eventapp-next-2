import React, { ComponentType } from "react";

// interface Props {
//    components: Array<React.ComponentType<React.PropsWithChildren<any>>>
//    children: React.ReactNode
// }

const compose = (providers: ComponentType<React.PropsWithChildren<any>>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

export default compose;
