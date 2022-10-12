import { useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { appContext } from '../../../App';
import { getLanguage } from '../../../utils';
import { useMenusResult } from '../../../hooks/useMenusResult';
import { usePolicyResult } from '../../../hooks/usePolicyResult';

const Service = () => {
  const location: any = useLocation();
  const domain = useContext(appContext);

  let pathId = '';
  if (!location?.state?.id) {
    const { data: menusResult } = useMenusResult({
      language: getLanguage(),
      companyId: domain?.id,
    });
    menusResult?.pc?.topTitleVoList.map((x) => {
      if (x.subtitleVoList) {
        x.subtitleVoList.map((k: any) => {
          if (k.path === window.location.pathname) {
            pathId = k.subjectId;
          }
        });
      }
    });
  }

  const { data: brandInfoResult } = usePolicyResult({
    language: getLanguage(),
    subtitleId: location?.state?.id || pathId,
  });

  return (
    <div
      style={{ width: '92%', margin: '20px auto' }}
      dangerouslySetInnerHTML={{
        __html:
          getLanguage() === 'en'
            ? brandInfoResult?.descEn
            : brandInfoResult?.descCn,
      }}
    ></div>
  );
};

export default Service;
