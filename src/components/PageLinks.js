
import { pageLinks } from "../data";
import { PageLink } from "./PageLink";

const PageLinks = ({ className, parentClass }) => {
  return (
    <ul className={parentClass} id={parentClass}>
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} {...link} className={className} />
        );
      })}
    </ul>
  );
};

export default PageLinks;
