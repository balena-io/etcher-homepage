
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Home from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Home'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Doc from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Docs from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Docs'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Pro from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages____ from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/404'
    const templateMap = {
    t_0: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Home,
t_1: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Doc,
t_2: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Docs,
t_3: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Pro,
t_4: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages____
  }
    const templateTree = {c:{"404":{t:"t_4"},"etcher":{t:"t_0",c:{"docs":{c:{"developers":{t:"t_1"},"embedding":{t:"t_1"},"getting-started":{t:"t_1"},"index":{t:"t_1"},"port":{t:"t_1"}},t:"t_2"},"pro":{c:{"developers":{t:"t_3"},"embedding":{t:"t_3"},"getting-started":{t:"t_3"},"index":{t:"t_3"},"port":{t:"t_3"}},t:"t_3"}}},"getting-started":{t:"t_1"}}}
    
    const getTemplateForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }
  

    export const paths = [{"path":"/etcher","title":"Home","component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Home","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Developers","path":"/etcher/docs/developers","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Embedding","path":"/etcher/docs/embedding","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Getting started","path":"/etcher/docs/getting-started","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Index","path":"/etcher/docs/index","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Port","path":"/etcher/docs/port","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Docs","title":"Docs","path":"/etcher/docs","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"Developers","path":"/etcher/pro/developers","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"Embedding","path":"/etcher/pro/embedding","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"Getting started","path":"/etcher/pro/getting-started","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"Index","path":"/etcher/pro/index","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"Port","path":"/etcher/pro/port","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Pro","title":"EtcherPro","path":"/etcher/pro","hasGetProps":false},{"is404":true,"path":"/404","component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/404","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Getting started","path":"/getting-started","hasGetProps":false}]

    export default class Routes extends Component {
      render () {
        return (
            
    <Route path='*' render={props => {
      let Template = getTemplateForPath(props.location.pathname)
      if (!Template) {
        Template = getTemplateForPath('404')
      }
      return <Template {...props} />
    }} />
  
        )
      }
    }
  