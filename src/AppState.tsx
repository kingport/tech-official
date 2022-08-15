import React, { useState } from 'react';
import { useCompanyIdResult } from './hooks/useCompanyIdResult';

const defaultValue = {
    username: 'zhangsan',
    age: 20
}


export const appContext = React.createContext<any>(null);

// 组件化provider
export const AppStateProvider = (props:any) => {
    const { data: companyIdResult, isLoading: companyIdResultLoading } = useCompanyIdResult({domainName: window.location.hostname === 'localhost' ? "test.wangdingkun.xyz" : window.location.hostname});
    const [state, setState] = useState(companyIdResult);
    return <appContext.Provider value={state}>{props.children}</appContext.Provider>
}
