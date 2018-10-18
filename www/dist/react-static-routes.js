
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'

    import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Home from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Home'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_success_banner from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/success-banner'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Doc from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Docs from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Docs'
import _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages____ from '/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/404'
    const templateMap = {
    t_0: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Home,
t_1: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_success_banner,
t_2: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Doc,
t_3: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages_Docs,
t_4: _home_aga_Work_etcher_hp_theme_landr_theme_fin_pages____
  }
    const templateTree = {c:{"404":{t:"t_4"},"/":{t:"t_0"},"success-banner":{t:"t_1"},"docs":{c:{"developers":{t:"t_2"},"embedding":{t:"t_2"},"getting-started":{t:"t_2"},"index":{t:"t_2"},"port":{t:"t_2"}},t:"t_3"},"getting-started":{t:"t_2"}}}
    
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
  

    export const paths = [{"path":"/","title":"Home","component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Home","hasGetProps":false},{"path":"/success-banner","title":"success-banner","component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/success-banner","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Developers","path":"/docs/developers","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Embedding","path":"/docs/embedding","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Getting started","path":"/docs/getting-started","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Index","path":"/docs/index","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Port","path":"/docs/port","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Docs","title":"Docs","path":"/docs","hasGetProps":false},{"is404":true,"path":"/404","component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/404","hasGetProps":false},{"component":"/home/aga/Work/etcher-hp/theme/landr-theme-fin/pages/Doc","title":"Getting started","path":"/getting-started","hasGetProps":false}]

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
  