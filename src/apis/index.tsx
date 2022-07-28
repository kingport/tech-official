import axios from "./request";

// 获取首页信息
export interface IGetHomeResultReq {
  language?: string,
  topTitleId?: number,
}
export interface IHomeResult {
  pc?: {
    banner1: string,
    banner2: string,
    banner3: string,
    banner4: string,
    banner5: string,
  },
  h5?: {
    banner1: string,
    banner2: string,
    banner3: string,
    banner4: string,
    banner5: string,
  },
}
export const getHomeResult = async (params: IGetHomeResultReq) => {
  const res = await axios.get('/front/index/find', {params})
  return res?.data as IHomeResult | undefined;
}

// 获取全局菜单
export interface IGetMenusResultReq {
  companyId: number,
  language?: string,
}
export interface IMenusResult {
  pc: {
    companyName: string,
    logoUrl: string,
    topTitleVoList: [],
  },
  h5: {
    companyName: string,
    logoUrl: string,
    topTitleVoList: [],
  }
}
export const getMenusResult = async (params: IGetMenusResultReq) => {
  const res = await axios.get(`/front/menu/find`, {params})
  return res?.data as IMenusResult | undefined;
}

// 底部友情链接
export interface IGetFooterResultReq {
  companyId: number,
  language?: string,
}
export interface IFooterUrlResult {
  quickCode: string,
  bottomUrlVoList: [],
}
export const getFooterUrl = async (params: IGetFooterResultReq) => {
  const res = await axios.get(`/front/bottom/${params?.companyId}`)
  return res?.data as IFooterUrlResult | undefined;
}

// 获取浮窗信息
export interface IGetWindowResultReq {
  companyId: number,
  language?: string,
}
export interface IWindowResult {
  title: string,
  companyId: number,
  saleEnd: string,
  discount: string,
}
export const getWindowInfo = async (params: IGetWindowResultReq) => {
  const res = await axios.get(`/front/index/window/${params?.companyId}`)
  return res?.data as IWindowResult | undefined;
}


// 获取配置表单信息
export interface IGetFormResultReq {
  companyId: number,
  language?: string,
}
export interface IFormResult {
  fieldList: [],
}
export const getFieldForm = async (params: IGetFormResultReq) => {
  const res = await axios.get(`/front/index/dialog/${params?.companyId}`)
  return res?.data as IFormResult | undefined;
}
