import { Link as RouterLink } from "react-router-dom";
import { SelectedPage } from "../types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  to: string;  
};

const Link = ({ page, selectedPage, setSelectedPage, to }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <RouterLink
      to={`${to}#${lowerCasePage}`} 
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-500 text-slate-600`}
    >
      {page}
    </RouterLink>
  );
};

export default Link;
