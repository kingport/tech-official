import axios from './request';

// 获取首页信息
export interface IGetHomeResultReq {
  language?: string;
  topTitleId?: number;
}
export interface IHomeResult {
  pc?: {
    banner1: string;
    banner2: string;
    banner3: string;
    banner4: string;
    banner5: string;
    banner6: string;
    video: string;
    topImage: string;
  };
  h5?: {
    banner1: string;
    banner2: string;
    banner3: string;
    banner4: string;
    banner5: string;
    banner6: string;
    video: string;
  };

  brandListVoList: any;
}
export const getHomeResult = async (params: IGetHomeResultReq) => {
  const res = await axios.get('/front/index/find', { params });
  return res?.data as IHomeResult | undefined;
};

// 获取全局菜单
export interface IGetMenusResultReq {
  companyId: any;
  language?: string;
}
export interface IMenusResult {
  pc: {
    companyName: string;
    logoUrl: string;
    topTitleVoList: any[];
  };
  h5: {
    companyName: string;
    logoUrl: string;
    topTitleVoList: any[];
  };
}
export const getMenusResult = async (params: IGetMenusResultReq) => {
  const res = await axios.get(`/front/menu/find`, { params });
  return res?.data as IMenusResult | undefined;
};

// 底部友情链接
export interface IGetFooterResultReq {
  companyId: any;
  language?: string;
}
export interface IFooterUrlResult {
  quickCode: string;
  bottomUrlVoList: [];
}
export const getFooterUrl = async (params: IGetFooterResultReq) => {
  const res = await axios.get(`/front/bottom/${params?.companyId}`);
  return res?.data as IFooterUrlResult | undefined;
};

// 获取浮窗信息
export interface IGetWindowResultReq {
  companyId: any;
  language?: string;
}
export interface IWindowResult {
  title: string;
  companyId: any;
  saleEnd: string;
  discount: string;
  productTurnUrl?: any;
  pc: any;
  h5: any;
}
export const getWindowInfo = async (params: IGetWindowResultReq) => {
  const res = await axios.get(`/front/index/window/`, { params });
  return res?.data as IWindowResult | undefined;
};

// 获取配置表单信息
export interface IGetFormResultReq {
  companyId: any;
  language?: string;
}
export interface IFormResult {
  pc: any;
  h5: any;
  discount: string;
  title: string;
  logoImageUrl: string;
  payUrl?: string;
  productImageUrl: string;
  productTurnUrl: string;
  companyId: any;
  productVoList: any[];
}
export const getFieldForm = async (params: IGetFormResultReq) => {
  const res = await axios.get(`/front/index/dialog/`, { params });
  return res?.data as IFormResult | undefined;
};

// 提交表单
export interface IPostFormResultReq {
  dialogFormParam: any;
}
export interface IFormSumbitResult {}
export const postFormSumbit = async (dialogFormParam: IPostFormResultReq) => {
  return await axios.post(`/front/dialog/save`, { ...dialogFormParam });
};

// 获取公司简介
export interface IGetCompanyResultReq {
  subtitleId: number;
  language?: string;
}
export interface ICompanyResult {
  pc: {
    historyVoList: [];
    introduction: any;
    topImageUrl: string;
    historyImageUrl: string;
    companyTitle: string;
    logoUrl: string;
    cultureTitle: string;
    companyCultureVoList: any[];
    companyHistoryTitle: string;
  };
  h5: {
    historyVoList: [];
    introduction: any;
    topImageUrl: string;
    historyImageUrl: string;
    companyTitle: string;
    logoUrl: string;
    cultureTitle: string;
    companyCultureVoList: any[];
    companyHistoryTitle: string;
  };
}
export const getCompanyInfo = async (params: IGetCompanyResultReq) => {
  const res = await axios.get(`/front/profile`, { params });
  return res?.data as ICompanyResult | undefined;
};

// 获取荣誉资质
export interface IGetHonorResultReq {
  subtitleId: number;
  language?: string;
}
export interface IHonorResult {
  pc: {
    topBackgroundImage: string;
    bannerImageList: [];
    bottomBackgroundImage: string;
    content: any;
    eventList: [];
    title: string;
  };
}
export const getHonorInfo = async (params: IGetHonorResultReq) => {
  const res = await axios.get(`/front/awards`, { params });
  return res?.data as IHonorResult | undefined;
};

// 获取质量方针信息
export interface IGetQualityResultReq {
  subtitleId: number;
  language?: string;
}
export interface IQualityResult {
  pc: {
    qualityPolicyList: [];
    qualitySecurityList: any;
    topImage: string;
    bottomImage: string;
    ecoTitle: string;
    securityTitle: string;
    productImage: string;
    qualityTitle: string;
    ecoList: [];
  };
  h5: {
    qualityPolicyList: [];
    qualityTitle: string;
    ecoList: [];
    qualitySecurityList: any;
    topImage: string;
    bottomImage: string;
    ecoTitle: string;
    securityTitle: string;
    productImage: string;
  };
}
export const getQualityInfo = async (params: IGetQualityResultReq) => {
  const res = await axios.get(`/front/quality`, { params });
  return res?.data as IQualityResult | undefined;
};

