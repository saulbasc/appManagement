import { useTranslation } from "react-i18next";

const useTr = () => {
  const { t } = useTranslation();
  return (key: string) => t(key);
};

export default useTr;
