import { useTranslation } from 'react-i18next';

const useStartTranslation = () => {
  const { t } = useTranslation();
  return t;
};

const tr = (type : string) => {
  const t = useStartTranslation();
  return t(type);
};

export default tr;