// 社会责任
export interface IGetResponsibilityResultReq {
  subtitleId?: number;
  language?: string;
}
export interface IResponsibilityResult {
  pc: {
    articleList: [];
    subtitle: string;
    title: string;
    topImage: string;
  };
  h5: {
    articleList: [];
    subtitle: string;
    title: string;
    topImage: string;
  };
}
export const getResponsibilityInfo = async (
  params: IGetResponsibilityResultReq
) => {
  const res = await axios.get(`/front/responsibility`, { params });
  return res?.data as IResponsibilityResult | undefined;
};

// 新闻中心
export interface IGetNewsResultReq {
  subtitleId?: number;
  language?: string;
}
export interface INewsResult {
  pc: {
    title: string;
    image: string;
  };
  newsId: number;
}
export const getNews = async (params: IGetNewsResultReq) => {
  const res = await axios.get(`/front/news`, { params });
  return res?.data as INewsResult | undefined;
};

// 新闻与事件列表
export interface IGetNewsEventResultReq {
  newsId?: number;
  language?: string;
}
export interface INewsEventResult {
  rows: [];
}
export const getNewsEvents = async (params: IGetNewsEventResultReq) => {
  const res = await axios.get(`/front/news/event`, { params });
  return res?.data as INewsEventResult | undefined;
};

// 获取新闻详情
export interface IGetNewsDetailResultReq {
  newsEventId?: string;
  language?: string;
}
export interface INewsDetailResult {
  pc: {
    content: string;
  };
  h5: {
    content: string;
  };
}
export const getNewsDetail = async (params: IGetNewsDetailResultReq) => {
  const res = await axios.get(`/front/news/event/detail`, { params });
  return res?.data as INewsDetailResult | undefined;
};

// 获取产品便携储能和太阳能板
export interface IGetBrandInfoResultReq {
  subtitleId?: number;
  language?: string;
}
export interface IBrandInfoResult {
  pc: {
    image: string;
    productList: {
      descList: [];
      image: string;
      subtitle: string;
      title: string;
    }[];
    slideList: [];
    title: string;
    usedList: any[];
  };
  h5: {
    image: string;
    productList: {
      descList: [];
      image: string;
      subtitle: string;
      title: string;
    }[];
    slideList: [];
    title: string;
    usedList: any[];
  };
}
export const getBrandInfo = async (params: IGetBrandInfoResultReq) => {
  const res = await axios.get(`/front/brand`, { params });
  return res?.data as IBrandInfoResult | undefined;
};

// 获取产品配件
export interface IGetAccessoryResultReq {
  subtitleId?: number;
  language?: string;
}
export interface IAccessoryResult {
  pc: {
    image: string;
    detailVoList: any[];
  };
  h5: {
    image: string;
    detailVoList: any[];
  };
}
export const getAccessory = async (params: IGetAccessoryResultReq) => {
  const res = await axios.get(`/front/accessory`, { params });
  return res?.data as IAccessoryResult | undefined;
};

// 商业合作门店接口
export interface IGetStoreListResultReq {
  subtitleId?: number;
  language?: string;
}
export interface IStoreListResult {
  pc: {
    image: string;
    detailVoList: any[];
    imageList: [];
  };
  h5: {
    image: string;
    detailVoList: any[];
    imageList: [];
  };
}
export const getStoreList = async (params: IGetStoreListResultReq) => {
  const res = await axios.get(`/front/store`, { params });
  return res?.data as IStoreListResult | undefined;
};

// 提交咨询表单
export interface IPostFormResultReq {
  cooperateParam: any;
}
export interface IFormSumbitResult {}
export const postCooperateSumbit = async (
  cooperateParam: IPostFormResultReq
) => {
  return await axios.post(`/front/cooperate/save`, { ...cooperateParam });
};

// 获取公司ID
export interface IGetCompanyIdResultReq {
  domainName: string;
}
export interface ICompanyIdResult {
  id: string | number;
  theme: string;
}
export const getCompanyId = async (params: IGetCompanyIdResultReq) => {
  const res = await axios.get(`/front/domain`, { params });
  return res?.data as ICompanyIdResult | undefined;
};

// 获取商业合作信息
export interface IGetCooperateInfoResultReq {
  subtitleId?: number;
  language?: string;
}
export interface ICooperateInfoResult {
  pc: any;
  h5: any;
}
export const getCooperateInfo = async (params: IGetCooperateInfoResultReq) => {
  const res = await axios.get(`/front/cooperate`, { params });
  return res?.data as ICooperateInfoResult | undefined;
};

// 获取精英加盟信息
export interface IGetEliteResultReq {
  subtitleId?: number;
  language?: string;
}
export interface IEliteResult {
  pc: any;
  h5: any;
}
export const getEliteInfo = async (params: IGetEliteResultReq) => {
  const res = await axios.get(`/front/elite`, { params });
  return res?.data as IEliteResult | undefined;
};

// 获取国家信息
export interface IGetEliteResultReq {
  subtitleId?: number;
  language?: string;
}

export const getDictInfo = async (params: IGetEliteResultReq) => {
  const res = await axios.get(`/front/dict?dictType=sys_country`, { params });
  return res?.data as any;
};

// 获取协议
export interface IGetEliteResultReq {
  subtitleId?: number;
  language?: string;
}

export const getPolicy = async (params: IGetEliteResultReq) => {
  const res = await axios.get(`/front/policy`, { params });
  return res?.data as any;
};
