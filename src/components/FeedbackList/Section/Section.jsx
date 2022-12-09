import { SectionBox, Title } from "./Section.styled";

export function Section({title, children}) {
  return (
    <>
      <SectionBox>
        <Title>{title}</Title>
        {children}
      </SectionBox>
    </>
  );
}
