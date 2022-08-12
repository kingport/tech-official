import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ShopFooter from '../../../components/ShopFooter';
import { useNewsDetailResult } from '../../../hooks/useNewsDetailResult';
import { getLanguage } from '../../../utils';
import './index.css';

export default function (props: any) {
  const params = useParams();
  const { data: newsDetailResult } = useNewsDetailResult({
    language: getLanguage(),
    newsEventId: params?.id,
  });

  return (
    <div className="content-main">
      <div  className="container">
        <div
          className="news-head"
          dangerouslySetInnerHTML={{
            __html: newsDetailResult?.pc?.content || '',
          }}
        ></div>
      </div>
      <ShopFooter />
    </div>
  );
}
